import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import db from '../firestoreDB/firestore';
import { collection, getDocs, getDoc, doc } from "firebase/firestore";

const PricingScreen = () => {

  const getOneDoc = async () => {
    console.log('getOneDoc');
    const docRef = doc(db, "testThree", "athlete1");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }

  const getAllDocs = async () => {
    const querySnapshot = await getDocs(collection(db, "testThree"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  }

  return (
    <View style={styles.container}>
      <Text>PricingScreen</Text>
      <Button title='get all docs' onPress={getAllDocs}></Button>
      <Button title='get one doc' onPress={getOneDoc}></Button>
    </View>
  )
}

export default PricingScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff854d',
    alignItems: 'center',
    justifyContent: 'center',
  },
})