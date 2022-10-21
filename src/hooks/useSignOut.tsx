import auth from '@react-native-firebase/auth'

export const useSignOut = () => {
  const signout = async () => {
    try {
      await auth().signOut()
    } catch (error) {
      console.error('error', error)
    }
  }

  return {signout}
}
