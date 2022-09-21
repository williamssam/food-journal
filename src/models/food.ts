import {ImageSourcePropType} from 'react-native'

export type Food = {
  id: string
  name: string
  image: ImageSourcePropType | string
  type: 'Breakfast' | 'Lunch' | 'Dinner' | 'Light'
  tags?: string[]
  date: Date
  description: string
  location: string // this is gotten automatically with the map or allow user to input the location themselves
  restaurant: string
}

type Images = {
  first: string
  second: string
  last: string
}

export type FoodList = {
  id?: string
  food: Food
}
