import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import ProdutoScreen from './src/screens/ProdutoScreen';
import ListaProdutosScreen from './src/screens/ListaProdutosScreen';
import CrudCelularesScreen from './src/screens/CrudCelularesScreen';
import FormCelularScreen from './src/screens/FormCelularScreen';

import DashboardScreen from './src/screens/DashboardScreen';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Mundo Mobille" component={HomeScreen} />
        <Stack.Screen name="Produtos" component={ProdutoScreen} />
        <Stack.Screen name="Lista de Produtos" component={ListaProdutosScreen} />
        <Stack.Screen name="CRUD" component={CrudCelularesScreen} />
        <Stack.Screen name="Formulário" component={FormCelularScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
