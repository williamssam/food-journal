import auth from '@react-native-firebase/auth'
import {createApi, fakeBaseQuery} from '@reduxjs/toolkit/query/react'

const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fakeBaseQuery(),
  endpoints: builder => ({
    registerUserWIthEmail: builder.query({
      async queryFn({email, password}) {
        try {
          const newUser = auth().createUserWithEmailAndPassword(email, password)
          return {data: newUser}
        } catch (error: any) {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!')
          }

          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!')
          }

          console.error(error)
          return {error}
        }
      },
    }),
    loginUserWIthEmail: builder.query({
      async queryFn({email, password}) {
        try {
          const newUser = auth().signInWithEmailAndPassword(email, password)
          return {data: newUser}
        } catch (error: any) {
          console.error(error)
          return {error}
        }
      },
    }),
    // registerWithGooogle:
    logOut: builder.query({
      async queryFn() {
        try {
          const logout = await auth().signOut()
          return {data: logout}
        } catch (error) {
          return {error}
        }
      },
    }),
  }),
})

const {
  useRegisterUserWIthEmailQuery,
  useLoginUserWIthEmailQuery,
  useLogOutQuery,
} = authApi
