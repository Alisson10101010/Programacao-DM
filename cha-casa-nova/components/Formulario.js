import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function Formulario() {
  const [nome, setNome] = useState('');

  const confirmarPresenca = () => {
    if (nome.trim() === '') {
      Alert.alert('Erro', 'Digite seu nome antes de confirmar!');
    } else {
      Alert.alert('Presença Confirmada', `Obrigado, ${nome}!`);
      setNome('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Confirme sua presença:</Text>
      <TextInput
        style={styles.input}
        placeholder="Seu nome"
        value={nome}
        onChangeText={setNome}
      />
      <Button title="Confirmar" onPress={confirmarPresenca} color="#008080" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderColor: '#aaa',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 6,
  },
});
