import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import * as React from 'react'
import AddImage from '../assets/icons/AddImage'
import Home from '../assets/icons/Home'
import Setting from '../assets/icons/Setting'
import {TabStackParamList} from '../models/navigators'
import AddFoodScreen from '../screens/AddFoodScreen'
import HomeScreen from '../screens/HomeScreen'
import {colors} from '../theme/colors'
import {fonts} from '../theme/fonts'
import SettingsNavigator from './SettingsNavigator'

const Tab = createBottomTabNavigator<TabStackParamList>()

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        // tabBarStyle: {backgroundColor: colors.neutral},
        tabBarLabelStyle: {
          color: colors.main,
          fontFamily: fonts.regular,
          fontSize: 14,
        },
        // tabBarActiveTintColor: colors.neutral,
        // tabBarInactiveBackgroundColor: colors.main,
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => <Home />,
        }}
      />
      <Tab.Screen
        name="AddFood"
        component={AddFoodScreen}
        options={{
          tabBarIcon: () => <AddImage />,
          tabBarLabel: 'Add Food',
        }}
      />
      <Tab.Screen
        name="SettingNavigator"
        component={SettingsNavigator}
        options={{
          tabBarIcon: () => <Setting />,
        }}
      />
    </Tab.Navigator>
  )
}

export default TabNavigator
