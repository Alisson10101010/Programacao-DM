import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const dadosVendas = [
  { id: 1, nome: 'iPhone 14', data: '2025-06-03', quantidade: 2, valor: 8000 },
  { id: 2, nome: 'Samsung A54', data: '2025-06-03', quantidade: 3, valor: 4500 },
  { id: 3, nome: 'Xiaomi Note 11', data: '2025-06-04', quantidade: 1, valor: 1500 },
  { id: 4, nome: 'Motorola G73', data: '2025-05-28', quantidade: 2, valor: 2000 },
  { id: 5, nome: 'iPhone 14', data: '2025-06-05', quantidade: 1, valor: 4000 },
];

const diasSemana = ['Todos', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];
const meses = ['Todos', 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'];
const anos = ['Todos', '2024', '2025'];

export default function DashboardScreen() {
  const [diaSelecionado, setDiaSelecionado] = useState('Todos');
  const [mesSelecionado, setMesSelecionado] = useState('Todos');
  const [anoSelecionado, setAnoSelecionado] = useState('2025');

  const filtrarVendas = () => {
    return dadosVendas.filter((venda) => {
      const data = new Date(venda.data);
      const diaSemana = diasSemana[data.getDay() + 1]; // getDay: 0=Domingo
      const mes = meses[data.getMonth() + 1];
      const ano = data.getFullYear().toString();

      const condDia = diaSelecionado === 'Todos' || diaSelecionado === diaSemana;
      const condMes = mesSelecionado === 'Todos' || mesSelecionado === mes;
      const condAno = anoSelecionado === 'Todos' || anoSelecionado === ano;

      return condDia && condMes && condAno;
    });
  };

  const vendasFiltradas = filtrarVendas();
  const totalVendas = vendasFiltradas.reduce((total, item) => total + item.valor, 0);
  const quantidadeProdutos = vendasFiltradas.reduce((total, item) => total + item.quantidade, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>📊 Dashboard de Vendas</Text>

      <View style={styles.filtros}>
        <View style={styles.pickerContainer}>
          <Text style={styles.label}>Dia:</Text>
          <Picker
            selectedValue={diaSelecionado}
            style={styles.picker}
            onValueChange={(value) => setDiaSelecionado(value)}
          >
            {diasSemana.map((dia) => (
              <Picker.Item key={dia} label={dia} value={dia} />
            ))}
          </Picker>
        </View>

        <View style={styles.pickerContainer}>
          <Text style={styles.label}>Mês:</Text>
          <Picker
            selectedValue={mesSelecionado}
            style={styles.picker}
            onValueChange={(value) => setMesSelecionado(value)}
          >
            {meses.map((mes) => (
              <Picker.Item key={mes} label={mes} value={mes} />
            ))}
          </Picker>
        </View>

        <View style={styles.pickerContainer}>
          <Text style={styles.label}>Ano:</Text>
          <Picker
            selectedValue={anoSelecionado}
            style={styles.picker}
            onValueChange={(value) => setAnoSelecionado(value)}
          >
            {anos.map((ano) => (
              <Picker.Item key={ano} label={ano} value={ano} />
            ))}
          </Picker>
        </View>
      </View>

      <View style={styles.cardResumo}>
        <Text style={styles.textResumo}>💰 Total de Vendas: R$ {totalVendas}</Text>
        <Text style={styles.textResumo}>📱 Celulares vendidos: {quantidadeProdutos}</Text>
      </View>

      <Text style={styles.subtitulo}>📱 Vendas encontradas:</Text>
      <FlatList
        data={vendasFiltradas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nomeCelular}>{item.nome}</Text>
            <Text>Quantidade: {item.quantidade}</Text>
            <Text>Valor: R$ {item.valor}</Text>
            <Text>Data: {item.data}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f4ff',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0055cc',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitulo: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#003399',
  },
  filtros: {
    flexDirection: 'column',
    gap: 12,
  },
  pickerContainer: {
    backgroundColor: '#e0eaff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  label: {
    color: '#003399',
    fontWeight: '600',
  },
  picker: {
    height: 40,
    color: '#003399',
  },
  cardResumo: {
    backgroundColor: '#cce0ff',
    padding: 16,
    borderRadius: 10,
    marginTop: 16,
  },
  textResumo: {
    fontSize: 16,
    fontWeight: '600',
    color: '#002266',
    marginBottom: 5,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
  },
  nomeCelular: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
