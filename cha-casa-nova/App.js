import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ListaPresentes from './components/ListaPresentes';
import Formulario from './components/Formulario';

export default function App() {
  const [presenteados, setPresenteados] = useState([]);

  const confirmarPresente = (item) => {
    setPresenteados([...presenteados, item]);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>🎉 Chá de Casa Nova 🎉</Text>
      <Formulario />
      <ListaPresentes
        presenteados={presenteados}
        confirmarPresente={confirmarPresente}
      />
      <Text style={styles.credito}>Desenvolvido por Alisson Santos</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  credito: {
    fontSize: 12,
    color: 'gray',
    marginTop: 40,
  },
});
