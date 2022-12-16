import { Button, StyleSheet, Text, View } from 'react-native';
// import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
// import firestore from 'react-native-firebase/firestore';

export default function App() {
  
  const firebaseConfig = {
    apiKey: "AIzaSyDLm3m3g4v5oJtWWctU0MQnTjuniaNRC6g",
    authDomain: "solcanathree.firebaseapp.com",
    projectId: "solcanathree",
    storageBucket: "solcanathree.appspot.com",
    messagingSenderId: "483534570383",
    appId: "1:483534570383:web:6365caaf7a7241275201fa"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  

  const dataPress = async () => {
    try {
      const docRef = await addDoc(collection(db, "testThree"), {
        first: "Alan",
        middle: "Mathison",
        last: "Turing",
        born: 1912
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
