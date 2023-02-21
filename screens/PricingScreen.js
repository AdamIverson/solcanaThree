import { Button, StyleSheet, Text, View, Pressable, Image } from 'react-native';
import React from 'react';
import { db } from '../firestoreDB/firestore';
import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import ModalComponent from '../components/Modal';
import { A } from '@expo/html-elements'

const PricingScreen = () => {

  const getOneDoc = async () => {
    console.log('getOneDoc');
    const docRef = doc(db, "contacts", "nUxAjDl4rDqMGKzFWqx0");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }

  const getAllDocs = async () => {
    const querySnapshot = await getDocs(collection(db, "contacts"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  }

  return (
    <View style={styles.container}>
      <Text>PricingScreen</Text>
      <View style={styles.image}>
        <Image
          style={styles.image}
          source={require('../assets/pricing.png')}
        />
      </View>
      <A href="https://docs.google.com/forms/d/e/1FAIpQLSdbCD-QJpZxEowWEtrbjHTZq2w5ZJVllc0tboff3mebKrL6sw/viewform">
        Apply for Sliding Scale
      </A>
      {/* <Button title='get all docs' onPress={getAllDocs}></Button>
      <Button title='get one doc' onPress={getOneDoc}></Button> */}
      <ModalComponent />
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
  image: {
    flex: 1,
    width: 400,
    height: 200,
  }
})