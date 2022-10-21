import * as React from 'react'
import {Pressable, StyleSheet, Text, View} from 'react-native'
import BottomTab from '../../components/BottomTab'
import ConfirmationModal from '../../components/ConfirmationModal'
import Dialog from '../../components/Dialog'
import {useDeleteAccount} from '../../hooks/useDeleteAccount'
import {useSignOut} from '../../hooks/useSignOut'
import {colors} from '../../theme/colors'
import {fonts} from '../../theme/fonts'
import {globalStyle} from '../../theme/globalStyle'

const SettingsScreen = () => {
  const [toggleModal, setToggleModal] = React.useState(false)
  const {signout} = useSignOut()
  const {deleteAccount, loading} = useDeleteAccount()

  return (
    <>
      <View style={globalStyle.container}>
        <View style={styles.header}>
          <Text style={styles.headingOne}>Settings</Text>
        </View>

        <Text>Dark Mode</Text>

        <Pressable>
          <Text>Reset Password</Text>
        </Pressable>

        <Pressable style={styles.logoutBtn} onPress={signout}>
          <Text style={styles.logoutBtnText}>Logout</Text>
        </Pressable>

        <Pressable
          style={styles.deleteBtn}
          onPress={() => setToggleModal(true)}>
          <Text style={styles.deleteBtnText}>Delete My Account</Text>
        </Pressable>
      </View>

      <BottomTab />

      <Dialog
        toggleModal={toggleModal}
        setToggleModal={setToggleModal}
        children={
          <ConfirmationModal
            loading={loading}
            title="Are you sure you want to delete your account? 😮"
            subtitle="Be Careful! if you delete your account, you won't be able to recover you food journal again"
            setToggleModal={setToggleModal}
            onPress={deleteAccount}
          />
        }
      />
    </>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 25,
  },
  headingOne: {
    fontFamily: fonts.bold,
    fontSize: 30,
    color: colors.main,
    lineHeight: 30,
  },
  deleteBtn: {
    backgroundColor: colors.secondary,
    height: 50,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginTop: 25,
  },
  deleteBtnText: {
    fontFamily: fonts.medium,
    fontSize: 18,
    color: colors.neutral,
  },
  logoutBtn: {
    marginTop: 15,
  },
  logoutBtnText: {
    textTransform: 'uppercase',
    fontFamily: fonts.medium,
    fontSize: 18,
    lineHeight: 22,
  },
})
export default SettingsScreen
