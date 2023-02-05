import { Button, StyleSheet, Text, TextInput, View, SafeAreaView } from 'react-native';
import { db } from '../firestoreDB/firestore';
import { addDoc, collection } from "firebase/firestore";
import ModalComponent from '../components/Modal';

export default function HomeScreen() {

  const dataPress = async () => {
    console.log('one');
    try {
      const docRef = await addDoc(collection(db, "testFour"), {
        first: "Solcana",
        middle: "onethousand",
        last: "Connected",
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
      <SafeAreaView style={styles.container}>
      <ModalComponent />
      </SafeAreaView>
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