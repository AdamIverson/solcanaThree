import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ModalComponent from '../components/Modal'
import CheckBox from '../components/CheckBoxList'

const ScheduleScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ScheduleScreen</Text>
      <CheckBox />
      <ModalComponent />
    </View>
  )
}

export default ScheduleScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff854d',
    alignItems: 'center',
    justifyContent: 'center',
  },
})