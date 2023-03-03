import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Pressable } from 'react-native'
import React, { useState } from 'react'
import { addDoc, collection } from "firebase/firestore";
import { db } from '../firestoreDB/firestore';
import CheckBoxList from '../components/CheckBoxList';
import DropdownWorkout from '../components/DropdownWorkout';
import DropdownTraining from '../components/DropdownTraining';
import DropdownFrequency from '../components/DropdownFrequency';

const QuizScreen = ({ navigation }) => {

  // create state for form
  const [firstName, onChangeFirstName] = useState();
  const [lastName, onChangeLastName] = useState();
  const [pronouns, onChangePronouns] = useState();
  const [phone, onChangePhone] = useState();
  const [email, onChangeEmail] = useState();
  const [additionalInfo, onChangeAdditionalInfo] = useState('');
  const workoutState = [ workout, setWorkout ] = useState('');
  const trainingState = [ training, setTraining ] = useState('');
  const frequencyState = [frequency, setFrequency] = useState('');
  // const [training, onChangeTraining] = useState([
  //   { label: 'Personal Training', value: 'personal' },
  //   { label: 'Small Group Classes', value: 'group' },
  //   { label: 'Mix of Both', value: 'mix' }
  // ]);

  // const [frequency, onChangeFrequency] = useState([
  //   { label: 'Not at all', value: 'none' },
  //   { label: 'On and off', value: 'meh' },
  //   { label: 'Regularly', value: 'regular' },
  //   { label: 'All the time', value: 'much' },
  // ]);

  // const checkboxData = [
  //   { id: 1, name: 'prenatal', isChecked: false },
  //   { id: 2, name: 'postpartum', isChecked: false },
  //   { id: 3, name: 'managing chronic pain', isChecked: false },
  //   { id: 4, name: 'recently started hormone therapy', isChecked: false },
  //   { id: 5, name: 'undergoing top surgery (or have in the recent past)', isChecked: false },
  //   { id: 6, name: 'recovering from an injury', isChecked: false },
  //   { id: 7, name: 'losing weight for medical reasons', isChecked: false }
  // ];

  const checkboxState = [checkbox, setCheckbox] = useState();

  const submitForm = async () => {
    try {
      const docRef = await addDoc(collection(db, "contacts"), {
        // firstName: firstName,
        // lastName: lastName,
        // pronouns: pronouns,
        // phone: phone,
        // email: email,
        workout: workout,
        training: training,
        frequency: frequency,
        checkbox: checkbox,
        // message: additionalInfo
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      {/* <View>
        <Button title="go back" onPress={() => navigation.goBack()}></Button>
      </View>
      <View>
        <Text >Which Solcana Program is right for you?</Text>
        <Text>Take the quiz to find out</Text>
      </View>
      <View>
        <TextInput
          placeholder='First Name'
          value={firstName}
          // onChange={onChangeFirstName}
          onChangeText={onChangeFirstName}
        />
        <TextInput
          placeholder='Last Name'
          value={lastName}
          onChangeText={onChangeLastName}
        />
      </View>
      <View>
        <TextInput
          placeholder='Pronouns'
          value={pronouns}
          onChangeText={onChangePronouns}
        />
        <TextInput
          placeholder='Phone'
          value={phone}
          onChangeText={onChangePhone}
        />
      </View>
      <View>
        <TextInput
          placeholder='Email'
          value={email}
          onChangeText={onChangeEmail}
        />
      </View> */}
      <View style={{ flex: 1, width: 400 }}>
        <DropdownWorkout workout={workout}/>
        <DropdownTraining training={training}/>
        <DropdownFrequency frequency={frequency}/>
      </View>
      {/* <View>
      </View> */}
      <View
        style={styles.checkbox}
      >
        <CheckBoxList checkbox={checkbox}/>
      </View>
      <View>
        <Text>Is there anything else you'd like us to know?</Text>
        <TextInput
          placeholder='additional info'
          value={additionalInfo}
          onChangeText={onChangeAdditionalInfo}
          multiline={true}
          numberOfLines={4}
          style={{ height: 100, textAlignVertical: 'top', }}
        ></TextInput>
      </View>
      <View>
        <TouchableOpacity style={styles.submit}>
          <Text
            onPress={submitForm}
          >
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default QuizScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff854d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    flex: 1,
    borderWidth: 5,
    padding: 10,
  },
  submit: {
    marginLeft: 25,
    marginBottom: 50,
  },
  dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
})