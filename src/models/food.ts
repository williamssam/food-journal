import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore'

export interface Food {
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

export interface FoodList {
  id?: string
  food: Food
}

interface ImageSource {
  uri: string | ImageSource
}
