import {useNavigation} from '@react-navigation/native'
import * as React from 'react'
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native'
import ArrowLeft from '../../assets/icons/ArrowLeft'
import Foods from '../../components/Foods'
import {colors} from '../../theme/colors'
import {fonts} from '../../theme/fonts'

const FilterByTypeScreen = () => {
  const navigation = useNavigation()

  return (
    <ScrollView
      style={styles.filterByTypeContainer}
      showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <ArrowLeft />
        </Pressable>
        <View>
          <Text style={styles.headingOne}>Category</Text>
          <Text style={styles.headingTwo}>Breakfast</Text>
        </View>
      </View>

      <View>
        <Foods />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  filterByTypeContainer: {
    flex: 1,
    paddingTop: 15,
  },
  header: {
    paddingHorizontal: 15,
  },
  headingOne: {
    fontFamily: fonts.medium,
    fontSize: 16,
    textTransform: 'uppercase',
    color: colors.text,
    paddingTop: 10,
  },
  headingTwo: {
    fontFamily: fonts.bold,
    fontSize: 30,
    color: colors.main,
    lineHeight: 30,
  },
})
export default FilterByTypeScreen
