import { Button, StyleSheet, Text, View } from 'react-native';
import db from '../firestoreDB/firestore';
import { addDoc, collection } from "firebase/firestore";

export default function HomeScreen() {

  const dataPress = async () => {
    console.log('one');
    try {
      const docRef = await addDoc(collection(db, "testThree"), {
        first: "Realtime",
        middle: "Test",
        last: "Result",
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
    backgroundColor: '#ff854d',
    alignItems: 'center',
    justifyContent: 'center',
  },
});