import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const NavEmPowerBtn = ({ navigation }) => {
  return (
    <View style={styles.btn}>
      <Pressable
        title="Nav to EmPower"
        onPress={() => navigation.push('EmPowerScreen', {
          title: '[em]power'
        })}
      >
        <Text>Nav To empower</Text>
      </Pressable>
    </View>
  )
}

export default NavEmPowerBtn

const styles = StyleSheet.create({
  btn: {
    borderColor: 'red',
    borderWidth: 5,
  }
})