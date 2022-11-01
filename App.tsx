import {NavigationContainer} from '@react-navigation/native'
// import {ApiProvider} from '@reduxjs/toolkit/query/react'
import React from 'react'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {Provider} from 'react-redux'
import {WithSplashScreen} from './src/components/WithSplashScreen'
import AppNavigator from './src/navigation/AppNavigator'
import {store} from './src/store/store'

const App = () => {
  const [isAppReady, setIsAppReady] = React.useState(false)

  React.useEffect(() => {
    setIsAppReady(true)
  }, [])

  return (
    <WithSplashScreen isAppReady={isAppReady}>
      <SafeAreaProvider>
        <Provider store={store}>
          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
        </Provider>
      </SafeAreaProvider>
    </WithSplashScreen>
  )
}
export default App
