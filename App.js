import * as React from 'react';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { MaterialCommunityIcons } from '@expo/vector-icons';



import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeScreen from './screens/HomeScreen';
import ProgramsScreen from './screens/ProgramsScreen';
import PricingScreen from './screens/PricingScreen';
import ScheduleScreen from './screens/ScheduleScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen}            //Home Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }} />
        <Tab.Screen name="Programs" component={ProgramsScreen}            //Home Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account-clock" color={color} size={26} />
            ),
          }} />
        <Tab.Screen name="Pricing" component={PricingScreen}            //Home Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="sine-wave" color={color} size={26} />
            ),
          }} />
         <Tab.Screen name="Schedule" component={ScheduleScreen}            //Home Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="calendar-today" color={color} size={26} />
            ),
          }} />
      </Tab.Navigator>
      {/* <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Programs" component={ProgramsScreen} />
        <Stack.Screen name="Pricing" component={PricingScreen} />
        <Stack.Screen name="Schedule" component={ScheduleScreen} />
      </Stack.Navigator> */}
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
