import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { Button, Card } from "react-native-paper";
import api from "../services/api";

export default function ListaProdutosScreen({ route, navigation }) {
  const { categoria } = route.params;
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    api.get(`/products/category/${categoria}`).then((res) => setProdutos(res.data.products));
  }, []);

  return (
    <FlatList
      data={produtos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Card style={{ margin: 10 }}>
          <Card.Cover source={{ uri: item.thumbnail }} />
          <Card.Title title={item.title} subtitle={`R$ ${item.price}`} />
          <Card.Actions>
            <Button onPress={() => navigation.navigate("Produto", { id: item.id })}>
              Detalhes
            </Button>
          </Card.Actions>
        </Card>
      )}
    />
  );
}
