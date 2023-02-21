import { Button, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import ModalComponent from '../components/Modal';
import { firebaseAnalytics, db } from '../firestoreDB/firestore';
import { getAnalytics, isSupported, logEvent } from 'firebase/analytics';
import analytics from "@react-native-firebase/analytics";
import { createStackNavigator } from '@react-navigation/stack';
import QuizScreen from './QuizScreen';

const ProgramsScreen = ({ navigation }) => {
  // const FBAnalytics = isSupported().then(yes => yes ? getAnalytics(app) : null);
  // const firebaseAnalytics = getAnalytics();
  const fireAnalytics = getAnalytics();
  const testStack = createStackNavigator();

  const analyticsTest = () => {
    analytics().logEvent('hooray', {
      contentType: 'text',
      itemId: 'Expo rocks!',
      method: 'facebook'
    });
    console.log("analyticsTest");
  }

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image
          style={styles.image}
          source={require('../assets/programs.png')}
        />
      </View>
      <Button title="Nav to Quiz Screen" onPress={() => navigation.push('QuizScreen', {
        title: 'holy cats'
      })}></Button>
      {/* <Button title="analytics log event" onPress={analyticsTest}></Button> */}
      <ModalComponent />
    </View>
  )
}

export default ProgramsScreen

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