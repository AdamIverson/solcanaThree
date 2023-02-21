import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import ModalComponent from '../components/Modal'

const ScheduleScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ScheduleScreen</Text>
      <View style={styles.image}>
        <Image
          style={styles.image}
          source={require('../assets/schedule.png')}
        />
      </View>
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
  image: {
    flex: 1,
    width: 400,
    height: 200,
  }
})