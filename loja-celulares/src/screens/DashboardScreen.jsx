import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

export default function DashboardScreen() {
  const [filtro, setFiltro] = useState('semana');
  const [categoria, setCategoria] = useState('todos');

  const dados = {
    semana: {
      vendas: 15,
      lancamentos: [
        { id: '1', nome: 'iPhone 15 Pro Max', categoria: 'Apple', status: 'Lançamento' },
        { id: '2', nome: 'Samsung Galaxy S24 Ultra', categoria: 'Samsung', status: 'Em Estoque' },
      ],
    },
    mes: {
      vendas: 55,
      lancamentos: [
        { id: '3', nome: 'Xiaomi 14 Ultra', categoria: 'Xiaomi', status: 'Esgotado' },
        { id: '4', nome: 'Motorola Edge 50 Pro', categoria: 'Motorola', status: 'Em Estoque' },
        { id: '5', nome: 'OnePlus 12R', categoria: 'OnePlus', status: 'Lançamento' },
      ],
    },
  };

  const dadosFiltrados = filtro === 'semana' ? dados.semana : dados.mes;

  const lancamentosFiltrados = categoria === 'todos'
    ? dadosFiltrados.lancamentos
    : dadosFiltrados.lancamentos.filter(item => item.categoria === categoria);

  const categoriasDisponiveis = ['todos', 'Apple', 'Samsung', 'Xiaomi', 'Motorola', 'OnePlus'];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>📊 Dashboard Interativo</Text>

      <View style={styles.botoes}>
        <Button
          title="Semana"
          onPress={() => setFiltro('semana')}
          color={filtro === 'semana' ? 'blue' : 'gray'}
        />
        <Button
          title="Mês"
          onPress={() => setFiltro('mes')}
          color={filtro === 'mes' ? 'blue' : 'gray'}
        />
      </View>

      <Text style={styles.info}>
        Total de vendas na {filtro}: <Text style={styles.numero}>{dadosFiltrados.vendas}</Text>
      </Text>

      <Text style={styles.subtitulo}>🗂️ Filtrar por categoria:</Text>
      <FlatList
        data={categoriasDisponiveis}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.categoria,
              categoria === item && styles.categoriaSelecionada,
            ]}
            onPress={() => setCategoria(item)}
          >
            <Text
              style={[
                styles.categoriaTexto,
                categoria === item && styles.categoriaTextoSelecionado,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        )}
      />

      <Text style={styles.subtitulo}>🚀 Lançamentos:</Text>
      {lancamentosFiltrados.length > 0 ? (
        <FlatList
          data={lancamentosFiltrados}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.status}>📦 {item.status}</Text>
            </View>
          )}
        />
      ) : (
        <Text style={styles.semDados}>Nenhum lançamento nessa categoria.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  info: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  numero: {
    fontWeight: 'bold',
    color: 'green',
  },
  subtitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  categoria: {
    backgroundColor: '#f1f1f1',
    padding: 10,
    borderRadius: 20,
    marginRight: 10,
  },
  categoriaSelecionada: {
    backgroundColor: '#007bff',
  },
  categoriaTexto: {
    color: '#000',
    fontWeight: '600',
  },
  categoriaTextoSelecionado: {
    color: '#fff',
  },
  item: {
    backgroundColor: '#f9f9f9',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  status: {
    fontSize: 14,
    color: 'gray',
  },
  semDados: {
    textAlign: 'center',
    marginTop: 20,
    fontStyle: 'italic',
    color: 'gray',
  },
});
