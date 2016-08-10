import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const Splash = props => (
  <View style={style.background}>
    <View style={style.container}>
      <Text style={style.title}>Sweat Book</Text>
      <Text style={style.para}>Log your fitness</Text>
    </View>
    <View style={style.contentContainer}>
      <TouchableOpacity onPress={props.startWorkout} style={style.button}>
        <Text style={style.buttonText}>Begin</Text>
      </TouchableOpacity>
    </View>
  </View>
)

const style = {
  background: {
    backgroundColor: '#141A1E',
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 220,
  },
  title: {
    fontSize: 30,
    color: '#FEFEFE'
  },
  para: {
    color: '#D7D9DD'
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#0287EE',
    height: 40,
    width: 200,
  },
  buttonText: {
    flex: 1,
    textAlign: 'center',
    marginTop: 10,
    color: '#FEFEFE'
  }
}

export default Splash
