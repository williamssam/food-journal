import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore'

export type Food = {
  id: string
  name: string
  image: string
  tags?: string[]
  date: FirebaseFirestoreTypes.Timestamp
  description: string
  location: string
  restaurant: string
  type: string
}

export type FoodList = {
  id?: string
  food: Food
}
