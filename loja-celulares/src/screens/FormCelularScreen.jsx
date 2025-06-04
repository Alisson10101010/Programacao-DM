import React, { useEffect, useState } from "react";
import { ScrollView, Alert, View } from "react-native";
import { Button, TextInput, Text } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function FormCelularScreen({ navigation, route }) {
  const celularEdit = route.params?.celular;

  const [nome, setNome] = useState("");
  const [marca, setMarca] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");
  const [imagem, setImagem] = useState("");

  useEffect(() => {
    if (celularEdit) {
      setNome(celularEdit.title || celularEdit.nome);
      setMarca(celularEdit.brand || celularEdit.marca);
      setDescricao(celularEdit.description || celularEdit.descricao);
      setPreco(celularEdit.price?.toString() || celularEdit.preco?.toString());
      setImagem(celularEdit.thumbnail || "");
    }
  }, []);

  const salvar = async () => {
    if (!nome || !marca || !descricao || !preco) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

    const dados = await AsyncStorage.getItem("@celulares");
    const celulares = dados ? JSON.parse(dados) : [];

    if (celularEdit && celularEdit.id) {
      const novos = celulares.map((item) =>
        item.id === celularEdit.id
          ? { ...item, nome, marca, descricao, preco, thumbnail: imagem }
          : item
      );
      await AsyncStorage.setItem("@celulares", JSON.stringify(novos));
    } else {
      const novo = {
        id: Date.now(),
        nome,
        marca,
        descricao,
        preco,
        thumbnail: imagem || "https://cdn-icons-png.flaticon.com/512/60/60577.png",
      };
      await AsyncStorage.setItem("@celulares", JSON.stringify([...celulares, novo]));
    }

    navigation.goBack();
  };

  return (
    <ScrollView style={{ padding: 10 }}>
      <TextInput
        label="Nome"
        value={nome}
        onChangeText={setNome}
        style={{ marginBottom: 10 }}
      />
      <TextInput
        label="Marca"
        value={marca}
        onChangeText={setMarca}
        style={{ marginBottom: 10 }}
      />
      <TextInput
        label="Descrição"
        value={descricao}
        onChangeText={setDescricao}
        multiline
        style={{ marginBottom: 10 }}
      />
      <TextInput
        label="Preço"
        value={preco}
        onChangeText={setPreco}
        keyboardType="numeric"
        style={{ marginBottom: 10 }}
      />
      <TextInput
        label="URL da Imagem"
        value={imagem}
        onChangeText={setImagem}
        style={{ marginBottom: 10 }}
      />
      <Button mode="contained" onPress={salvar}>
        Salvar
      </Button>
    </ScrollView>
  );
}
