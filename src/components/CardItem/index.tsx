import React from 'react'
import { ImageProps, TouchableOpacityProps } from 'react-native'
import { ArrowUpCircle, ArrowDownCircle } from 'react-native-feather'
import { format, parseISO } from 'date-fns'

import { Card } from '~/components/Card'

import { theme } from '~/styles/theme'

import * as S from './style'

export interface ICardProps extends TouchableOpacityProps {
  description: string
  amount: string
  date: string
  category: string
  imageLeft: ImageProps
}

export const CardItem = ({
  description,
  amount,
  category,
  date,
  imageLeft,
  ...props
}: ICardProps): JSX.Element => {
  const parseDate = parseISO(date)

  const onRenderIcon = (type: string | undefined): JSX.Element => {
    if (type === 'INCOME')
      return (
        <ArrowUpCircle stroke={theme.colors.positive} width={32} height={32} />
      )
    if (type === 'OUTCOME')
      return (
        <ArrowDownCircle
          stroke={theme.colors.negative}
          width={32}
          height={32}
        />
      )

    return <></>
  }

  const onHandleDate = (date: Date): JSX.Element => {
    console.log(date)
    const day = format(date, 'dd MMM')
    const time = format(date, "H':'mm")

    return (
      <>
        <S.Date>{day}</S.Date>
        <S.Time style={{ fontSize: 14 }}>{time}</S.Time>
      </>
    )
  }

  return (
    <Card {...props} height="100">
      {onRenderIcon(category)}
      <S.ContainerText>
        <S.Title>{description}</S.Title>
        <S.Subtitle>{amount}</S.Subtitle>
      </S.ContainerText>
      <S.DateContainer>{onHandleDate(parseDate)}</S.DateContainer>
    </Card>
  )
}
