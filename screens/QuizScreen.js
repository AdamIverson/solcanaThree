import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Pressable } from 'react-native'
import React, { useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker'
import Modal from '../components/Modal'
import { addDoc, collection } from "firebase/firestore";
import { db } from '../firestoreDB/firestore';
import CheckBoxList from '../components/CheckBoxList';

const QuizScreen = ({ navigation }) => {
  const [open, setOpen] = useState(false);
  const [isChecked, setChecked] = useState(false);

  // create state for form
  const [firstName, onChangeFirstName] = useState();
  const [lastName, onChangeLastName] = useState();
  const [pronouns, onChangePronouns] = useState();
  const [phone, onChangePhone] = useState();
  const [email, onChangeEmail] = useState();
  const [additionalInfo, onChangeAdditionalInfo] = useState('');

  const [preference, onChangePreference] = useState([
    { label: 'Livestream from home', value: 'stream' },
    { label: 'In the Gym', value: 'gym' },
    { label: 'Mix of both', value: 'both' }
  ]);
  const [training, onChangeTraining] = useState([
    { label: 'Personal Training', value: 'personal' },
    { label: 'Small Group Classes', value: 'group' },
    { label: 'Mix of Both', value: 'mix' }
  ]);
  const [frequency, onChangeFrequency] = useState([
    { label: 'Not at all', value: 'none' },
    { label: 'On and off', value: 'meh' },
    { label: 'Regularly', value: 'regular' },
    { label: 'All the time', value: 'much' }
  ]);

  const [checkbox, onChangeCheckbox] = useState([
    { id: 1, txt: 'prenatal', isChecked: false },
    { id: 2, txt: 'postpartum', isChecked: true },
    { id: 3, txt: 'managing chronic pain', isChecked: false },
    { id: 4, txt: 'recently started hormone therapy', isChecked: false },
    { id: 5, txt: 'undergoing top surgery (or have in the recent past)', isChecked: false },
    { id: 6, txt: 'recovering from an injury', isChecked: false },
    { id: 7, txt: 'losing weight for medical reasons', isChecked: false }
  ]);

  const submitForm = async () => {
    try {
      const docRef = await addDoc(collection(db, "contacts"), {
        firstName: firstName,
        lastName: lastName,
        pronouns: pronouns,
        phone: phone,
        email: email,
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
      <View>
        <DropDownPicker
          placeholder='workout preference?'
          open={open}
          value={preference.value}
          items={preference}
          onChangeText={onChangePreference}
          setOpen={setOpen}
          setValue={onChangePreference}
          setItems={onChangePreference}
        />
      </View>
      <View>
        <DropDownPicker
          placeholder='Personal or Group Training?'
          open={open}
          value={training.value}
          items={training}
          onChangeText={onChangeTraining}
          setOpen={setOpen}
          setItems={onChangeTraining}
          setValue={onChangeTraining}
        />
        <DropDownPicker
          placeholder='Workout Frequency?'
          open={open}
          value={frequency.value}
          items={frequency}
          setOpen={setOpen}
          onChangeText={onChangeFrequency}
          setValue={onChangeFrequency}
          setItems={onChangeFrequency}
        />
      </View>
      <View
        style={styles.checkbox}
      >
        <CheckBoxList />
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
      {/* <Modal /> */}
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
  }
})