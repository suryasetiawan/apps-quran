import React, { useState } from 'react'
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Image
} from 'react-native'
import { colors } from 'theme'


const IntroScreen = ({ }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.whiteCheese }}>
     <Text style={{fontSize:50, alignItems:'center', color: colors.blackCheese}}>INTRO SCREEN</Text>
    </SafeAreaView>
  )
}

export default IntroScreen
