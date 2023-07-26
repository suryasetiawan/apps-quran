import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen, IntroScreen } from '@utils/const/screens'

const Stack = createNativeStackNavigator()

function routes() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, animation: 'slide_from_right' }}>
      <Stack.Screen
        name={IntroScreen.name}
        component={IntroScreen.component}
      />
     <Stack.Screen
        name={HomeScreen.name}
        component={HomeScreen.component}
      />
    </Stack.Navigator>
  )
}

export default routes
