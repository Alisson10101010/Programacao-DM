import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

export default function CrudCelularesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CRUD de Celulares</Text>
      <Button title="Adicionar Celular (Fake)" onPress={() => navigation.navigate('Formulário')} />
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
