import React from 'react';
// import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Text, StyleSheet, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Main from './components/Main';
import QuizScreen from './screens/QuizScreen';
// import HomeScreen from './screens/HomeScreen';
// import ProgramsScreen from './screens/ProgramsScreen';
// import PricingScreen from './screens/PricingScreen';
// import ScheduleScreen from './screens/ScheduleScreen';

// import ModalComponent from './components/Modal';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import EmPowerScreen from './screens/EmPowerScreen';
import PersonalTrainingScreen from './screens/PersonalTrainingScreen';

const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();


// function QuizScreen({ navigation }) {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Main"
//         component={Main}
//          />
//     </Stack.Navigator>
//   )
// }

function phoneCall() {
  const url = 'tel://6128080252';
  Linking.openURL(url);
}


export default function App() {
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
        <Stack.Screen name='Main' component={Main}
        options={({ route }) => ({ title: route.name })}
        />
        <Stack.Screen name='QuizScreen' component={QuizScreen} />
        <Stack.Screen name='EmPowerScreen' component={EmPowerScreen} />
        <Stack.Screen name='PersonalTrainingScreen' component={PersonalTrainingScreen} />
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
