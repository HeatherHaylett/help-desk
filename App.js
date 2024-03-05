import React from 'react';
import AdminScreen from './client/Admin';
import CustomerScreen from './client/Customer';
import TicketScreen from './client/Ticket';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Home = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Customer" component={CustomerScreen} />
      <Tab.Screen name="Admin" component={AdminScreen} />
    </Tab.Navigator>
  );
}

const App = () =>{
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Ticket"
          component={TicketScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
