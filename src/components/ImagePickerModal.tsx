import React from 'react'
import {Pressable, StyleSheet, Text, View} from 'react-native'
import ImagePicker from 'react-native-image-crop-picker'
import Camera from '../assets/icons/Camera'
import Image from '../assets/icons/Image'
import {colors} from '../theme/colors'
import {fonts} from '../theme/fonts'

interface ImagePickerType {
  setPickerResponse: React.Dispatch<React.SetStateAction<string | null>>
  setToggleModal: React.Dispatch<React.SetStateAction<boolean>>
}

const ImagePickerModal = ({
  setPickerResponse,
  setToggleModal,
}: ImagePickerType) => {
  const onLaunchCamera = () => {
    ImagePicker.openCamera({
      cropping: true,
      mediaType: 'photo',
    })
      .then(resp => {
        setToggleModal(false)
        setPickerResponse(resp.path)
      })
      .catch(err => {
        setToggleModal(false)
        console.log('User canceled', err)
      })
  }

  const onLaunchLibrary = () => {
    ImagePicker.openPicker({
      cropping: true,
      mediaType: 'photo',
    })
      .then(resp => {
        setToggleModal(false)
        setPickerResponse(resp.path)
      })
      .catch(err => {
        setToggleModal(false)
        console.log('User canceled', err)
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
