import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import analytics from "@react-native-firebase/analytics";

const ProgramsScreen = () => {

  const analyticsTest = () => {
    analytics().logEvent('hooray', {
      contentType: 'text', 
      itemId: 'Expo rocks!', 
      method: 'facebook'
    });
  }

  return (
    <View style={styles.container}>
      <Text>ProgramsScreen</Text>
      <Button title="analtics log event" onPress={analyticsTest}></Button>
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