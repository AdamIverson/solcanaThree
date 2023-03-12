import React, { useState } from 'react';
import { Text, StyleSheet, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Main from './components/Main';
import QuizScreen from './screens/QuizScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import EmPowerScreen from './screens/EmPowerScreen';
import PersonalTrainingScreen from './screens/PersonalTrainingScreen';

const Stack = createNativeStackNavigator();

function phoneCall() {
  const url = 'tel://6128080252';
  Linking.openURL(url);
}


export default function App() {
  const [appTitle, setAppTitle] = useState('Solcana Fitness')

  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={({ route, navigation }) => ({
        headerTitle: route.name,
        headerLeft: () => (
          <TouchableOpacity
          onPress={phoneCall}
          >
            <Text>(612) 808-0252</Text>
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity
          onPress={() => alert('maps goes here')}
          >
            <Text>1915 E 22nd St</Text>
          </TouchableOpacity>
        ),
        headerStyle: {
          backgroundColor: '#66A0C5',
        },
        tabBarStyle: {
          height: 70,
          paddingHorizontal: 5,
          paddingTop: 10,
          paddingBottom: 15,
          backgroundColor: '#66A0C5',
          position: 'absolute',
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: '#ff854d',
        tabBarInactiveTintColor: '#fff'
      })}
      >
        <Stack.Screen 
          name={appTitle} 
          component={Main}
          options={({ route }) => ({ title: route.name })}
        />
        <Stack.Screen 
          name='QuizScreen' 
          component={QuizScreen}
          options={() => ({ headerTitle: "Go Fitness!" })}
          />
        <Stack.Screen 
          name='EmPowerScreen' 
          component={EmPowerScreen}
          options={() => ({ headerTitle: "EmPower!" })}
          />
        <Stack.Screen 
          name='PersonalTrainingScreen' 
          component={PersonalTrainingScreen}
          options={() => ({ headerTitle: "Personal Training!" })}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
