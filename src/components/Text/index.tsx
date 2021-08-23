import React from 'react';
import {TextProps} from 'react-native';

import * as S from './style';

export interface ITextProps extends TextProps {
  children: React.ReactNode;
  size?: number;
  customColor?: string;
  uppercase?: boolean;
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
}

export const Text = ({children, ...props}: ITextProps): JSX.Element => (
  <S.Text {...props}>{children}</S.Text>
);
