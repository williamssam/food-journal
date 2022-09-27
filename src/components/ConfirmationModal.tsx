/* eslint-disable react-native/no-inline-styles */
import Trash from 'assets/icons/Trash'
import * as React from 'react'
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import {colors} from 'theme/colors'
import {fonts} from 'theme/fonts'

interface ConfirmationModalType {
  setToggleModal: React.Dispatch<React.SetStateAction<boolean>>
  title: string
  subtitle?: string
  loading?: boolean
  onPress?: () => void
}

const ConfirmationModal = ({
  setToggleModal,
  title,
  subtitle,
  onPress,
  loading,
}: ConfirmationModalType) => {
  return (
    <View style={styles.modalContainer}>
      <View style={{alignSelf: 'center'}}>
        <Trash />
      </View>
      <Text style={styles.modalTitle}>{title}</Text>
      {subtitle && <Text style={styles.modalSubtitle}>{subtitle}</Text>}
      <View style={styles.btnContainer}>
        <Pressable style={[styles.btn, styles.deleteBtn]} onPress={onPress}>
          {loading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text style={styles.btnText}>Yeah! Delete</Text>
          )}
        </Pressable>
        <Pressable
          style={[styles.btn, styles.cancelBtn]}
          onPress={() => setToggleModal(false)}>
          <Text style={styles.btnText}>Nope 😮</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: '#fff',
    padding: 35,
    borderRadius: 8,
  },
  modalTitle: {
    fontFamily: fonts.medium,
    fontSize: 20,
    color: colors.main,
    textAlign: 'center',
    lineHeight: 25,
  },
  modalSubtitle: {
    fontFamily: fonts.regular,
    textAlign: 'center',
    paddingTop: 10,
    lineHeight: 22,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'flex-start',
    alignItems: 'center',
    minWidth: 100,
    borderRadius: 5,
  },
  btnText: {
    fontFamily: fonts.medium,
    fontSize: 16,
    color: colors.neutral,
  },
  deleteBtn: {
    backgroundColor: colors.secondary,
  },
  cancelBtn: {
    backgroundColor: colors.main,
  },
})
export default ConfirmationModal
