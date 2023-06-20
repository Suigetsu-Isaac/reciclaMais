import { View, Text, TextInput } from "react-native";
import React from "react";

interface inputProps {
  nome: string;
  content: string;
  setContent: Function;
}

import styles from "./styles";

export default function ItemCad(props: inputProps) {
  return (
    <View style={styles.container}>
      <Text>{props.nome}</Text>
      <TextInput style={styles.input} placeholder="0,00 KG" value={props.content}
      
      onChangeText={(e) => props.setContent(e.toString())}
      />
    </View>
  );
}
