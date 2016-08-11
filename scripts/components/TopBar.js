import React from 'react'
import { View, StyleSheet } from 'react-native'

const TopBar = props => (
  <View style={[styles.container, props.style]}>
    {props.children}
  </View>
)

export default TopBar

const styles = StyleSheet.create({
  container: {
    height: 60,
    flex: 1,
    backgroundColor: 'white',
    padding: 10
  }
})
