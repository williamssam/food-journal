import {yupResolver} from '@hookform/resolvers/yup'
import {Link} from '@react-navigation/native'
import * as React from 'react'
import {FieldValues, useForm} from 'react-hook-form'
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import * as yup from 'yup'
import Input from '../../components/Input'
import {useSignUpwithEmail} from '../../hooks/useSignUpwithEmail'
import {colors} from '../../theme/colors'
import {fonts} from '../../theme/fonts'
import {globalStyle} from '../../theme/globalStyle'

const registerSchema = yup
  .object({
    username: yup.string().required('Your full name is required'),
    email_address: yup
      .string()
      .email('Email address is not valid')
      .required('Email address is required'),
    password: yup
      .string()
      .min(8, 'Password must not be less than 8 characters')
      .required('Password is required'),
    confirm_password: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Password must match'),
  })
  .required()

const RegisterScreen = () => {
  const [togglePassword, setTogglePassword] = React.useState(false)
  const {signup, error, isLoading} = useSignUpwithEmail()

  const {handleSubmit, control} = useForm<FieldValues>({
    resolver: yupResolver(registerSchema),
  })

  const onSubmit = (data: FieldValues) => {
    signup({
      email: data.email_address,
      password: data.password,
      username: data.username,
    })
  }

  return (
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      style={globalStyle.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Create New Account 🔥</Text>
        <Text style={styles.subtitle}>Please fill in the form to continue</Text>
      </View>

      <View style={styles.form}>
        <Input
          title="Username"
          placeholder="Enter your Username"
          name="username"
          control={control}
        />
        <Input
          title="Email Address"
          placeholder="Enter your Email Address"
          keyboardType="email-address"
          autoCapitalize="none"
          name="email_address"
          control={control}
        />
        <Input
          title="Password"
          placeholder="Enter your Password"
          secureTextEntry={togglePassword ? false : true}
          autoComplete="password"
          textContentType="password"
          type="password"
          name="password"
          control={control}
          setTogglePassword={setTogglePassword}
          togglePassword={togglePassword}
        />
        <Input
          title="Confrim Password"
          placeholder="Enter your Password again"
          secureTextEntry={togglePassword ? false : true}
          autoComplete="password"
          textContentType="password"
          type="password"
          name="confirm_password"
          control={control}
          togglePassword={togglePassword}
          setTogglePassword={setTogglePassword}
        />
        <Pressable
          disabled={isLoading}
          android_ripple={{
            color: colors.neutral,
          }}
          style={globalStyle.btn}
          onPress={handleSubmit(onSubmit)}>
          <Text style={globalStyle.btnText}>
            {isLoading ? <ActivityIndicator color="#fff" /> : 'Register'}
          </Text>
        </Pressable>
        {error && <Text style={globalStyle.errorText}>{error}</Text>}

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
    marginBottom: 35,
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
