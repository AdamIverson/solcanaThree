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
];

const transStrength = [
  { title: 'Tuesday 6:30pm', id: 1 },
  { title: 'Thursday 6:30pm', id: 2 },
  { title: 'Saturday 9:00am', id: 3 },
];

const bigBody = [
  { title: 'Tuesday 5:30pm', id: 1 },
  { title: 'Thursday 5:30pm', id: 2 },
  { title: 'Sunday 9:30am', id: 3 },
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
        <View style={styles.row}>
          <View style={styles.classBox}>
            <View>
              <Text>Monday - Friday</Text>
              <FlatList
                data={classesMF}
                renderItem={({ item }) => <Item title={item.title} />}
              />
            </View>
          </View>
          <View style={styles.classBox}>
            <View>
              <Text>Saturday</Text>
              <FlatList
                data={classesSaturday}
                renderItem={({ item }) => <Item title={item.title} />}
              />
            </View>
          </View>
          <View style={styles.classBox}>
            <View>
              <Text>Sunday</Text>
              <Text>10:30am*</Text>
              <Text>*This is a free community class and is open to the public. If you'd like to attend, complete the form at the bottom of this page.</Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.header}>Affinity Group Classes</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.classBox}>
            <View>
              <Text>Trans Strength</Text>
              <FlatList
                data={transStrength}
                renderItem={({ item }) => <Item title={item.title} />}
                keyExtractor={item => item.id}
              />
            </View>
            <View style={styles.classBox}>
              <View>
                <Text>Big Body Fitness</Text>
                <FlatList
                  data={bigBody}
                  renderItem={({ item }) => <Item title={item.title} />}
                  keyExtractor={item => item.id}
                />
              </View>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.header}>Cohort-Format Classes</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.classBox}>
            <View>
              <Text>[Em]Power Beginner Classes:</Text>
              <Text>Mon/Wed 6:30pm</Text>
              <Text>Tu/Thu 7am & 6:30pm</Text>
            </View>
            <View style={styles.classBox}>
              <View>
                <Text>Masters' Strength (private group for women 50+)</Text>
                <Text>Mon-Thu 8:00am</Text>
                <Text>Mon & Wed 5:30pm</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default ScheduleScreen

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    // borderColor: 'green',
    // borderWidth: 1,
  },
  classBox: {
    flex: 1,
    flexDirection: 'row',
    width: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    marginTop: 30,
    fontSize: 25,
    justifyContent: 'center'
  },
})