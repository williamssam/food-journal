/* eslint-disable react-native/no-inline-styles */
import {yupResolver} from '@hookform/resolvers/yup'
import {Link} from '@react-navigation/native'
import * as React from 'react'
import {FieldValues, useForm} from 'react-hook-form'
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import * as yup from 'yup'
import Input from '../../components/Input'
import RecruiterLogin from '../../components/RecruiterLogin'
import {useSignInWithEmail} from '../../hooks/useSignInWithEmail'
import {colors} from '../../theme/colors'
import {fonts} from '../../theme/fonts'
import {globalStyle} from '../../theme/globalStyle'

const loginSchema = yup
  .object({
    email_address: yup
      .string()
      .email('Email address is not valid')
      .required('Email address is required'),
    password: yup
      .string()
      .min(8, 'Password must not be less than 8 characters')
      .required('Password is required'),
  })
  .required()

const LoginScreen = () => {
  const [togglePassword, setTogglePassword] = React.useState(false)
  const {handleSubmit, control} = useForm<FieldValues>({
    resolver: yupResolver(loginSchema),
  })
  const {error, isLoading, login} = useSignInWithEmail()

  const onLogin = (data: FieldValues) => {
    login({email: data.email_address, password: data.password})
  }

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

      <View style={styles.form}>
        <Input
          title="Email Address"
          placeholder="Enter your Email Address"
          keyboardType="email-address"
          autoCapitalize="none"
          name="email_address"
          control={control}
          autoComplete="email"
        />
        <Input
          title="Password"
          placeholder="Enter your Password"
          type="password"
          autoComplete="password"
          textContentType="password"
          name="password"
          control={control}
          secureTextEntry={togglePassword ? false : true}
          togglePassword={togglePassword}
          setTogglePassword={setTogglePassword}
        />
        <Pressable
          disabled={isLoading}
          android_ripple={{
            color: colors.neutral,
          }}
          style={globalStyle.btn}
          onPress={handleSubmit(onLogin)}>
          <Text style={globalStyle.btnText}>
            {isLoading ? <ActivityIndicator color="#fff" /> : 'Login'}
          </Text>
        </Pressable>
        {error && <Text style={globalStyle.errorText}>{error}</Text>}

        <Text style={styles.footerText}>
          Don't have an account?{' '}
          <Link to={{screen: 'Register'}} style={styles.loginLink}>
            Sign up
          </Link>
        </Text>

        <RecruiterLogin />
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
    marginTop: 20,
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
