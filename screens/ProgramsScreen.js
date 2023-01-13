import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ModalComponent from '../components/Modal';
// import { firebaseAnalytics } from '../firestoreDB/firestore';
import { getAnalytics, logEvent } from 'firebase/analytics';
import analytics from "@react-native-firebase/analytics";
// import { firebase } from '@react-native-firebase/firestore';

// firebase.initializeApp();

const ProgramsScreen = () => {
  const analyticsFB = getAnalytics();

  const analyticsTest = () => {
    // logEvent(analytics, 'notification_received');
    analytics().logEvent('hooray', {
      // contentType: 'text', 
      // itemId: 'Expo rocks!', 
      method: 'facebook'
    });
    console.log("analyticsTest");
  }

  return (
    <View style={styles.container}>
      <Text>ProgramsScreen</Text>
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