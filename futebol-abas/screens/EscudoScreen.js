import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Card, Paragraph, Text, Title } from 'react-native-paper'

export default function EscudoScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>

        <Text variant='headlineSmall' style={{ fontWeight: 'bold' }}>CRVG</Text>

        <Card style={{ margin: 10 }}>
          <Card.Content>
            <Title>Vasco Da Gama</Title>
            <Paragraph>Vasco | Últimas notícias, resultados e próximos jogos</Paragraph>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://i.pinimg.com/736x/53/b8/5b/53b85bf4aa17de8464ab6dfb162ebf49.jpg' }} />
        </Card>

        <Card style={{ margin: 10 }}>
          <Card.Content>
            <Title>Força Jovem</Title>
            <Paragraph>A Força Jovem do Vasco (FJV) foi punida por brigas e ficou banida dos estádios por mais de uma década. Em 2022, após quase dez anos, a torcida foi liberada para voltar aos estádios. </Paragraph>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://i.pinimg.com/736x/d2/56/cd/d256cd1c1e936dd05af30ce6947f3161.jpg' }} />
        </Card>

        <Card style={{ margin: 10 }}>
          <Card.Content>
            <Title>Estadio</Title>
            <Paragraph>O Estádio de São Januário, inaugurado em 1927, foi construído com as lágrimas, o suor e o dinheiro dos vascaínos. Um verdadeiro templo do povo, construído para reafirmar a grandeza do Vasco e os ideais que o Clube defende desde a sua Fundação.</Paragraph>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://i.pinimg.com/736x/0b/14/dc/0b14dca2ee2a7ead00c20b60fd6b4ec2.jpg' }} />
        </Card>

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'fff',
    alignItems: 'center',
    paddingTop: 15
  }
})
