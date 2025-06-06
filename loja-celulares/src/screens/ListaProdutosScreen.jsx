import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import api from '../services/api';

export default function ListaProdutosScreen() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    api.get('/products/category/smartphones')  // só smartphones aqui
      .then(res => setProdutos(res.data.products))
      .catch(err => console.log(err));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={produtos}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>Preço: R$ {item.price}</Text>
            <Text>Marca: {item.brand}</Text>
            <Text>Estoque: {item.stock}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10 },
  item: {
    marginBottom: 12,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
  },
  title: { fontWeight: 'bold', fontSize: 16 },
});
