import { View, Text, TextInput } from "react-native";

import { Picker } from "@react-native-picker/picker";
import React, { useRef, useState } from "react";
import styles from "./styles";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { user_table } from "../../../fakeDB/user_table";
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface RegistrarDados{
  id: number,
  username: string,
  phoneNumber: string,
  email:string,
  password:string
  type: 'adm' | 'client'
}


export default function Registro() {

  const [selectedAccount, setSelectedAccount] = useState('client');
  const [userName, SetUserName] = useState('');
  const [phoneNumber, SetPhoneNumber] = useState('');
  const [email, SetEmail] = useState('');
  const [password, setPassword] = useState('');
  const pickerRef = useRef();
  const navigation = useNavigation();



  async function salvarDados(valor: Array<object>) {
    const chave = 'lista_usuario';


    try {
      await AsyncStorage.setItem(chave, JSON.stringify(valor));
      console.log('Dados salvos com sucesso!');
    } catch (error) {
      console.log('Erro ao salvar os dados:', error);
    }
  }





  async function recuperarDados() {
    const chave = 'lista_usuario';

    try {
      const valor = await AsyncStorage.getItem(chave);
      if (valor !== null) {
        console.log('Dados recuperados:', valor);
        return valor;
      } else {
        console.log('Nenhum dado encontrado com a chave fornecida.');
      }
    } catch (error) {
      console.log('Erro ao recuperar os dados:', error);
    }
  };


  function onPressBack() {
    navigation.navigate("Login");
  }



  async function getUser() {

    const valor:Array<RegistrarDados> =  JSON.parse( await recuperarDados());

    console.log("valor id :", valor[0].id)

  }

  function registerUser() {

    let id = user_table[user_table.length - 1].id
    id++;
    const newUser = {
      "id": id,
      "username": userName,
      "phoneNumber": phoneNumber,
      "email": email,
      "password": password,
      "type": selectedAccount
    }

    console.log(newUser)

    user_table.push(newUser)
    salvarDados(user_table);
    getUser();

  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.h1}>Cadastro</Text>
        <TextInput
          placeholder="Usuário"
          textContentType="name"
          keyboardType="ascii-capable"
          style={styles.input}
          onChangeText={(e) => { SetUserName(e) }}
          value={userName}
        />
        <TextInput
          placeholder="Telefone"
          textContentType="telephoneNumber"
          keyboardType="phone-pad"
          style={styles.input}
          onChangeText={(e) => { SetPhoneNumber(e) }}
          value={phoneNumber}
        />
        <TextInput
          placeholder="Email"
          textContentType="emailAddress"
          keyboardType="email-address"
          style={styles.input}
          onChangeText={(e) => { SetEmail(e) }}
          value={email}
        />
        <TextInput
          placeholder="Senha"
          textContentType="password"
          keyboardType="name-phone-pad"
          style={styles.input}
          onChangeText={(e) => { setPassword(e) }}
          value={password}
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
          <Picker.Item label="Cliente" value="client" />
          <Picker.Item label="Adm" value="adm" />
        </Picker>

        <View style={styles.touchView}>
          <TouchableOpacity style={styles.button} onPress={registerUser}>
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
