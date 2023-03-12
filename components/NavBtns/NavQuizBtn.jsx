import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const NavQuizBtn = ({ navigation }) => {
  return (
    <View>
      <Pressable
        onPress={() => navigation.push('QuizScreen')}
      >
        <Text>Nav To Quiz</Text>
      </Pressable>
    </View>
  )
}

export default NavQuizBtn

const styles = StyleSheet.create({})