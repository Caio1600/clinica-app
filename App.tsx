import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from './src/pages/login';
import Register from './src/pages/cadastro';
import Agendamento from './src/pages/agendamento/agendamento';


const Stack = createStackNavigator();

export default function App() {
  return (  
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Agendamento" component={Agendamento} />
        </Stack.Navigator>
    </NavigationContainer>  
  );
}