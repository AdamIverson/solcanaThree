import { Button, StyleSheet, Text, View } from 'react-native';
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

  // const quizComponent = () => {
  //   return (
  //     <testStack.Navigator>
  //       <testStack.Screen
  //         name='QuizScreen'
  //       />
  //     </testStack.Navigator>
  //   )
  // }

  // const testNavigate = () => {
  //   navigation.navigate('QuizScreen')
  // }

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
      <Text>ProgramsScreen</Text>
      <Button title="Nav to Quiz Screen" onPress={() => navigation.push('QuizScreen')}></Button>
      <Button title="analytics log event" onPress={analyticsTest}></Button>
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
})