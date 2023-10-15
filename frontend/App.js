import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './Home.js';
import DriverInfo from './DriverInfo';

const Tab = createBottomTabNavigator();

function Navbar() {
  return (
    <Tab.Navigator tabBarOptions={{
       activeTintColor: '#fff',
       inactiveTintColor: 'black',
       activeBackgroundColor: 'black',
       inactiveBackgroundColor: '#fff',
           style: {
                 backgroundColor: 'black',
                 paddingBottom: 3
           }
    }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="home" size={size} color={color} />;
          }
        }}
      />
      <Tab.Screen
        name="Add Ride"
        component={DriverInfo}
        options={{
          tabBarLabel: 'Add Ride',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="car-outline" size={size} color={color} />;
          }
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Navbar />
    </NavigationContainer>
  );
}