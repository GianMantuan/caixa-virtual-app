import React, {
  useState,
  useCallback,
  useRef,
  createRef,
  RefObject,
} from 'react'
import { View, Animated, FlatList, TouchableOpacity, _View } from 'react-native'
import { CreditCard, ArrowUp } from 'react-native-feather'

import { Balance } from '../Balance'
import { Animations } from './animations'

import { Background } from '~/components/Background'
import { Header } from '~/components/Header'
import { CardItem } from '~/components/CardItem'
import { Text } from '~/components/Text'
import { MoneyInput } from '~/components/Input/MoneyInput'

import { theme } from '~/styles/theme'
import { formatPriceBRL } from '~/utils/formats'
import { IBalance } from '~/store'

export const Home = (): JSX.Element => {
  const [depositVisible, setDepositVisible] = useState<boolean>(false)
  const [withdrawVisible, setWithdrawVisible] = useState<boolean>(false)
  const [balance, setBalance] = useState('0')
  const [totalBalance, setTotalBalance] = useState<number>(0)
  const [options, setOptions] = useState([])

  const offset = useRef(new Animated.Value(0)).current
  const scroll = useRef() as RefObject<FlatList>
  const masked = createRef<any>()

  const {
    headerHight,
    opacity,
    verticalBalance,
    verticalBottomButton,
    verticalMarginButton,
  } = Animations(offset)

  // useEffect(() => {
  //   const init = async () => {
  //     const walletData = await readData()
  //     setWallet(data)
  //   }

  //   init()
  // }, [])

  const onResetState = useCallback(() => {
    setDepositVisible(false)
    setWithdrawVisible(false)
    setBalance('0')
  }, [])

  const onOpenBottomSheet = useCallback(async (sheet: string) => {
    if (sheet === 'deposit') setDepositVisible(true)
    if (sheet === 'withdraw') setWithdrawVisible(true)
  }, [])

  const onCloseBottomSheet = useCallback(() => {
    onResetState()
  }, [])

  const onCalculateBalance = useCallback(
    async (type) => {
      const balanceObj: IBalance = {
        description: '',
        amount: '',
        category: '',
        date: '',
      }

      let _totalAmount = 0
      let _amount = Number(masked.current.getRawValue())

      if (type === 'deposit') {
        _totalAmount = totalBalance + _amount
      }

      if (type === 'withdraw') {
        if (_amount !== 0 && _amount <= Number(totalBalance)) {
          _totalAmount = totalBalance - _amount
        } else {
          return onResetState()
        }
      }

      setTotalBalance(_totalAmount)

      Object.assign(balanceObj, {
        title: type === 'deposit' ? 'Entrada' : 'Retirada',
        amount: _amount,
        type: type === 'deposit' ? 'INCOME' : 'OUTCOME',
        date: new Date(),
      })

      // await storeData(balanceObj)
      onResetState()
    },
    [balance, masked],
  )

  return (
    <>
      <Background>
        <Header style={{ height: headerHight }}>
          <Balance
            balance={formatPriceBRL(totalBalance)}
            onShow={onOpenBottomSheet}
            opacityButton={opacity}
            verticalBalance={verticalBalance}
            verticalMarginButton={verticalMarginButton}
            depositSheet={{
              title: 'Depositar meu dinheiro',
              subtitle:
                'Digite abaixo o valor que voce deseja depositar em sua carteira digital.',
              visible: depositVisible,
              onClose: () => onCloseBottomSheet(),
              children: (
                <MoneyInput
                  ref={masked}
                  value={balance}
                  keyboardType="number-pad"
                  onChangeText={(value) => setBalance(value)}
                />
              ),
              footerButton: {
                text: 'Confirmar depósito',
                onPress: () => onCalculateBalance('deposit'),
                positive: true,
              },
            }}
            withdrawSheet={{
              title: 'Retirar meu dinheiro',
              subtitle:
                'Digite abaixo o valor que voce deseja retirar de sua carteira digital.',
              visible: withdrawVisible,
              availableBalance: true,
              onClose: () => onCloseBottomSheet(),
              children: (
                <MoneyInput
                  ref={masked}
                  value={balance}
                  keyboardType="number-pad"
                  onChangeText={(value) => setBalance(value)}
                />
              ),
              footerButton: {
                text: 'Confirmar retirada',
                onPress: () => onCalculateBalance('withdraw'),
                negative: true,
              },
            }}
          />
        </Header>
        <Animated.FlatList
          ref={scroll}
          data={options}
          renderItem={({ item }) => (
            <CardItem style={{ zIndex: 0 }} {...item} />
          )}
          removeClippedSubviews={false}
          ListFooterComponent={
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {options.length === 0 ? (
                <>
                  <CreditCard
                    color={theme.colors.grayStrong}
                    width={100}
                    height={100}
                    opacity={0.5}
                  />
                  <Text
                    size={20}
                    style={{ textAlign: 'center', opacity: 0.5 }}
                    customColor={theme.colors.grayStrong}>
                    Você não fez nenhuma transação. Considere depositar dinheiro
                    em sua carteira virtual
                  </Text>
                </>
              ) : null}
            </View>
          }
          ListFooterComponentStyle={{
            flex: 1,
            height: '100%',
            flexDirection: 'column',
            marginTop: 70,
            justifyContent: 'center',
            marginHorizontal: 10,
          }}
          keyExtractor={(item, index) => `list-item-${index}-${item}`}
          showsVerticalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: offset } } }],
            { useNativeDriver: false },
          )}
        />
      </Background>
      <Animated.View
        style={{
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          width: 40,
          height: 40,
          borderRadius: 100,
          shadowColor: '#171717',
          shadowOffset: { width: -2, height: 4 },
          shadowOpacity: 0.2,
          shadowRadius: 3,
          elevation: 1,
          backgroundColor: '#FFF',
          bottom: verticalBottomButton,
        }}>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() =>
            scroll.current?.scrollToOffset({ offset: 0, animated: true })
          }>
          <ArrowUp color={theme.colors.background} width={35} height={35} />
        </TouchableOpacity>
      </Animated.View>
    </>
  )
}
