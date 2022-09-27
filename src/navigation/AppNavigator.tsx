import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {RootStackParamList} from 'models/navigators'
import * as React from 'react'
import AddMealScreen from 'screens/post-auth/AddMealScreen'
import FilterByTypeScreen from 'screens/post-auth/FilterByTypeScreen'
import FoodDetailsScreen from 'screens/post-auth/FoodDetailsScreen'
import ForgetPasswordScreen from 'screens/pre-auth/ForgetPasswordScreen'
import LoginScreen from 'screens/pre-auth/LoginScreen'
import RegisterScreen from 'screens/pre-auth/RegisterScreen'
import ResetPasswordScreen from 'screens/pre-auth/ResetPasswordScreen'
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
      <Stack.Screen name="AddMeal" component={AddMealScreen} />
    </Stack.Navigator>
  )
}

export default AppNavigator
