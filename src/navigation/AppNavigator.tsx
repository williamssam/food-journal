import {createNativeStackNavigator} from '@react-navigation/native-stack'
import * as React from 'react'
import {RootStackParamList} from '../models/navigators'
import FilterByTypeScreen from '../screens/FilterByTypeScreen'
import FoodDetailsScreen from '../screens/FoodDetailsScreen'
import ForgetPasswordScreen from '../screens/ForgetPasswordScreen'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import ResetPasswordScreen from '../screens/ResetPasswordScreen'
import TabNavigator from './TabNavigator'

const Stack = createNativeStackNavigator<RootStackParamList>()

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Tab" component={TabNavigator} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen} />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
      <Stack.Screen name="Details" component={FoodDetailsScreen} />
      <Stack.Screen name="FilterByType" component={FilterByTypeScreen} />
    </Stack.Navigator>
  )
}

export default AppNavigator
