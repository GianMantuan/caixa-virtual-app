import styled from 'styled-components/native'

export const Container = styled.View`
  height: ${(props) => props.height};
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
