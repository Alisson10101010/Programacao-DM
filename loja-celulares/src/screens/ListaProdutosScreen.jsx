import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, StyleSheet, Image } from 'react-native';
import api from '../services/api';

export default function ListaProdutosScreen() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    api.get('/products/category/smartphones')
      .then(res => setProdutos(res.data.products))
      .catch(err => console.log(err));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={produtos}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.thumbnail }} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.marca}>Marca: {item.brand}</Text>
              <Text style={styles.preco}>Preço: R$ {item.price}</Text>
              <Text style={styles.estoque}>Estoque: {item.stock}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f4f4f4',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 12,
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 2,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    backgroundColor: '#eee',
  },
  info: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  marca: {
    color: '#666',
    marginTop: 4,
  },
  preco: {
    marginTop: 6,
    fontSize: 15,
    color: '#2a9d8f',
  },
  estoque: {
    fontSize: 13,
    color: '#999',
  },
});
