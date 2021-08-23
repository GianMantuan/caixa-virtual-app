declare module 'styled-components' {
  export interface DefaultTheme {
    button: {
      fontWeight: string
      uppercase: boolean
      fontSize: string
    }

    text: {
      default: {
        color: string
        size: string
      }
    }
    colors: {
      background: string
      text: string
      negative: string
      positive: string
      white: string
      black: string
      grayStrong: string
      err: string
      yellow: string
    }
  }
}
