import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Pressable } from 'react-native'
import React, { useState } from 'react'
import { addDoc, collection } from "firebase/firestore";
import { db } from '../firestoreDB/firestore';

// yes we tried several checkboxes
import SecondCheckbox from '../components/Form/SecondCheckbox'

import DropdownWorkout from '../components/Form/DropdownWorkout';
import DropdownTraining from '../components/Form/DropdownTraining';
import DropdownFrequency from '../components/Form/DropdownFrequency';

const QuizScreen = ({ navigation }) => {

  // create state for form
  const [firstName, onChangeFirstName] = useState();
  const [lastName, onChangeLastName] = useState();
  const [pronouns, onChangePronouns] = useState();
  const [phone, onChangePhone] = useState();
  const [email, onChangeEmail] = useState();
  const [additionalInfo, onChangeAdditionalInfo] = useState('');
  const workoutState = [workout, setWorkout] = useState('');
  const trainingState = [training, setTraining] = useState('');
  const frequencyState = [frequency, setFrequency] = useState('');

  const checkboxData = [
    { id: 1, name: 'prenatal', isChecked: false },
    { id: 2, name: 'postpartum', isChecked: false },
    { id: 3, name: 'managing chronic pain', isChecked: false },
    { id: 4, name: 'recently started hormone therapy', isChecked: false },
    { id: 5, name: 'undergoing top surgery (or have in the recent past)', isChecked: false },
    { id: 6, name: 'recovering from an injury', isChecked: false },
    { id: 7, name: 'losing weight for medical reasons', isChecked: false }
  ];

  const checkboxState = [checkbox, setCheckbox] = useState(checkboxData);
  let selected = checkbox.filter((selectedBox) => selectedBox.isChecked);
  let name = selected.map((option) => option.name)
  const submitForm = async () => {
    try {
      const docRef = await addDoc(collection(db, "contacts"), {
        firstName: firstName,
        lastName: lastName,
        pronouns: pronouns,
        phone: phone,
        email: email,
        workout: workout,
        training: training,
        frequency: frequency,
        checkbox: name,
        message: additionalInfo
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View>
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
      </View>
      <View style={styles.dropdown}>
        <DropdownWorkout workout={workout} />
        <DropdownTraining training={training} />
        <DropdownFrequency frequency={frequency} />
      </View>
      <View style={styles.section}>
        <SecondCheckbox checkbox={checkbox} />
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
        <View style={styles.submit}>
          <TouchableOpacity>
            <Text
              onPress={submitForm}
            >
              Submit
            </Text>
          </TouchableOpacity>
        </View>
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
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  submit: {
    marginLeft: 25,
    marginBottom: 50,
  },
  dropdown: {
    flex: 1,
    width: 400,
    margin: 16,
    height: 50,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
})