import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore'

export interface Food {
  id?: string
  name: string
  image: ImageSource
  type: string
  tags?: string[]
  date: FirebaseFirestoreTypes.Timestamp
  description: string
  location: string
  restaurant: string
}

export interface FoodList {
  id?: string
  food: Food
}

interface ImageSource {
  uri: string | ImageSource
}
