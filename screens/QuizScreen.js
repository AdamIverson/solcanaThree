import { Button, StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const QuizScreen = ({ navigation }) => {
  return (
    <View>
      <Button title="go back" onPress={() =>navigation.goBack()}></Button>
      <Text>QuizScreen</Text>
      <View>
        <TextInput placeholder='First Name'/>
        <TextInput placeholder='Last Name'/>
      </View>
      <View>
        <TextInput placeholder='Pronouns'/>
        <TextInput placeholder='Phone'/>
      </View>
      <View>
        <TextInput placeholder='Email'/>
        {/* <Picker placeholder='Dropdown' /> */}
      </View>
    </View>
  )
}

export default QuizScreen

const styles = StyleSheet.create({})