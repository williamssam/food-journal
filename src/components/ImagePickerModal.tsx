import React from 'react'
import {Pressable, StyleSheet, Text, View} from 'react-native'
import ImagePicker from 'react-native-image-crop-picker'
import Camera from '../assets/icons/Camera'
import Image from '../assets/icons/Image'
import {PickerResponseType} from '../models/screenTypes'
import {colors} from '../theme/colors'
import {fonts} from '../theme/fonts'

type ImagePickerType = {
  setPickerResponse: React.Dispatch<
    React.SetStateAction<PickerResponseType | null>
  >
  setToggleModal: React.Dispatch<React.SetStateAction<boolean>>
}

const ImagePickerModal = ({
  setPickerResponse,
  setToggleModal,
}: ImagePickerType) => {
  const onLaunchCamera = () => {
    ImagePicker.openCamera({
      cropping: false,
      mediaType: 'photo',
    })
      .then(resp => {
        setToggleModal(false)
        setPickerResponse({
          uri: resp.path,
          width: resp.width,
          height: resp.height,
          mime: resp.mime,
        })
      })
      .catch(err => {
        setToggleModal(false)
        console.error('User canceled', err)
      })
  }

  const onLaunchLibrary = () => {
    ImagePicker.openPicker({
      cropping: false,
      mediaType: 'photo',
    })
      .then(resp => {
        setToggleModal(false)
        setPickerResponse({
          uri: resp.path,
          width: resp.width,
          height: resp.height,
          mime: resp.mime,
        })
      })
      .catch(err => {
        setToggleModal(false)
      })
  }

  return (
    <View style={styles.modalContainer}>
      <Pressable style={styles.picker} onPress={() => onLaunchLibrary()}>
        <Image />
        <Text style={styles.pickerText}>Library</Text>
      </Pressable>
      <Pressable style={styles.picker} onPress={() => onLaunchCamera()}>
        <Camera />
        <Text style={styles.pickerText}>Camera</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 90,
    paddingVertical: 20,
    borderRadius: 8,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  picker: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  pickerText: {
    fontFamily: fonts.medium,
    fontSize: 16,
    marginTop: 5,
    color: colors.main,
  },
})
export default ImagePickerModal
