import React, { useCallback, useEffect, useState } from 'react'
import { Dimensions } from 'react-native'

import { Background } from '~/components/Background'
import { Button } from '~/components/Button'
import { Card } from '~/components/Card'
import { theme } from '~/styles/theme'
import { SignIn } from '../SignIn'
import { SignUp } from '../SignUp'

import * as S from './style'

export const Login = () => {
  const [screen, setScreen] = useState<string>('')

  const DEVICE_HEIGHT = Dimensions.get('screen').height

  useEffect(() => {
    setScreen('')
  }, [])

  const onBackPress = useCallback(() => {
    setScreen('')
  }, [])

  const onHandleLogin = useCallback((screen: string) => {
    switch (screen) {
      case 'signin':
        return <SignIn onBackPress={onBackPress} />
        break
      case 'signup':
        return <SignUp onBackPress={onBackPress} />
        break
      default:
        return (
          <Card
            style={{
              height: DEVICE_HEIGHT / 3,
              flexDirection: 'column',
              top: -150,
              marginTop: DEVICE_HEIGHT / 2,
            }}>
            <S.IntroContainer>
              <S.Title>Bem-vindo à Caixa Virtual</S.Title>
              <S.Description>
                Descubra novas formas de cuidar do seu património
              </S.Description>
            </S.IntroContainer>
            <S.ButtonContainer>
              <Button
                onPress={() => setScreen('signin')}
                customStyle={{
                  backgroundColor: theme.colors.background,
                  width: '100%',
                  marginVertical: 10,
                }}
                color={false}
                text="Acessar minha conta"
              />
              <Button
                onPress={() => setScreen('signup')}
                customStyle={{
                  borderColor: theme.colors.background,
                  width: '100%',
                  marginVertical: 10,
                }}
                color={true}
                text="Criar minha conta"
              />
            </S.ButtonContainer>
          </Card>
        )
    }
  }, [])

  return (
    <Background>
      <S.HeaderLogin>
        <S.Logo
          source={require('../../../assets/images/caixa-virtual-bg.png')}
        />
        {onHandleLogin(screen)}
      </S.HeaderLogin>
    </Background>
  )
}
