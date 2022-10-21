import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore'
import {ImageSourcePropType} from 'react-native'

export type Food = {
  id?: string
  name: string
  image: ImageSourcePropType | string
  type: 'Breakfast' | 'Lunch' | 'Dinner' | 'Light'
  tags?: string[]
  date: FirebaseFirestoreTypes.Timestamp
  description: string
  location: string
  restaurant: string
}

export type FoodList = {
  id?: string
  food: Food
}
