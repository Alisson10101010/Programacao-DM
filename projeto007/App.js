// imports 

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

// Componente principal 
//Ele deve retornar e sera renderizado na tela ( Template feito com JSX)
export default function App() {
// Logica do seu componente
const nome = "Alisson"


  //Retorno com JSX
  return (
    <View style={styles.container}>
      {/* Comentario dentro do template JSX */}

      {/*Codigo Javascript*/}
      <></>

      <Text>BRAZZZIL</Text>
      <StatusBar style="auto" />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
