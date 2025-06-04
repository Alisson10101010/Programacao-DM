import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { Card, Text } from "react-native-paper";
import api from "../services/api";

export default function ProdutoScreen({ route }) {
  const { id } = route.params;
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    api.get(`/products/${id}`).then((res) => setProduto(res.data));
  }, []);

  if (!produto) return <Text>Carregando...</Text>;

  return (
    <ScrollView>
      <Card style={{ margin: 10 }}>
        <Card.Cover source={{ uri: produto.thumbnail }} />
        <Card.Title title={produto.title} />
        <Card.Content>
          <Text>Descrição: {produto.description}</Text>
          <Text>Preço: R$ {produto.price}</Text>
          <Text>Marca: {produto.brand}</Text>
          <Text>Estoque: {produto.stock}</Text>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}
