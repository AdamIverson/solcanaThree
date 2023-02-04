import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker'

const QuizScreen = ({ navigation }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Livestream from home', value: 'stream'},
    {label: 'In the Gym', value: 'gym'},
    {label: 'Mix of both', value: 'both'}
  ]);
  const [items2, setItems2] = useState([
    {label: 'Personal Training', value: 'personal'}, 
    {label:'Small Group Classes', value: 'group'},
    {label:'Mix of Both', value: 'mix'}
  ]);
  const [items3, setItems3] = useState([
    {label: 'Not at all', value: 'none'}, 
    {label:'On and off', value: 'meh'},
    {label:'Regularly', value: 'regular'},
    {label: 'All the time', value: 'much'}
  ]);

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
        <TextInput placeholder='First Name' />
        <TextInput placeholder='Last Name' />
      </View>
      <View>
        <TextInput placeholder='Pronouns' />
        <TextInput placeholder='Phone' />
      </View>
      <View>
        <TextInput placeholder='Email' />
        <DropDownPicker
          placeholder='workout preference?'
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
      </View>
      <View>
        <DropDownPicker 
        placeholder='Personal or Group Training?'
        open={open}
        value={value}
        items={items2}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        />
        <DropDownPicker 
        placeholder='Workout Frequency?'
        open={open}
        value={value}
        items={items3}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        />
      </View>
      <View>
        <TouchableOpacity>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default QuizScreen

const styles = StyleSheet.create({})