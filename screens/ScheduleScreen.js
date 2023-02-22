import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native'
import React from 'react'
import ModalComponent from '../components/Modal'
import { FlatList } from 'react-native-gesture-handler'

// data sources
const classesMF = [
  { title: '6am', id: 1 },
  { title: '7am', id: 2 },
  { title: '9am', id: 3 },
  { title: '12pm', id: 4 },
  { title: '4:30pm', id: 5 },
  { title: '5:30pm', id: 6 },
  { title: '6:30pm', id: 7 },
];

const classesSaturday = [
  { title: '8am', id: 1 },
  { title: '9am', id: 2 },
  { title: '10am', id: 3 },
]

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const ScheduleScreen = () => {
  return (
    <SafeAreaView
      style={styles.container}
    >
      <View>
        <Text style={styles.header}>
          Group Fitness Classes
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default ScheduleScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 25,
    justifyContent: 'center'
  },
  list: {
    borderColor: 'red',
    borderWidth: 5,
  },
  classRow: {
    flex: 1,
    flexDirection: 'row'
  },
  classUnit: {
    width: 10,
  }
})