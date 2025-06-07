import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

// Lista de 20 celulares
const celulares = [
  { id: 1, nome: 'iPhone 13', marca: 'Apple' },
  { id: 2, nome: 'Galaxy S22', marca: 'Samsung' },
  { id: 3, nome: 'Xiaomi Redmi Note 12', marca: 'Xiaomi' },
  { id: 4, nome: 'Moto G100', marca: 'Motorola' },
  { id: 5, nome: 'Galaxy A53', marca: 'Samsung' },
  { id: 6, nome: 'iPhone 14', marca: 'Apple' },
  { id: 7, nome: 'Realme 9i', marca: 'Realme' },
  { id: 8, nome: 'OnePlus Nord', marca: 'OnePlus' },
  { id: 9, nome: 'Pixel 6', marca: 'Google' },
  { id: 10, nome: 'POCO X4 Pro', marca: 'Xiaomi' },
  { id: 11, nome: 'iPhone SE', marca: 'Apple' },
  { id: 12, nome: 'Galaxy Z Flip', marca: 'Samsung' },
  { id: 13, nome: 'Moto G200', marca: 'Motorola' },
  { id: 14, nome: 'Galaxy M53', marca: 'Samsung' },
  { id: 15, nome: 'Realme GT', marca: 'Realme' },
  { id: 16, nome: 'Xiaomi 12 Lite', marca: 'Xiaomi' },
  { id: 17, nome: 'iPhone 12 Mini', marca: 'Apple' },
  { id: 18, nome: 'Pixel 7', marca: 'Google' },
  { id: 19, nome: 'Zenfone 9', marca: 'Asus' },
  { id: 20, nome: 'Nokia XR20', marca: 'Nokia' },
];

// Vendas fictícias
const vendas = Array.from({ length: 100 }, (_, i) => {
  const dias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'];
  const anos = ['2023', '2024', '2025'];

  return {
    id: i + 1,
    celular: celulares[Math.floor(Math.random() * celulares.length)],
    dia: dias[Math.floor(Math.random() * dias.length)],
    mes: meses[Math.floor(Math.random() * meses.length)],
    ano: anos[Math.floor(Math.random() * anos.length)],
  };
});

export default function DashboardScreen() {
  const [filtroDia, setFiltroDia] = useState('');
  const [filtroMes, setFiltroMes] = useState('');
  const [filtroAno, setFiltroAno] = useState('');

  const vendasFiltradas = vendas.filter(v =>
    (filtroDia === '' || v.dia === filtroDia) &&
    (filtroMes === '' || v.mes === filtroMes) &&
    (filtroAno === '' || v.ano === filtroAno)
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>📊 Power BI de Vendas</Text>

      <View style={styles.filtros}>
        <Picker
          selectedValue={filtroDia}
          style={styles.picker}
          onValueChange={(itemValue) => setFiltroDia(itemValue)}
        >
          <Picker.Item label="Dia da Semana" value="" />
          {['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'].map(d => (
            <Picker.Item key={d} label={d} value={d} />
          ))}
        </Picker>

        <Picker
          selectedValue={filtroMes}
          style={styles.picker}
          onValueChange={(itemValue) => setFiltroMes(itemValue)}
        >
          <Picker.Item label="Mês" value="" />
          {['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'].map(m => (
            <Picker.Item key={m} label={m} value={m} />
          ))}
        </Picker>

        <Picker
          selectedValue={filtroAno}
          style={styles.picker}
          onValueChange={(itemValue) => setFiltroAno(itemValue)}
        >
          <Picker.Item label="Ano" value="" />
          {['2023', '2024', '2025'].map(a => (
            <Picker.Item key={a} label={a} value={a} />
          ))}
        </Picker>
      </View>

      <Text style={styles.total}>📱 Celulares vendidos: {vendasFiltradas.length}</Text>

      {vendasFiltradas.map((venda, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.nome}>{venda.celular.nome}</Text>
          <Text style={styles.detalhe}>Marca: {venda.celular.marca}</Text>
          <Text style={styles.detalhe}>Data: {venda.dia}, {venda.mes} de {venda.ano}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 15, backgroundColor: '#f4f8ff' },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0077cc',
    textAlign: 'center',
    marginBottom: 20,
  },
  filtros: {
    marginBottom: 20,
  },
  picker: {
    backgroundColor: '#fff',
    marginVertical: 8,
    borderRadius: 8,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1d3557',
    marginBottom: 15,
  },
  card: {
    backgroundColor: '#e1f0ff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  nome: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#023e8a',
  },
  detalhe: {
    fontSize: 14,
    color: '#555',
  },
});
