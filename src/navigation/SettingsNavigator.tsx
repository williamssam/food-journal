import {createNativeStackNavigator} from '@react-navigation/native-stack'
import * as React from 'react'
import {SettingStackParamList} from '../models/navigators'
import SettingsScreen from '../screens/post-auth/SettingsScreen'
import PasswordResetScreen from '../screens/pre-auth/PasswordResetScreen'

const Stack = createNativeStackNavigator<SettingStackParamList>()
const SettingsNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Setting" component={SettingsScreen} />
      <Stack.Screen name="PasswordReset" component={PasswordResetScreen} />
    </Stack.Navigator>
  )
}
export default SettingsNavigator
