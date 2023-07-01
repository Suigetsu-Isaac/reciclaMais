import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";

interface inputProps {
  nome: string;
  value: string,
  setValue: (text: string) => void

}



import styles from "./styles";

export default function ItemCad(props: inputProps) {




  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.nome}</Text>
      <TextInput style={styles.input} placeholder="0,00 KG"
      onChangeText={(e) => props.setValue( e )} value={props.value}
      />
      
      
      
    </View>
  );
}
