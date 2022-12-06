import auth from '@react-native-firebase/auth'
import React from 'react'

type UserInfo = {
  displayName: string
  email: string
}

export const useAuthStateChange = () => {
  const [user, setUser] = React.useState<UserInfo | null>(null)

  function onAuthStateChanged(detail: any) {
    if (detail) {
      setUser(detail)
    } else {
      setUser(null)
    }
  }

  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
    return subscriber // unsubscribe on unmount
  }, [user])

  return {user}
}
