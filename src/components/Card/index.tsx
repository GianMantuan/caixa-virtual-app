import React from 'react'

import * as S from './style'

export const Card = ({ children, ...props }): JSX.Element => {
  return <S.Container {...props}>{children}</S.Container>
}
