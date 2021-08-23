import styled from 'styled-components/native'
import ActionSheet from 'react-native-actions-sheet'
import { Text } from '../Text'
import { Dimensions } from 'react-native'

const { height } = Dimensions.get('screen')

export const Action = styled(ActionSheet).attrs(() => ({
  containerStyle: {
    height: height / 2,
  },
}))``

export const Content = styled.View`
  height: 100%;
`

export const ButtonContent = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
  margin: 0 50px;
  padding-bottom: 20px;
`

export const TitleContent = styled.View`
  margin-top: 20px;
  justify-content: center;
  align-items: center;
`

export const SubtitleContent = styled.View`
  padding: 20px 20px;
`

export const InfoContent = styled.View`
  padding: 10px 20px;
`

export const Title = styled(Text)`
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`

export const Subtitle = styled(Text)`
  font-size: 16px;
`

export const Info = styled(Text)`
  font-size: 14px;
  font-weight: 200;
`
