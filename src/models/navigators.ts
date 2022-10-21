import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs'
import {NavigatorScreenParams} from '@react-navigation/native'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import {Food} from './food'

export type RootStackParamList = {
  Home: undefined
  Register: undefined
  Login: undefined
  Details: {
    mealId: string
  }
  AddMeal: {
    meal: Food | undefined
  }
  FilterByType: {
    mealType: string | undefined
  }
  Setting: undefined
}

export type TabStackParamList = {
  Home: NavigatorScreenParams<RootStackParamList>
  AddMeal: undefined
  SettingNavigator: BottomTabNavigationProp<SettingStackParamList>
}

export type SettingStackParamList = {
  Setting: undefined
  PasswordReset: undefined
}

export type FoodNavigationProps = NativeStackNavigationProp<RootStackParamList>
