import {useNavigation} from '@react-navigation/native'
import * as React from 'react'
import {Image, Pressable, StyleSheet, Text, View} from 'react-native'
import {FoodNavigationProps} from '../models/navigators'
import {colors} from '../theme/colors'
import {fonts} from '../theme/fonts'

const Foods = () => {
  const navigation = useNavigation<FoodNavigationProps>()
  return (
    <View style={styles.foods}>
      <Pressable
        style={styles.food}
        onPress={() => navigation.navigate('Details')}>
        <Image
          source={require('../assets/images/food.jpg')}
          style={styles.image}
        />
        <View>
          <Text style={styles.foodName}>Egg Salad with Vegetables</Text>
          <Text style={styles.date}>25 June 2022</Text>
        </View>

        <Text style={styles.foodType}>Breakfast</Text>
      </Pressable>

      <Pressable
        style={styles.food}
        onPress={() => navigation.navigate('Details')}>
        <Image
          source={require('../assets/images/food.jpg')}
          style={styles.image}
        />
        <View>
          <Text style={styles.foodName}>Egg Salad with Vegetables</Text>
          <Text style={styles.date}>25 June 2022</Text>
        </View>

        <Text style={styles.foodType}>Breakfast</Text>
      </Pressable>

      <Pressable
        style={styles.food}
        onPress={() => navigation.navigate('Details')}>
        <Image
          source={require('../assets/images/food.jpg')}
          style={styles.image}
        />
        <View>
          <Text style={styles.foodName}>Egg Salad with Vegetables</Text>
          <Text style={styles.date}>25 June 2022</Text>
        </View>

        <Text style={styles.foodType}>Breakfast</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  foods: {
    marginTop: 5,
    marginBottom: 20,
    marginHorizontal: 15,
  },
  food: {
    marginTop: 30,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 15,
  },
  foodName: {
    fontFamily: fonts.medium,
    color: colors.main,
    fontSize: 25,
    paddingTop: 5,
  },
  date: {
    fontFamily: fonts.regular,
    paddingTop: 5,
    fontSize: 16,
    color: colors.text,
  },
  foodType: {
    position: 'absolute',
    right: 0,
    top: 10,
    backgroundColor: colors.neutral,
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontFamily: fonts.medium,
    textTransform: 'uppercase',
    fontSize: 18,
    color: colors.main,
  },
})
export default Foods
