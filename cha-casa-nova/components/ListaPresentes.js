import React from 'react';
import { View, Text, Image, StyleSheet, Button, FlatList } from 'react-native';

const lista = [
  { id: '1', nome: 'Travesseiro', imagem: require('../assets/travesseiro.jpg') },
  { id: '2', nome: 'Liquidificador', imagem: require('../assets/liquidificador.jpg') },
  { id: '3', nome: 'Conjunto de Pratos', imagem: require('../assets/pratos.jpg') },
  { id: '4', nome: 'Ventilador', imagem: require('../assets/ventilador.jpg') },
  { id: '5', nome: 'Colcha de Cama', imagem: require('../assets/colcha.jpg') },
];

export default function ListaPresentes({ presenteados, confirmarPresente }) {
  const renderItem = ({ item }) => {
    const jaFoi = presenteados.includes(item.id);
    return (
      <View style={styles.item}>
        <Image source={item.imagem} style={styles.imagem} />
        <Text style={styles.nome}>{item.nome}</Text>
        {jaFoi ? (
          <Text style={styles.presenteado}>🎁 Já presenteado!</Text>
        ) : (
          <Button
            title="Presentear"
            onPress={() => confirmarPresente(item.id)}
            color="#006400"
          />
        )}
      </View>
    );
  };

  return (
    <FlatList
      data={lista}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.lista}
    />
  );
}

const styles = StyleSheet.create({
  lista: {
    gap: 20,
    paddingBottom: 40,
  },
  item: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 2,
  },
  imagem: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  nome: {
    fontSize: 18,
    marginBottom: 10,
  },
  presenteado: {
    color: 'green',
    fontWeight: 'bold',
  },
});
