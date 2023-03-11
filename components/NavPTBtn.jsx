import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const NavPTBtn = ({ navigation }) => {
  return (
    <View>
      <Pressable
        title="Nav to Personal Training"
        onPress={() => navigation.push('PersonalTrainingScreen', {
          title: 'Personal Training'
        })}
      >
        <Text>Nav To Personal Training</Text>
      </Pressable>
    </View>
  )
}

export default NavPTBtn

const styles = StyleSheet.create({})