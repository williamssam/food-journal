import * as React from 'react'
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native'
import Foods from '../components/Foods'
import Form from '../components/Form'
import {colors} from '../theme/colors'
import {fonts} from '../theme/fonts'

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor={colors.main} />
      <View style={styles.header}>
        <View>
          <Text style={styles.headingOne}>Good Morning Williams!</Text>
          <Text style={styles.headingTwo}>
            What and where are we eating today? 😋
          </Text>
        </View>

        <Form />
      </View>

      <Foods />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {},
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
