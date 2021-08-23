import React from 'react'
import { useState } from 'react'
import { Dimensions } from 'react-native'
import { Actions } from 'react-native-router-flux'

import { Button } from '~/components/Button'
import { Card } from '~/components/Card'
import { theme } from '~/styles/theme'

import * as S from './style'

export const SignIn = ({ onBackPress }): JSX.Element => {
  const DEVICE_HEIGHT = Dimensions.get('screen').height

  const [taxId, setTaxId] = useState<string | null>(null)
  const [password, setPassword] = useState<string | null>(null)

  return (
    <Card
      style={{
        height: DEVICE_HEIGHT / 3,
        flexDirection: 'column',
        top: -150,
        marginTop: DEVICE_HEIGHT / 2,
      }}>
      <S.IntroContainer>
        <S.Title>Informaçoes de Login</S.Title>
      </S.IntroContainer>
      <S.InputContainer>
        <S.InputSignin
          type="cpf"
          value={taxId}
          onChangeText={(val) => setTaxId(val)}
          placeholder="CPF"
        />
        <S.InputSignin
          options={{ mask: '**********' }}
          secureTextEntry={true}
          value={password}
          onChangeText={(val) => setPassword(val)}
          placeholder="Senha"
          autoCapitalize="none"
        />
      </S.InputContainer>
      <S.ButtonContainer>
        <Button
          onPress={() => Actions.home({ type: 'reset' })}
          customStyle={{
            backgroundColor: theme.colors.background,
            width: '100%',
            marginVertical: 10,
          }}
          color={false}
          text="Acessar minha conta"
        />
        <Button color onPress={() => onBackPress()} text="Voltar" />
      </S.ButtonContainer>
    </Card>
  )
}
