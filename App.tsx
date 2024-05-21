import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/views/HomeScreen';
import DetailScreen from './src/views/DetailScreen';
import COLORS from './src/consts/color';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar  barStyle='dark-content' backgroundColor={COLORS.light}/>
      <Stack.Navigator screenOptions={{header: () => null}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
