import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export function Navbar() {
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
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="home" size={size} color={color} />;
          }
        }}
      />
      <Tab.Screen
        name="Add Ride"
        component={SettingsScreen}
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

// export default function App() {
//   return (
//     <NavigationContainer>
//       <MyTabs />
//     </NavigationContainer>
//   );
// }