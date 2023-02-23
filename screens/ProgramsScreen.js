import { Button, StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import React from 'react';
import ModalComponent from '../components/Modal';

const ProgramsScreen = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Group Fitness Classes</Text>
        <View style={styles.card}>
          {/* <Image 
            style={styles.image}
            source={require('../assets/logo.png')}
          /> */}
          <Text>Our group fitness classes are the bread and butter of our Solcana offerings. We offer daily 12-person group classes with tons of 1-on-1 coach attention to make sure you are moving safely and getting your best workout. Our classes combine body weight movements with barbell, dumbbell and kettlebell strength training, and heart-pumping metabolic training. Learn to lift well and move well so you can avoid injury and live a strong, supported, pain free life. We pride ourselves on our ability to modify for all needs in our classes, so your workout can be totally customized to your body and your abilities.</Text>
        </View>
      <Button title="Nav to [Em]Power Screen" onPress={() => navigation.push('EmPowerScreen', {
        title: '[em]power'
      })}></Button>
      <ModalComponent />
    </SafeAreaView>
  )
}

export default ProgramsScreen

const styles = StyleSheet.create({
  image: {
    borderWidth: 5,
    borderColor: 'red',
    width: 20,
  },
  card: {
    flexDirection: 'row',
    height: 50,
  },
  container: {
    flex: 1,
    backgroundColor: '#ff854d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontWeight: 'bold',
  }
})