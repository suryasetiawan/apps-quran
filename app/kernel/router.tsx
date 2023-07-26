import React from 'react'
import { connect } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import routes from '@app/routes'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Platform, StatusBar } from 'react-native'

const AppNavigator = routes

type MyProps = {}
type AppState = {
  isRehydrated: boolean
  isAuthenticated: boolean
}

const IndexLayout = () => {
  class AppLayout extends React.Component<MyProps, AppState> {
    render() {
      return (
        <GestureHandlerRootView style={{ flex: 1 }}>
          <StatusBar backgroundColor="white" barStyle={'dark-content'} />
          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
         </GestureHandlerRootView>
      )
    }
  }
  return connect((state: any) => ({
    authData: state.authData
  }))(AppLayout)
}

export default {
  IndexLayout
}
