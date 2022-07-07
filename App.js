import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Calendar, CalendarList, Agenda, LocaleConfig, calendarTheme } from 'react-native-calendars';
import HomeScreen from './screens/HomeScreen';
import Calendars from './screens/CalendarScreen';
import MyPedometer from './components/MyPedometer';
import MyToDoList from './components/MyToDoList';

const Stack = createNativeStackNavigator();

export default function App() {
 
  const vacation = { key: 'vacation', color: 'red', selectedDotColor: 'blue' };
  const massage = { key: 'massage', color: 'blue', selectedDotColor: 'blue' };
  const workout = { key: 'workout', color: 'green' };

  LocaleConfig.locales['fr'] = {
    monthNames: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ],
    monthNamesShort: ['Jan.', 'Feb.', 'Mar', 'Apr', 'May', 'June', 'Jul.', 'Aug', 'Sep.', 'Oct.', 'Nov.', 'Dec.'],
    dayNames: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    dayNamesShort: ['Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.', 'Sun.'],
    today: "Aujourd'hui"
  };
  LocaleConfig.defaultLocale = 'fr';

  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={Calendars} />
          <Stack.Screen name="MyPedometer" component={MyPedometer} />
          <Stack.Screen name="MyToDoList" component={MyToDoList} />
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
