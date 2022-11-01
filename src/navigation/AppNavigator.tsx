import {createNativeStackNavigator} from '@react-navigation/native-stack'
import * as React from 'react'
import {useAuthStateChange} from '../hooks/useAuthStateChange'
import {RootStackParamList} from '../models/navigators'
import AddMealScreen from '../screens/post-auth/AddMealScreen'
import FilterByTypeScreen from '../screens/post-auth/FilterByTypeScreen'
import FoodDetailsScreen from '../screens/post-auth/FoodDetailsScreen'
import HomeScreen from '../screens/post-auth/HomeScreen'
import SettingsScreen from '../screens/post-auth/SettingsScreen'
import LoginScreen from '../screens/pre-auth/LoginScreen'
import RegisterScreen from '../screens/pre-auth/RegisterScreen'

const Stack = createNativeStackNavigator<RootStackParamList>()

const AppNavigator = () => {
  const {user} = useAuthStateChange()
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: 'transparentModal',
      }}>
      {!user ? (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={FoodDetailsScreen} />
          <Stack.Screen name="FilterByType" component={FilterByTypeScreen} />
          <Stack.Screen name="AddMeal" component={AddMealScreen} />
          <Stack.Screen name="Setting" component={SettingsScreen} />
        </>
      )}
    </Stack.Navigator>
  )
}

export default AppNavigator
