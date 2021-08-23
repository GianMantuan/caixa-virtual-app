import styled from 'styled-components/native';
import {ITextProps} from '.';

export const Text = styled.Text<ITextProps>`
  font-size: ${({size, theme}) => size || theme.text.default.sizeNumber}px;
  color: ${({theme}) => theme.text.default.color};
  text-transform: ${({uppercase}) => (uppercase ? 'uppercase' : 'none')};
  ${({fontWeight}) => fontWeight && `font-weight: ${fontWeight}`}
`;
