import {createNativeStackNavigator} from '@react-navigation/native-stack'
import * as React from 'react'
import {SettingStackParamList} from '../models/navigators'
import PasswordResetScreen from '../screens/PasswordResetScreen'
import SettingsScreen from '../screens/SettingsScreen'

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
