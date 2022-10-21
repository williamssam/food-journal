import * as React from 'react'
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import BottomTab from '../../components/BottomTab'
import Foods from '../../components/Foods'
import Form from '../../components/Form'
import {useAuthStateChange} from '../../hooks/useAuthStateChange'
import useGetAllMeals from '../../hooks/useGetAllMeals'
import {colors} from '../../theme/colors'
import {fonts} from '../../theme/fonts'

const HomeScreen = () => {
  const {loading, meals} = useGetAllMeals()
  const {user} = useAuthStateChange()

  return (
    <>
      {/* <SafeAreaView> */}
      <StatusBar backgroundColor={colors.main} />
      <View style={styles.header}>
        <View>
          <Text style={styles.headingOne}>
            Good Morning {user?.displayName}!
          </Text>
          <Text style={styles.headingTwo}>
            What and where are we eating today? 😋
          </Text>
        </View>

        <Form />
      </View>

      {loading ? (
        <ActivityIndicator color={colors.main} />
      ) : (
        <Foods meals={meals} />
      )}

      <BottomTab />
      {/* </SafeAreaView> */}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
  header: {
    padding: 20,
    justifyContent: 'center',
    backgroundColor: colors.main,
    // height: '40%'
  },
  headingOne: {
    fontSize: 30,
    fontFamily: fonts.bold,
    color: colors.neutral,
  },
  headingTwo: {
    fontSize: 17,
    fontFamily: fonts.medium,
    color: colors.amber,
    paddingTop: 5,
  },
  subtext: {
    fontSize: 20,
    marginTop: 10,
    fontFamily: fonts.medium,
  },
})
export default HomeScreen
