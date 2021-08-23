import React from 'react'
import { FlatList, Text, ViewStyle } from 'react-native'
import { Card } from '../Card'

interface ICardListProps {
  options: any[]
  customStyle?: ViewStyle
}

export const CardList = ({
  options,
  customStyle,
}: ICardListProps): JSX.Element => {
  return (
    <>
      {options.length > 0 ? (
        <FlatList
          style={{ ...customStyle }}
          data={options}
          renderItem={({ item, index }) => <Card key={index} {...item} />}
        />
      ) : (
        <Text>
          Você não fez nenhuma transação. Considere depositar dinheiro em sua
          carteira virtual
        </Text>
      )}
    </>
  )
}
