import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'

const titulos = [
  {
    nome: "Copa Libertadores da América",
    imagem: "https://i.pinimg.com/736x/d8/97/c4/d897c4bb71433d8722323930cad2db3a.jpg"
  },
  {
    nome: "Campeonato Brasileiro",
    imagem: "https://http2.mlstatic.com/D_NQ_NP_609382-MLB43220950156_082020-O-poster-do-vasco-campeo-brasileiro-2000.webp"
  },
  {
    nome: "Copa do Brasil",
    imagem: "https://i.pinimg.com/736x/ec/82/cf/ec82cfa7e9995f4524ed781364955984.jpg"
  }
]

export default function TitulosScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={titulos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 20 }}>
            <Text style={styles.title}>{item.nome}</Text>
            <Image source={{ uri: item.imagem }} style={styles.imgFininha} />
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
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8
  },
  imgFininha: {
    width: '100%',
    height: 350,
    borderRadius: 10
  }
})
