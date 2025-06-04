import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert } from 'react-native';
import api from '../services/api';

export default function FormCelularScreen() {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [imagem, setImagem] = useState('');

  const salvarCelular = async () => {
    if (nome === '' || preco === '' || imagem === '') {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    try {
      const response = await api.post('/products/add', {
        title: nome,
        price: parseFloat(preco),
        thumbnail: imagem,
      });

      Alert.alert('Sucesso', `Celular salvo (Fake)\nID: ${response.data.id}`);
      setNome('');
      setPreco('');
      setImagem('');
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível salvar o celular');
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Celular</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do Celular"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Preço"
        value={preco}
        onChangeText={setPreco}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="URL da Imagem"
        value={imagem}
        onChangeText={setImagem}
      />

      <Button title="Salvar" onPress={salvarCelular} />
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
    fontSize: 22,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
    padding: 10,
  },
});
