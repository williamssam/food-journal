import auth from '@react-native-firebase/auth'
import React from 'react'
import {ToastAndroid} from 'react-native'

interface SignupProps {
  email: string
  password: string
  username: string
}

export const useSignUpwithEmail = () => {
  const [{isLoading, error}, setSignupState] = React.useState({
    isLoading: false,
    error: '',
  })

  const signup = async ({email, password, username}: SignupProps) => {
    setSignupState({
      error: '',
      isLoading: true,
    })
    try {
      const createUser = await auth().createUserWithEmailAndPassword(
        email,
        password,
      )
      if (createUser) {
        ToastAndroid.show(
          'Account created & signed in!! 🚀',
          ToastAndroid.SHORT,
        )

        await auth().currentUser?.updateProfile({
          displayName: username,
        })
        setSignupState({
          isLoading: false,
          error: '',
        })
        return createUser
      }
      setSignupState({
        error: '',
        isLoading: false,
      })
    } catch (err: any) {
      if (err.code === 'auth/email-already-in-use') {
        setSignupState({
          isLoading: false,
          error: 'That email address is already in use!',
        })
      }

      if (err.code === 'auth/invalid-email') {
        setSignupState({
          isLoading: false,
          error: 'That email address is invalid!',
        })
      }

      if (err.code === 'auth/weak-password') {
        setSignupState({
          isLoading: false,
          error: 'Password is not up to 8 characters',
        })
      }

      console.error(err as Error)
    }
  }

  return {signup, isLoading, error}
}
