import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo à Loja Mundo Mobille 📱</Text>
      <Button title="Produtos" onPress={() => navigation.navigate('Produtos')} />
      <Button title="Lista de Produtos" onPress={() => navigation.navigate('Lista de Produtos')} />
      <Button title="CRUD" onPress={() => navigation.navigate('CRUD')} />
      <Button title="Dashboard" onPress={() => navigation.navigate('Dashboard')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    gap: 20,
    padding: 20,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 30,
    fontWeight: 'bold',
  },
});
