import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, ScrollView, Text, Alert } from 'react-native';
import api from '../services/api';

export default function FormCelularScreen({ route, navigation }) {
  const produtoEditar = route.params?.produto;

  const [titulo, setTitulo] = useState('');
  const [preco, setPreco] = useState('');
  const [imagem, setImagem] = useState('');
  const [marca, setMarca] = useState('');
  const [descricao, setDescricao] = useState('');
  const [estoque, setEstoque] = useState('');

  useEffect(() => {
    if (produtoEditar) {
      setTitulo(produtoEditar.title || '');
      setPreco(produtoEditar.price?.toString() || '');
      setImagem(produtoEditar.thumbnail || '');
      setMarca(produtoEditar.brand || '');
      setDescricao(produtoEditar.description || '');
      setEstoque(produtoEditar.stock?.toString() || '');
    }
  }, [produtoEditar]);

  const salvar = async () => {
    if (!titulo || !preco) {
      return Alert.alert('Preencha pelo menos nome e preço!');
    }

    const novoProduto = {
      title: titulo,
      price: parseFloat(preco),
      thumbnail: imagem,
      brand: marca,
      description: descricao,
      stock: parseInt(estoque),
    };

    try {
      if (produtoEditar) {
        await api.put(`/products/${produtoEditar.id}`, novoProduto);
        Alert.alert('Produto editado com sucesso!');
      } else {
        await api.post('/products/add', novoProduto);
        Alert.alert('Produto criado com sucesso!');
      }
      navigation.navigate('Lista de Produtos');
    } catch (error) {
      console.log(error);
      Alert.alert('Erro ao salvar o produto.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{produtoEditar ? 'Editar Celular' : 'Novo Celular'}</Text>

      <TextInput style={styles.input} placeholder="Nome do celular" value={titulo} onChangeText={setTitulo} />
      <TextInput style={styles.input} placeholder="Preço" keyboardType="numeric" value={preco} onChangeText={setPreco} />
      <TextInput style={styles.input} placeholder="URL da imagem" value={imagem} onChangeText={setImagem} />
      <TextInput style={styles.input} placeholder="Marca" value={marca} onChangeText={setMarca} />
      <TextInput style={styles.input} placeholder="Descrição" value={descricao} onChangeText={setDescricao} multiline />
      <TextInput style={styles.input} placeholder="Estoque" keyboardType="numeric" value={estoque} onChangeText={setEstoque} />

      <Button title="Salvar" onPress={salvar} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 15,
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
});
