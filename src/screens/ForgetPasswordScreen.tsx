import * as React from 'react'
import {Pressable, StyleSheet, Text, View} from 'react-native'
import Input from '../components/Input'
import {colors} from '../theme/colors'
import {fonts} from '../theme/fonts'
import {globalStyle} from '../theme/globalStyle'

const ForgetPasswordScreen = () => {
  return (
    <View style={globalStyle.container}>
      {/* <Pressable onPress={() => navigation.go}>
        <ArrowLeft />
      </Pressable> */}
      <View style={styles.header}>
        <Text style={styles.title}>Forgot Password?</Text>
        <Text style={styles.subtitle}>
          Don't worry! it happens. Please enter the address associated with your
          account.
        </Text>
      </View>

      <Input
        title="Email Address"
        placeholder="Enter your Email Address"
        keyboardType="email-address"
        autoCapitalize="none"
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
    // lineHeight: 24,
    color: colors.main,
  },
  subtitle: {
    fontFamily: fonts.regular,
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 15,
  },
})
export default ForgetPasswordScreen
