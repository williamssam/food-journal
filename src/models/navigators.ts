import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs'
import {NavigatorScreenParams} from '@react-navigation/native'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'

export type RootStackParamList = {
  Tab: undefined
  Register: undefined
  Login: undefined
  ForgetPassword: undefined
  ResetPassword: undefined
  Details: undefined
  FilterByType: undefined
}

export type TabStackParamList = {
  Home: NavigatorScreenParams<RootStackParamList>
  AddFood: undefined
  SettingNavigator: BottomTabNavigationProp<SettingStackParamList>
}

export type SettingStackParamList = {
  Setting: undefined
  PasswordReset: undefined
}

export type FoodNavigationProps = NativeStackNavigationProp<RootStackParamList>
