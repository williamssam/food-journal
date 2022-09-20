import {NavigationContainer} from '@react-navigation/native'
// import {ApiProvider} from '@reduxjs/toolkit/query/react'
import React from 'react'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {Provider} from 'react-redux'
import AppNavigator from './src/navigation/AppNavigator'
import {store} from './src/store/store'

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Provider store={store}>
          <AppNavigator />
        </Provider>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
export default App
