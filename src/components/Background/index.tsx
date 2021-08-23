import React from 'react';

import * as S from './style';

export const Background = ({children}): JSX.Element => {
  return <S.Container>{children}</S.Container>;
};
