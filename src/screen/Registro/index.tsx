import { View, Text, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";
import React, { useRef, useState } from "react";
import styles from "./styles";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Registro() {

  const [selectedAccount, setSelectedAccount] = useState();
  const pickerRef = useRef();
  const navigation = useNavigation();

  function onPressBack(){
    navigation.navigate("Registro");
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.h1}>Cadastro</Text>
        <TextInput
          placeholder="Usuário"
          textContentType="name"
          keyboardType="phone-pad"
          style={styles.input}
        />
        <TextInput
          placeholder="Telefone"
          textContentType="telephoneNumber"
          keyboardType="phone-pad"
          style={styles.input}
        />
        <TextInput
          placeholder="Email"
          textContentType="emailAddress"
          keyboardType="email-address"
          style={styles.input}
        />
        <TextInput
          placeholder="Senha"
          textContentType="password"
          keyboardType="name-phone-pad"
          style={styles.input}
        />
        <Picker
          ref={pickerRef}
          style={styles.input}
          selectedValue={selectedAccount}
          mode="dropdown"
          onValueChange={(itemValue, itemIndex) => {
            setSelectedAccount(itemValue);
          }}
        >
          <Picker.Item label="Cliente" value="cliente" />
          <Picker.Item label="Adm" value="adm" />
        </Picker>

        <View style={styles.touchView}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Entrar</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.comeback} onPress={onPressBack}>
          <Text style={styles.comebackText}> {"<-"} Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
