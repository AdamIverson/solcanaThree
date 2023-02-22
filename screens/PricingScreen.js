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
      <Text style={styles.header}>Membership Pricing</Text>
      <Text>We offer a wide variety of programs to meet your goals, and they vary in price.
        Take our Solcana quiz to find the best fit for you so we can connect with you about the specific cost for the program you're most interested in.</Text>
      <Text>We believe that the most transformational outcomes happen in small group programs. Our boutique gym requires higher-priced services than a big-box gym because we keep our classes super small, connect with each client personally, and pay our employees above average wages. Our prices reflect the cost of running a small community while supporting our staff to live sustainable lives.</Text>
      <Text>Prices range, and start at $44 per week.
        If that doesn't work for you, check out our sliding scale information below.</Text>
      <Text style={styles.header}>Apply for our Sliding Scale program</Text>
      <Text>We believe that fitness should be accessible to all people. Therefore, we offer 25% of our memberships on a sliding scale price. The sliding scale application is completely on the honor-system. You don't need to prove your income to qualify, you just need to tell us what you can afford and will honor it.</Text>
      <Text>Our member base is currently 70% White, and we prioritize Black, Indigenous and People of Color in the selection process for our sliding scale. We also prioritize Trans* folks, single-income households with children, People with disabilities and other communities that are marginalized in traditional fitness spaces.</Text>
      <Text>If you'd like to join us on a sliding scale membership, start by trying 14-days free with us. If you love it, click the button below to apply for a sliding scale membership. We are so excited to work with you.</Text>
      <A style={styles.href} href="https://docs.google.com/forms/d/e/1FAIpQLSdbCD-QJpZxEowWEtrbjHTZq2w5ZJVllc0tboff3mebKrL6sw/viewform">
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
  href: {
    backgroundColor: 'red',
  },
  container: {
    flex: 1,
    backgroundColor: '#ff854d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    flex: 1,
    width: 400,
    height: 200,
  }
})