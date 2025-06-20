import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, ScrollView, StyleSheet, View } from 'react-native';
import Filmes from './Componentes/Filmes'



export default function App() {
  const listaFilmes = [
    {
      nome: "Homem Aranha 03",
      ano: 2020,
      diretor: "Jon Watts", 
      genero: "Aventura",
      imagem: 'https://i.pinimg.com/736x/5b/c7/73/5bc773ee94e99135372cc9c10d42d68a.jpg'
    },
    {
      nome: "X - Men",
      ano: 2020,
      diretor: "Josh Boone",
      genero: "Ficção Científica" ,
      imagem: 'https://i.pinimg.com/736x/a5/15/90/a5159084f86dba2c2b5716d74f30370a.jpg'
    },
    {
      nome: "Homem de Ferro",
      ano: 2013,
      diretor: "Shane Black",
      genero: "Heroi" ,
      imagem: 'https://i.pinimg.com/736x/61/23/a8/6123a8cb9698ee3334abc680aff2b50a.jpg'
    },
  ]


  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar style="auto" />

        {
          listaFilmes.map(
            filme => {
              return (
                <Filmes
                  nome={filme.nome}
                  ano={filme.ano}
                  diretor={filme.diretor}
                  genero={filme.genero}
                  imagem={filme.imagem}

                />
              )
            }
          )
        }



      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});