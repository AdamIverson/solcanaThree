import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const PersonalTrainingScreen = ({ navigation }) => {
  return (
    <View>
      <Pressable onPress={() => navigation.goBack()}>
        <Text>Go Back</Text>
      </Pressable>
      <Text>PersonalTrainingScreen</Text>
    </View>
  )
}

export default PersonalTrainingScreen

const styles = StyleSheet.create({})