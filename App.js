import * as React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeScreen from './screens/HomeScreen';
import ProgramsScreen from './screens/ProgramsScreen';
import PricingScreen from './screens/PricingScreen';
import ScheduleScreen from './screens/ScheduleScreen';
import ModalComponent from './components/Modal';

const Tab = createBottomTabNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
     screenOptions={({ route }) => ({
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
        <Tab.Screen name="Home" component={HomeScreen}            //Home Screen
          options={{
            headerStyle: {
              backgroundColor: '#66A0C5'
            },
            headerTintColor: '#fff',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }} />
        <Tab.Screen name="Programs" component={ProgramsScreen}            //Home Screen
          options={{
            headerStyle: {
              backgroundColor: '#66A0C5'
            },
            headerTintColor: '#fff',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="plus-minus-variant" color={color} size={26} />
            ),
          }} />
        <Tab.Screen name="Pricing" component={PricingScreen}            //Home Screen
          options={{
            headerStyle: {
              backgroundColor: '#66A0C5'
            },
            headerTintColor: '#fff',
            title: 'Pricing',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="sine-wave" color={color} size={26} />
            ),
          }} />
         <Tab.Screen name="ScheduleScreen" component={ScheduleScreen}            //Home Screen
          options={{
            headerStyle: {
              backgroundColor: '#66A0C5'
            },
            headerTintColor: '#fff',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="calendar-today" color={color} size={26} />
            ),
          }} />
      </Tab.Navigator>
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
