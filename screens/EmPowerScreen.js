import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const EmPowerScreen = ({ navigation }) => {
  return (
    <View>
      <Pressable onPress={() => navigation.goBack()}>
        <Text>Go Back</Text>
      </Pressable>
      <Text>EmPowerScreen</Text>
    </View>
  )
}

export default EmPowerScreen

const styles = StyleSheet.create({})