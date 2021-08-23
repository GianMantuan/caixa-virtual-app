import React, { useRef, useEffect } from 'react'
import ActionSheet from 'react-native-actions-sheet'
import { ActionSheetProps } from 'react-native-actions-sheet/src/types'
import { Button, IButtonProps } from '../Button'

import * as S from './style'

export interface IBottomSheetProps extends ActionSheetProps {
  visible: boolean
  title?: string
  subtitle?: string
  footerButton?: IButtonProps
  availableBalance?: boolean
  children: React.ReactNode
}

export const BottomSheet = ({
  visible,
  children,
  title,
  subtitle,
  availableBalance = false,
  footerButton,
  ...props
}: IBottomSheetProps): JSX.Element => {
  const actionSheetRef = useRef<ActionSheet>()

  useEffect(() => {
    actionSheetRef.current?.setModalVisible(visible)
  }, [visible])

  return (
    <S.Action
      {...props}
      ref={actionSheetRef}
      headerAlwaysVisible={true}
      drawUnderStatusBar={false}>
      <S.Content>
        {title && (
          <S.TitleContent>
            <S.Title>{title}</S.Title>
          </S.TitleContent>
        )}
        {subtitle && (
          <S.SubtitleContent>
            <S.Subtitle>{subtitle}</S.Subtitle>
          </S.SubtitleContent>
        )}
        {children}
        {availableBalance && (
          <S.InfoContent>
            <S.Info>Disponível: $ 0,00</S.Info>
          </S.InfoContent>
        )}
        {footerButton && (
          <S.ButtonContent>
            <Button
              {...footerButton}
              customTextStyle={{ fontWeight: 'bold', fontSize: 14 }}
            />
          </S.ButtonContent>
        )}
      </S.Content>
    </S.Action>
  )
}
