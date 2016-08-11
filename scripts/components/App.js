import React, { Component } from 'react'
import TabView from 'react-native-scrollable-tab-view'
import LinearGradient from 'react-native-linear-gradient'
import CurrentWorkout from './CurrentWorkout'
import { View, Text } from 'react-native'

const Welcome = () => (
  <LinearGradient colors={['#FF5E3A', '#FF2A68']} style={{flex: 1, backgroundColor: '#FF2A68'}}>
    <TabView
      tabBarTextStyle={{fontSize: 30}}
      tabBarPosition='overlayBottom'
      tabBarUnderlineColor='red'
      tabBarTextStyle={{color: 'white', fontSize: 35}}
    >
    <CurrentWorkout tabLabel='+' />
    </TabView >
  </LinearGradient>
)

export default Welcome
