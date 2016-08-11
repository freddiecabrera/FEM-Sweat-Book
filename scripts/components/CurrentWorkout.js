import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native'
import TopBar from './TopBar'
import Icon from 'react-native-vector-icons/Ionicons'
import * as actions from '../actions'

class CurrentWorkout extends Component  {
  constructor (props) {
    super(props)
  }

  render() {
    console.warn(JSON.stringify(this.props, null, 2))
    return (
      <View>
        <Modal
          animationType={"fade"}
          transparent={false}
          visible={this.props.modalOn}
        >
          <TouchableOpacity onPress={this.props.modalTrigger.bind(this, false)}>
            <Icon style={styles.icon} size={40} name="ios-close-outline" color='black' />
          </TouchableOpacity>
        </Modal>
        <TopBar style={styles.topBar}>
          <View style={styles.topBarContaier}>
            <Text style={styles.topBarText}>
              Workouts
            </Text>
            <TouchableOpacity onPress={this.props.modalTrigger.bind(this, true)}>
              <Icon style={styles.icon} size={40} name="ios-add-outline" color='white' />
            </TouchableOpacity>
          </View>
        </TopBar>
        <View style={styles.workouts}>
          <Text style={styles.workoutsText}>Workouts</Text>
        </View>
        <View style={styles.workouts}>
          <Text style={styles.workoutsText}>Workouts</Text>
        </View>
        <View style={styles.workouts}>
          <Text style={styles.workoutsText}>Workouts</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  topBar: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 23
  },
  topBarContaier: {
    flex: 1,
    flexDirection: 'row'
  },
  topBarText: {
    color: 'white',
    fontSize: 25
  },
  icon: {
    bottom: 5,
    left: 100
  },
  workouts: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'white',
    borderTopColor: '#D7D9DD',
    height: 60,
    justifyContent: 'center'
  },
  workoutsText: {
    fontSize: 15,
    color: '#3B3B3C',
    left: 20,
    backgroundColor: 'transparent'
  }
})

const mapStateToProps = state => ({
  modalOn: state.UserInteraction.trigger
})

export default connect(mapStateToProps, actions)(CurrentWorkout)
