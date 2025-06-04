import React from "react";
import { Card, Button, Text } from "react-native-paper";

export default function CelularCard({ celular, editar, excluir }) {
  return (
    <Card style={{ margin: 10 }}>
      <Card.Cover source={{ uri: celular.thumbnail }} />
      <Card.Title
        title={celular.title || celular.nome}
        subtitle={`R$ ${celular.price || celular.preco}`}
      />
      <Card.Content>
        <Text>Marca: {celular.brand || celular.marca}</Text>
        <Text>Descrição: {celular.description || celular.descricao}</Text>
      </Card.Content>
      <Card.Actions>
        <Button onPress={editar}>Editar</Button>
        <Button onPress={excluir}>Excluir</Button>
      </Card.Actions>
    </Card>
  );
}
