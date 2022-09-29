import {useNavigation} from '@react-navigation/native'
import {format} from 'date-fns'
import * as React from 'react'
import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import useGetAllMeals from '../hooks/useGetAllMeals'
import {FoodNavigationProps} from '../models/navigators'
import {colors} from '../theme/colors'
import {fonts} from '../theme/fonts'

const Foods = () => {
  const navigation = useNavigation<FoodNavigationProps>()
  const {loading, meals} = useGetAllMeals()
  console.log('data', meals)

  const renderItem = ({item}: any) => (
    <Pressable
      style={styles.food}
      onPress={() => navigation.navigate('Details', {mealId: item.id})}>
      <Image
        source={{
          uri:
            item.image ??
            'https://cdn.dribbble.com/users/143350/screenshots/14052412/media/27ab3785352e64f357bc1608bae74361.png?compress=1&resize=400x300',
        }}
        style={styles.image}
      />
      <View>
        <Text style={styles.foodName}>{item.name}</Text>
        <Text style={styles.date}>
          {format(item?.date?.seconds * 1000, 'dd MMMM yyyy')}
        </Text>
      </View>

      <Text style={styles.foodType}>{item.type}</Text>
    </Pressable>
  )

  if (loading) {
    return <ActivityIndicator />
  }

  return (
    <>
      <FlatList
        data={meals}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.foods}
        showsVerticalScrollIndicator={false}
      />
    </>
  )
}

const styles = StyleSheet.create({
  foods: {
    marginTop: 5,
    paddingBottom: 200,
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
