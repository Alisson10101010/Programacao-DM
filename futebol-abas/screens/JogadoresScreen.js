import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'

const jogadores = [
  {
    nome: "Philippe Coutinho",
    numero: 11,
    imagem: "https://i.pinimg.com/736x/92/91/d0/9291d06b6dc9962333097ccc1279d869.jpg"
  },
  {
    nome: "Pablo Vegetti",
    numero: 99,
    imagem: "https://i.pinimg.com/474x/9a/90/aa/9a90aa048784382708a2bf24786a703b.jpg"
  },
  {
    nome: "Dimitri Payet",
    numero: 10,
    imagem: "https://i.pinimg.com/736x/58/b7/dc/58b7dc09d3aa885c1280d5fff926881a.jpg"
  }
]

export default function JogadoresScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={jogadores}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 12 }}>
            <Text style={styles.title}>{item.nome} - #{item.numero}</Text>
            <Image source={{ uri: item.imagem }} style={styles.fotoFininha} />
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4
  },
  fotoFininha: {
    width: '100%',
    height: 350, // altura pequena = imagem fininha
    borderRadius: 8
  }
})
