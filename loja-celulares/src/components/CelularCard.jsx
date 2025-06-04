import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function CelularCard({ celular }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: celular.thumbnail }} style={styles.imagem} />
      <View style={{ flex: 1 }}>
        <Text style={styles.nome}>{celular.title}</Text>
        <Text style={styles.preco}>${celular.price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  imagem: {
    width: 70,
    height: 70,
    marginRight: 10,
    borderRadius: 8,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  preco: {
    fontSize: 16,
    color: 'green',
  },
});
