import React from 'react';
// import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Text, StyleSheet } from 'react-native';
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
  alert('phone call time');
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={({ route, navigation }) => ({
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
        <Stack.Screen name='Main' component={Main} />
        <Stack.Screen name='QuizScreen' component={QuizScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    // <NavigationContainer>
    
    //   <Tab.Navigator
    //     screenOptions={({ route, navigation }) => ({
    //       headerLeft: () => (
    //         <TouchableOpacity
    //           onPress={phoneCall}
    //         >
    //           <Text>(612) 808-0252</Text>
    //         </TouchableOpacity>
    //       ),
    //       headerRight: () => (
    //         <TouchableOpacity
    //           onPress={() => alert('maps goes here')}
    //         >
    //           <Text>1915 E 22nd St</Text>
    //         </TouchableOpacity>
    //       ),
    //       headerStyle: {
    //         backgroundColor: '#66A0C5',
    //       },
    //       tabBarStyle: {
    //         height: 70,
    //         paddingHorizontal: 5,
    //         paddingTop: 10,
    //         paddingBottom: 15,
    //         backgroundColor: '#66A0C5',
    //         position: 'absolute',
    //         borderTopWidth: 0,
    //       },
    //       tabBarActiveTintColor: '#ff854d',
    //       tabBarInactiveTintColor: '#fff'
    //     })}
    //   >
    //     <Tab.Screen name="Home" component={HomeScreen}            //Home Screen
    //       options={{
    //         headerTintColor: '#fff',
    //         tabBarIcon: ({ color, size }) => (
    //           <MaterialCommunityIcons name="home" color={color} size={26} />
    //         ),
    //       }} />
    //     <Tab.Screen name="Programs" component={ProgramsScreen}            //Home Screen
    //       options={{
    //         headerTintColor: '#fff',
    //         tabBarIcon: ({ color, size }) => (
    //           <MaterialCommunityIcons name="plus-minus-variant" color={color} size={26} />
    //         ),
    //       }} />
    //     <Tab.Screen name="Pricing" component={PricingScreen}            //Home Screen
    //       options={{
    //         headerTintColor: '#fff',
    //         title: 'Pricing',
    //         tabBarIcon: ({ color, size }) => (
    //           <MaterialCommunityIcons name="sine-wave" color={color} size={26} />
    //         ),
    //       }} />
    //     <Tab.Screen name="ScheduleScreen" component={ScheduleScreen}            //Home Screen
    //       options={{
    //         headerTintColor: '#fff',
    //         tabBarIcon: ({ color, size }) => (
    //           <MaterialCommunityIcons name="calendar-today" color={color} size={26} />
    //         ),
    //       }} />
    //   </Tab.Navigator>
    // </NavigationContainer>
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
