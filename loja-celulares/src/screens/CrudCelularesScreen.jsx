import React, { useEffect, useState } from "react";
import { FlatList, Alert, View, ActivityIndicator } from "react-native";
import { Button, Text, Divider } from "react-native-paper";
import { useIsFocused } from "@react-navigation/native";
import CelularCard from "../components/CelularCard";
import api from "../services/api";

export default function CrudCelularesScreen({ navigation }) {
  const [celulares, setCelulares] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      carregarDados();
    }
  }, [isFocused]);

  const carregarDados = async () => {
    try {
      setCarregando(true);
      const response = await api.get("/products/category/smartphones");
      setCelulares(response.data.products);
    } catch (error) {
      console.log("Erro ao carregar dados", error);
      Alert.alert("Erro", "Não foi possível carregar os dados.");
    } finally {
      setCarregando(false);
    }
  };

  const remover = (id) => {
    Alert.alert("Atenção", "Deseja excluir este celular? (simulado, pois a API não deleta)", [
      { text: "Cancelar" },
      {
        text: "Sim",
        onPress: async () => {
          const novos = celulares.filter((item) => item.id !== id);
          setCelulares(novos);
          Alert.alert("Item removido localmente.");
        },
      },
    ]);
  };

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Button
        icon="plus"
        mode="contained"
        onPress={() => navigation.navigate("FormCelular")}
        style={{ marginBottom: 10 }}
      >
        Novo Celular (local)
      </Button>

      {carregando ? (
        <ActivityIndicator size="large" />
      ) : celulares.length === 0 ? (
        <Text>Nenhum celular encontrado.</Text>
      ) : (
        <FlatList
          data={celulares}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => <Divider />}
          renderItem={({ item }) => (
            <CelularCard
              celular={item}
              editar={() => navigation.navigate("FormCelular", { celular: item })}
              excluir={() => remover(item.id)}
            />
          )}
        />
      )}
    </View>
  );
}
