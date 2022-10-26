import {ActivityIndicator, Pressable, Text} from 'react-native'
import {useSignInWithEmail} from '../hooks/useSignInWithEmail'
import {colors} from '../theme/colors'
import {globalStyle} from '../theme/globalStyle'

const RecruiterLogin = () => {
  const {error, isLoading, login} = useSignInWithEmail()

  const handleLogin = () => {
    login({email: 'ghostdeveloper@yopmail.com', password: '123456789'})
  }

  return (
    <>
      <Pressable
        disabled={isLoading}
        onPress={handleLogin}
        android_ripple={{
          color: colors.neutral,
        }}
        style={globalStyle.btn}>
        <Text style={globalStyle.btnText}>
          {isLoading ? <ActivityIndicator color="#fff" /> : 'Recruiter Login'}
        </Text>
      </Pressable>
      {error && <Text style={globalStyle.errorText}>{error}</Text>}
    </>
  )
}

// const styles = StyleSheet.create({
// })
export default RecruiterLogin
