import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function CelularCard({ celular }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: celular.thumbnail }} style={styles.image} />
      <Text style={styles.nome}>{celular.title}</Text>
      <Text style={styles.preco}>Preço: R$ {celular.price}</Text>
      <Text style={styles.marca}>Marca: {celular.brand}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 12,
    marginVertical: 8,
    borderRadius: 8,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 120,
    resizeMode: 'contain',
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  preco: {
    fontSize: 14,
    marginTop: 4,
  },
  marca: {
    fontSize: 12,
    color: '#666',
  },
});
