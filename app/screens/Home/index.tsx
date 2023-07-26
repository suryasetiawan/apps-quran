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


const Home = ({ }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.whiteCheese }}>
     <Text style={{fontSize:50, alignItems:'center', color: colors.blackCheese}}>Home SCREEN</Text>
    </SafeAreaView>
  )
}

export default Home
