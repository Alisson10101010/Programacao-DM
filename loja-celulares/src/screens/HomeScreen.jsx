import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { Button, Card, Text } from "react-native-paper";
import api from "../services/api";

export default function HomeScreen({ navigation }) {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    api.get("/products/categories").then((res) => setCategorias(res.data));
  }, []);

  return (
    <FlatList
      data={categorias}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <Card style={{ margin: 10 }}>
          <Card.Title title={item.toUpperCase()} />
          <Card.Actions>
            <Button onPress={() => navigation.navigate("Produtos", { categoria: item })}>
              Ver Produtos
            </Button>
          </Card.Actions>
        </Card>
      )}
    />
  );
}
