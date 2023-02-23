import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import ProgramsScreen from '../screens/ProgramsScreen';
import PricingScreen from '../screens/PricingScreen';
import ScheduleScreen from '../screens/ScheduleScreen';
import EmPowerScreen from '../screens/EmPowerScreen';

const Main = ({ route }) => {
  const Tab = createBottomTabNavigator();

  function phoneCall() {
    alert('phone call time');
  }

  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        headerShown: false,
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
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          title: 'Home',
          headerTintColor: '#fff',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }} />
      <Tab.Screen name="Programs" component={ProgramsScreen}
        options={{
          headerTintColor: '#fff',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="plus-minus-variant" color={color} size={26} />
          ),
        }} />
      <Tab.Screen name="Pricing" component={PricingScreen}
        options={{
          headerTintColor: '#fff',
          title: 'Pricing',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="sine-wave" color={color} size={26} />
          ),
        }} />
      <Tab.Screen name="Schedule" component={ScheduleScreen}
        options={{
          headerTintColor: '#fff',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="calendar-today" color={color} size={26} />
          ),
        }} />
    </Tab.Navigator>
  )
}

export default Main

const styles = StyleSheet.create({})