import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function CrudCelularesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button title="Cadastrar Celular" onPress={() => navigation.navigate('Formulário')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});
