import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import api from '../services/api';
import CelularCard from '../components/CelularCard';

export default function ProdutoScreen() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    api.get('/products/category/smartphones').then((res) => {
      setProdutos(res.data.products);
    });
  }, []);

  return (
    <View>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CelularCard celular={item} />}
      />
    </View>
  );
}
