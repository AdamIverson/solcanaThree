import { Button, StyleSheet, Text, View } from 'react-native';
import db from '../firestoreDB/firestore';
import { addDoc, collection } from "firebase/firestore";

export default function HomeScreen() {

  const dataPress = async () => {
    console.log('dataPress');
    try {
      const docRef = await addDoc(collection(db, "testThree"), {
        first: "Navigation",
        middle: "Stack",
        last: "Implemented",
        born: 2022
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  return (
    <View style={styles.container}>
      <Text>solcana three</Text>
      <Button title="dataPress" onPress={dataPress}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});