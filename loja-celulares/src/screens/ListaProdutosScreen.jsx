import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import CelularCard from '../components/CelularCard';
import api from '../services/api';

export default function ListaProdutosScreen() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    carregarProdutos();
  }, []);

  const carregarProdutos = async () => {
    const response = await api.get('/products');
    setProdutos(response.data.products);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CelularCard celular={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
