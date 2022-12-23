import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProgramsScreen = () => {

  return (
    <View style={styles.container}>
      <Text>ProgramsScreen</Text>
    </View>
  )
}

export default ProgramsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff854d',
    alignItems: 'center',
    justifyContent: 'center',
  },
})