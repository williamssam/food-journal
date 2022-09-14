import {Link} from '@react-navigation/native'
import * as React from 'react'
import {Pressable, StyleSheet, Text, View} from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import Input from '../components/Input'
import {colors} from '../theme/colors'
import {fonts} from '../theme/fonts'
import {globalStyle} from '../theme/globalStyle'

const RegisterScreen = () => {
  return (
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      style={globalStyle.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Create New Account 🔥</Text>
        <Text style={styles.subtitle}>Please fill in the form to continue</Text>
      </View>

      <Pressable
        android_ripple={{
          color: colors.neutral,
        }}
        style={[globalStyle.btn, styles.googleSignupBtn]}>
        <Text style={globalStyle.btnText}>Signup with Google</Text>
      </Pressable>

      <View style={styles.dividerContainer}>
        <View style={styles.dividerLine} />
        <Text style={styles.dividerText}>OR</Text>
        <View style={styles.dividerLine} />
      </View>

      <View style={styles.form}>
        <Input title="Full Name" placeholder="Enter your Full Name" />
        <Input
          title="Email Address"
          placeholder="Enter your Email Address"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Input
          title="Password"
          placeholder="Enter your Password"
          secureTextEntry
          autoComplete="password"
          textContentType="password"
          type="password"
        />
        <Pressable
          android_ripple={{
            color: colors.neutral,
          }}
          style={globalStyle.btn}>
          <Text style={globalStyle.btnText}>Register</Text>
        </Pressable>
        <Text style={styles.footerText}>
          Joined us before?{' '}
          <Link to={{screen: 'Login'}} style={styles.loginLink}>
            Login
          </Link>
        </Text>
      </View>
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 25,
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: 30,
    // lineHeight: 24,
    color: colors.main,
  },
  subtitle: {
    fontFamily: fonts.regular,
    fontSize: 16,
    lineHeight: 22,
  },
  form: {
    marginTop: -20,
  },
  footerText: {
    fontFamily: fonts.regular,
    fontSize: 17,
    color: colors.text,
    marginTop: 10,
    textAlign: 'center',
  },
  loginLink: {
    fontFamily: fonts.medium,
    color: colors.blue,
    textDecorationLine: 'underline',
  },
  googleSignupBtn: {
    backgroundColor: colors.blue,
    marginTop: 30,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 25,
  },
  dividerLine: {
    height: 1,
    width: '43%',
    backgroundColor: '#979797',
  },
  dividerText: {
    fontFamily: fonts.medium,
    color: '#979797',
    fontSize: 18,
  },
})
export default RegisterScreen
