import * as React from 'react'
import {Pressable, StyleSheet, Text, View} from 'react-native'
import ConfirmationModal from '../../components/ConfirmationModal'
import Dialog from '../../components/Dialog'
import {colors} from '../../theme/colors'
import {fonts} from '../../theme/fonts'
import {globalStyle} from '../../theme/globalStyle'

const SettingsScreen = () => {
  // const {navigation} = useNavigation();
  const [toggleModal, setToggleModal] = React.useState(false)

  return (
    <>
      <View style={globalStyle.container}>
        <View style={styles.header}>
          <Text style={styles.headingOne}>Your Profile</Text>
        </View>

        <View>
          <View style={styles.profile}>
            <Text style={styles.profileTitle}>Name</Text>
            <Text style={styles.profileText}>Williams Samuel</Text>
          </View>

          <View style={styles.profile}>
            <Text style={styles.profileTitle}>created on</Text>
            <Text style={styles.profileText}>
              Friday, 15 June 2023 at 1:22pm
            </Text>
          </View>
        </View>

        <View style={styles.settingContainer}>
          <Text style={styles.settingTitle}>Settings</Text>

          <View style={styles.settings}>
            <Text>Dark Mode</Text>

            <Pressable>
              <Text>Reset Password</Text>
            </Pressable>

            <Pressable
              style={styles.deleteBtn}
              onPress={() => setToggleModal(true)}>
              <Text style={styles.deleteBtnText}>Delete My Account</Text>
            </Pressable>
          </View>
        </View>
      </View>

      <Dialog
        toggleModal={toggleModal}
        setToggleModal={setToggleModal}
        children={
          <ConfirmationModal
            title="Are you sure you want to delete your account? 😮"
            subtitle="Be Careful! if you delete your account, you won't be able to recover you food journal again"
            setToggleModal={setToggleModal}
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
  profile: {
    marginTop: 32,
  },
  profileTitle: {
    textTransform: 'uppercase',
    fontFamily: fonts.regular,
    fontSize: 16,
    color: colors.text,
  },
  profileText: {
    fontFamily: fonts.medium,
    fontSize: 20,
    color: colors.main,
  },
  settingContainer: {
    marginTop: 50,
  },
  settingTitle: {
    textTransform: 'uppercase',
    fontFamily: fonts.medium,
    fontSize: 16,
    borderBottomColor: '#979797',
    borderBottomWidth: 1,
    color: colors.text,
  },
  settings: {
    marginTop: 10,
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
})
export default SettingsScreen
