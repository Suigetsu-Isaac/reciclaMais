import React, { useEffect, useState } from "react";
import { TextInput, Text, View, Image, ImageProps } from "react-native";

import styles from "./styles";
interface ItemProps extends ImageProps {
  name: string;
}

export default function Item(props: ItemProps) {
  const [value, setValue] = useState("0");
  const [uri, setUri] = useState("");

  return (
    <View style={styles.itemView}>
      <Image source={props.source} />
      <Text style={styles.text}>{props.name}</Text>
      <TextInput
        style={styles.backgroudInput}
        placeholder="0,00 KG"
        onChangeText={(newValue) => setValue(newValue)}
      />
    </View>
  );
}
