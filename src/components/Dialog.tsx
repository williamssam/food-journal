import React from 'react'
import {Platform, StyleProp, useWindowDimensions, ViewStyle} from 'react-native'
import Modal from 'react-native-modal'

interface DialogType {
  toggleModal: boolean
  setToggleModal: React.Dispatch<React.SetStateAction<boolean>>
  children: React.ReactNode
  style?: StyleProp<ViewStyle>
}

const Dialog = ({toggleModal, setToggleModal, children, style}: DialogType) => {
  const {height, width} = useWindowDimensions()

  const deviceHeight =
    Platform.OS === 'ios'
      ? height
      : require('react-native-extra-dimensions-android').get(
          'REAL_WINDOW_HEIGHT',
        )

  return (
    <Modal
      isVisible={toggleModal}
      animationIn="bounceInDown"
      // animationOut="slideOutUp"
      useNativeDriver={true}
      avoidKeyboard={true}
      useNativeDriverForBackdrop={true}
      swipeDirection={['down', 'up', 'left', 'right']}
      // backdropOpacity={0.4}
      deviceWidth={width}
      deviceHeight={deviceHeight}
      onSwipeComplete={() => setToggleModal(false)}
      // onBackButtonPress={() => setToggleModal(false)}
      onBackdropPress={() => setToggleModal(false)}
      style={style}>
      {children}
    </Modal>
  )
}

export default Dialog
