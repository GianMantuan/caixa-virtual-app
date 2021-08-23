import styled from 'styled-components/native'
import { Text } from '../Text'

export const Container = styled.View`
  height: 100px;
  margin: 10px 20px;
  border-radius: 8px;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.white};
  align-items: center;
  padding: 20px 20px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.12);
  position: relative;
  elevation: 4;
`

export const DateContainer = styled.View`
  flex-direction: column;
  align-items: center;
`

export const ContainerText = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  margin-left: 15px;
  min-height: 42px;
  height: 100%;
`

export const Date = styled(Text)`
  font-size: 18px;
  color: rgba(0, 0, 0, 0.5);
  font-weight: bold;
`

export const Time = styled(Text)`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.5);
`

export const Title = styled(Text)`
  font-size: 18px;
  color: ${({ theme }) => theme.text.default.color};
  font-weight: bold;
`

export const Subtitle = styled(Text)`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.5);
`

export const ImageLeft = styled.Image`
  height: 50px;
  width: 50px;
`
