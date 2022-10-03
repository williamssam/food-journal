import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs'
import {NavigatorScreenParams} from '@react-navigation/native'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'

export type RootStackParamList = {
  Home: undefined
  Register: undefined
  Login: undefined
  ForgetPassword: undefined
  ResetPassword: undefined
  Details: {
    mealId: string
  }
  AddMeal: undefined
  FilterByType: undefined
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
