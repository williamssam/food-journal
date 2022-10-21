import auth from '@react-native-firebase/auth'
import React from 'react'
import {ToastAndroid} from 'react-native'

interface SignupProps {
  email: string
  password: string
}

export const useSignInWithEmail = () => {
  const [{isLoading, error}, setLoginState] = React.useState({
    isLoading: false,
    error: '',
  })

  const login = async ({email, password}: SignupProps) => {
    setLoginState({
      error: '',
      isLoading: true,
    })
    try {
      const loginUser = await auth().signInWithEmailAndPassword(email, password)
      if (loginUser) {
        ToastAndroid.show('Login Successful! 🚀', ToastAndroid.SHORT)
        setLoginState({
          error: '',
          isLoading: false,
        })
        return loginUser
      }
    } catch (err: any) {
      if (err.code === 'auth/invalid-email') {
        setLoginState({
          isLoading: false,
          error: 'That email address is invalid!',
        })
      }

      if (err.code === 'auth/user-not-found') {
        setLoginState({
          isLoading: false,
          error: 'You are not registered with us, kindly register to continue',
        })
      }

      if (err.code === 'auth/user-disabled') {
        setLoginState({
          isLoading: false,
          error: 'Your account has been disabled, kindly contact Admin',
        })
      }

      if (err.code === 'auth/wrong-password') {
        setLoginState({
          isLoading: false,
          error: 'Password is not correct',
        })
      }

      console.log(err as Error)
    }
  }

  return {login, isLoading, error}
}
