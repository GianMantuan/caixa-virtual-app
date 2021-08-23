import { DefaultTheme } from 'styled-components/native'

export const theme: DefaultTheme = {
  button: {
    fontWeight: 'normal',
    uppercase: false,
    fontSize: '16px',
  },
  text: {
    default: {
      color: '#444',
      size: '12px',
      sizeNumber: 12,
    },
  },
  colors: {
    background: '#525EC2',
    text: 'rgba(0, 0, 0, 0.5)',
    negative: 'rgba(218, 62, 53, 1)',
    positive: 'rgba(99, 161, 64, 1)',
    white: '#FFFFFF',
    black: '#000000',
    grayStrong: '#AAAAAA',
    err: '#FF3D4C',
    yellow: '#FABD14',
  },
}
