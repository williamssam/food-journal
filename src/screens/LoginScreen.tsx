/* eslint-disable react-native/no-inline-styles */
import {Link} from '@react-navigation/native'
import * as React from 'react'
import {
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import Input from '../components/Input'
import {colors} from '../theme/colors'
import {fonts} from '../theme/fonts'
import {globalStyle} from '../theme/globalStyle'

const LoginScreen = () => {
  return (
    // <KeyboardAvoidingView
    <KeyboardAvoidingView behavior="padding" style={globalStyle.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome Back 👋</Text>
        <Text style={styles.subtitle}>
          We are happy to see you again 😍. To use your account, you should log
          in first.
        </Text>
      </View>

      <Pressable
        android_ripple={{
          color: colors.neutral,
        }}
        style={[globalStyle.btn, styles.googleSignupBtn]}>
        {/* <Google /> */}
        <Text style={globalStyle.btnText}>Login with Google</Text>
      </Pressable>

      <View style={styles.dividerContainer}>
        <View style={styles.dividerLine} />
        <Text style={styles.dividerText}>OR</Text>
        <View style={styles.dividerLine} />
      </View>

      <View style={styles.form}>
        <Input
          title="Email Address"
          placeholder="Enter your Email Address"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Input
          title="Password"
          placeholder="Enter your Password"
          type="password"
          autoComplete="password"
          textContentType="password"
        />
        <Link
          style={[
            styles.loginLink,
            {textAlign: 'right', paddingTop: 8, fontFamily: fonts.regular},
          ]}
          to={{screen: 'ForgetPassword'}}>
          Forgot Password?
        </Link>
        <Pressable
          android_ripple={{
            color: colors.neutral,
          }}
          style={globalStyle.btn}>
          <Text style={globalStyle.btnText}>Login</Text>
        </Pressable>
        <Text style={styles.footerText}>
          Don't have an account?{' '}
          <Link to={{screen: 'Register'}} style={styles.loginLink}>
            Sign up
          </Link>
        </Text>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  registerContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },
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
export default LoginScreen
