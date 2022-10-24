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
import {useAuthStateChange} from '../../hooks/useAuthStateChange'
import useGetAllMeals from '../../hooks/useGetAllMeals'
import {colors} from '../../theme/colors'
import {fonts} from '../../theme/fonts'

const HomeScreen = () => {
  const {loading, meals} = useGetAllMeals()
  const {user} = useAuthStateChange()

  return (
    <>
      <StatusBar backgroundColor={colors.main} />
      <View style={styles.header}>
        <Text style={styles.headingOne}>Good Morning {user?.displayName}!</Text>
        <Text style={styles.headingTwo}>
          What and where are we eating today? 😋
        </Text>
      </View>
      <Text style={styles.title}>Food Journal</Text>

      {loading ? (
        <ActivityIndicator color={colors.main} />
      ) : (
        <Foods meals={meals} />
      )}

      <BottomTab />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    justifyContent: 'center',
    backgroundColor: colors.main,
  },
  title: {
    fontSize: 30,
    fontFamily: fonts.bold,
    color: colors.main,
    paddingTop: 20,
    textTransform: 'uppercase',
    textAlign: 'center',
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
