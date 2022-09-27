import * as React from 'react'
import {useForm} from 'react-hook-form'
import {Pressable, StyleSheet, Text, View} from 'react-native'
import Input from '../../components/Input'
import {colors} from '../../theme/colors'
import {fonts} from '../../theme/fonts'
import {globalStyle} from '../../theme/globalStyle'

const ResetPasswordScreen = () => {
  const {register, handleSubmit, control} = useForm()

  return (
    <View style={globalStyle.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Reset Password?</Text>
      </View>

      <Input
        title="Password"
        placeholder="Enter your Password"
        secureTextEntry
        autoComplete="password"
        textContentType="password"
        type="password"
        name="password"
        control={control}
      />
      <Input
        title="Confrim Password"
        placeholder="Enter your Password again"
        secureTextEntry
        autoComplete="password"
        textContentType="password"
        type="password"
        control={control}
        name="confirm_password"
      />

      <Pressable
        android_ripple={{
          color: colors.neutral,
        }}
        style={globalStyle.btn}>
        <Text style={globalStyle.btnText}>Submit</Text>
      </Pressable>
    </View>
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
})
export default ResetPasswordScreen
