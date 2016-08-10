import React, { Component } from 'react'
import TabView from 'react-native-scrollable-tab-view'
import { View, Text } from 'react-native'

const Welcome = () => (
  <View style={{flex: 1}}>
    <TabView
      tabBarTextStyle={{fontSize: 30}}
      tabBarPosition='overlayBottom'
      tabBarUnderlineColor='red'
    >
    <Text tabLabel='hello'>yup</Text>
    <Text tabLabel='yo'>yo</Text>
    </TabView >
  </View>
)

export default Welcome
