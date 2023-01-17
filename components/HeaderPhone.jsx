import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HeaderPhone = () => {
  return (
    <View style={styles.text}>
      <Text>(612) 808-0252</Text>
    </View>
  )
}

export default HeaderPhone

const styles = StyleSheet.create({
  text: {
    color: 'red',
    fontSize: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }
})