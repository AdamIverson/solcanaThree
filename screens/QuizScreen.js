import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const QuizScreen = ({ navigation }) => {
  return (
    <View>
      <Text>QuizScreen</Text>
      <Button title="go back" onPress={() =>navigation.goBack()}></Button>
    </View>
  )
}

export default QuizScreen

const styles = StyleSheet.create({})