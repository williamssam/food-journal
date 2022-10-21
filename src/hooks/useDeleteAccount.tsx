import auth from '@react-native-firebase/auth'
import React from 'react'

export const useDeleteAccount = () => {
  const [loading, setLoading] = React.useState(false)
  const deleteAccount = async () => {
    try {
      setLoading(true)
      const remove = await auth().currentUser?.delete()
      if (remove) setLoading(false)
    } catch (error) {
      console.error('error', error)
    }
  }

  return {deleteAccount, loading}
}
