import { Animated, Dimensions, Platform } from 'react-native'

const DEVICE_HEIGHT = Dimensions.get('screen').height
const IOS = Platform.OS === 'ios'

const HEADER_MAX_HEIGHT = DEVICE_HEIGHT / 4
const HEADER_MIN_HEIGHT = DEVICE_HEIGHT / 8
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT

export const Animations = (offset: Animated.Value) => {
  const headerHight = offset.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: 'clamp',
  })

  const verticalBalance = offset.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [0, IOS ? -20 / 2 : -20 / 2, IOS ? -20 : -20],
    extrapolate: 'clamp',
  })

  const verticalMarginButton = offset.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [0, IOS ? -60 / 2 : -60 / 2, IOS ? -60 : -60],
    extrapolate: 'clamp',
  })

  const verticalBottomButton = offset.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [-60, IOS ? 10 / 2 : 10 / 2, IOS ? 25 : 25],
    extrapolate: 'clamp',
  })

  const opacity = offset.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 1, 0],
    extrapolate: 'clamp',
  })

  return {
    headerHight,
    verticalBalance,
    verticalMarginButton,
    verticalBottomButton,
    opacity,
  }
}
