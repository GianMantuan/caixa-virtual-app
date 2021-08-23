import React from 'react'
import { View } from 'react-native'
import { BottomSheet, IBottomSheetProps } from '~/components/BottomSheet'
import { Button } from '~/components/Button'

import * as S from './style'

interface IBalanceProps {
  onShow: (sheet: string) => void
  depositSheet?: IBottomSheetProps
  withdrawSheet?: IBottomSheetProps
  balance: number | string
  opacityButton: any
  verticalMarginButton: any
  verticalBalance: any
}

export const Balance = ({
  balance,
  onShow,
  depositSheet,
  withdrawSheet,
  opacityButton,
  verticalMarginButton,
  verticalBalance,
}: IBalanceProps): JSX.Element => {
  return (
    <>
      <S.Container>
        <View>
          <S.Header>
            <S.TextField size={14}>Balanço Total</S.TextField>
          </S.Header>
          <S.BalanceContainer style={{ marginTop: verticalBalance }}>
            <S.TextField size={40}>{balance}</S.TextField>
          </S.BalanceContainer>
        </View>
        <S.Action
          style={{
            opacity: opacityButton,
            marginTop: verticalMarginButton,
          }}>
          <Button
            onPress={() => onShow('deposit')}
            customStyle={{ width: 110, marginRight: 13 }}
            customTextStyle={{ fontWeight: 'bold', fontSize: 13 }}
            color={true}
            text="Depositar"
          />
          <Button
            onPress={() => onShow('withdraw')}
            customStyle={{ width: 110 }}
            customTextStyle={{ fontWeight: 'bold', fontSize: 13 }}
            color={false}
            text="Retirar"
          />
        </S.Action>
      </S.Container>
      {depositSheet && <BottomSheet {...depositSheet} />}
      {withdrawSheet && <BottomSheet {...withdrawSheet} />}
    </>
  )
}
