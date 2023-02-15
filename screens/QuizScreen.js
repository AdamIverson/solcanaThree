import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker'
import Modal from '../components/Modal'
import { addDoc, collection } from "firebase/firestore";
import { db } from '../firestoreDB/firestore';

const QuizScreen = ({ navigation }) => {
  const [open, setOpen] = useState(false);

// create state for form
  const [firstName, onChangeFirstName] = useState();
  const [lastName, onChangeLastName] = useState();
  const [pronouns, onChangePronouns] = useState();
  const [phone, onChangePhone] = useState();
  const [email, onChangeEmail] = useState();
  const [checkbox, onChangeCheckbox] = useState([]);
  const [additionalInfo, onChangeAdditionalInfo] = useState('');

  const [preference, onChangePreference] = useState([
    {label: 'Livestream from home', value: 'stream'},
    {label: 'In the Gym', value: 'gym'},
    {label: 'Mix of both', value: 'both'}
  ]);
  const [training, onChangeTraining] = useState([
    {label: 'Personal Training', value: 'personal'}, 
    {label:'Small Group Classes', value: 'group'},
    {label:'Mix of Both', value: 'mix'}
  ]);
  const [frequency, onChangeFrequency] = useState([
    {label: 'Not at all', value: 'none'}, 
    {label:'On and off', value: 'meh'},
    {label:'Regularly', value: 'regular'},
    {label: 'All the time', value: 'much'}
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
    <View>
      <View>
        <Button title="go back" onPress={() => navigation.goBack()}></Button>
      </View>
      <View>
        <Text>Which Solcana Program is right for you?</Text>
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
      <View>
          <Text>Do any of the following apply to you?</Text>
        {/* <BouncyCheckbox 
          textStyle={{textDecorationLine: "none",}}
          text="Prenatal"
          // style={styles.checkbox}
        />
        <BouncyCheckbox text="Postpartum"/>
        <BouncyCheckbox text="Managing chronic pain"/>
        <BouncyCheckbox text="Recently started hormone therapy"/>
        <BouncyCheckbox text="Undergoing top surgery (or have in the recent past"/>
        <BouncyCheckbox text="Recovering from an injury"/>
        <BouncyCheckbox text="Losing weight for medical reasons"/> */}
      </View>
      <View>
        <Text>Is there anything else you'd like us to know?</Text>
        <TextInput 
          placeholder='additional info'
          value={additionalInfo}
          onChangeText={onChangeAdditionalInfo}
          multiline={true}
          numberOfLines={4}
          style={{ height:100, textAlignVertical: 'top',}}
          ></TextInput>
      </View>
      <View>
        <TouchableOpacity>
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
  checkbox: {
    textColor: 'red',
    textStyle: {
      textDecorationLine: "none",
    },
  }
})