import { StyleSheet, View, SafeAreaView, Image, Pressable, Text } from 'react-native';
import { db } from '../firestoreDB/firestore';
import { addDoc, collection } from "firebase/firestore";
import ModalComponent from '../components/Modal';

export default function HomeScreen({ navigation }) {

  // const dataPress = async () => {
  //   console.log('one');
  //   try {
  //     const docRef = await addDoc(collection(db, "testFour"), {
  //       first: "Solcana",
  //       middle: "onethousand",
  //       last: "Connected",
  //       born: 2022
  //     });
  //     console.log("Document written with ID: ", docRef.id);
  //   } catch (e) {
  //     console.error("Error adding document: ", e);
  //   }
  // }

  return (
    <View style={styles.container}>
      <View
        style={styles.logo}
      >
      <Image 
        style={styles.image}
        source={require('../assets/logo.png')}
        />
        <Pressable 
          title="Nav to Personal Training"
          onPress={() => navigation.push('EmPowerScreen', {
            title: '[em]power'
          })}
          >
          <Text>Nav To empower</Text>
        </Pressable>
        <Pressable 
          title="Nav to EmPower"
          onPress={() => navigation.push('PersonalTrainingScreen', {
            title: 'Personal Training'
          })}
          >
          <Text>Nav To Personal Training</Text>
        </Pressable>
        <Pressable 
          onPress={() => navigation.push('QuizScreen')}
          >
          <Text>Nav To Quiz</Text>
        </Pressable>
      </View>
      
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
  logo: {
    flex: 1,
    margin: 25,
  },
});