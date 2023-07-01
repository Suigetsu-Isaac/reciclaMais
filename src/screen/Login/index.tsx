import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import React,{useState} from "react";
import styles from "./styles";
import icon from "../../../assets/icon.png";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { RegistrarDados } from "../Registro";


export default function Login() {

  const navigation = useNavigation();
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');



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

  async function verificar() {
    
    const registrados:Array<RegistrarDados> = JSON.parse(await recuperarDados());
    let user:RegistrarDados
    registrados.forEach(
      (e) => {

        if (e.username === username && e.password === password){
          user = e;
          return
        }

      }
    )

    if(user){
      return user;
    }else{
      return null;
    }
     
    

  }




  async function onPressToHome(){

    const user:RegistrarDados = await verificar()

    if(user){

      const isAdm = user.type ==='adm'? true : false
      console.log(isAdm)
      console.log('user: ',user)
    
      navigation.navigate("Home",{adm:isAdm});
    }
    
    
  }

  function onPressRegister(){
    
    navigation.navigate("Registro");
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image source={icon} style={styles.imageLogo} />
      </View>
      <View style={styles.content}>
        <Text style={styles.h1}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Usuário"
          keyboardType="email-address"
          textContentType="givenName"
          value={username}
          onChangeText={(e) => {setUsername(e)}}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          keyboardType="visible-password"
          textContentType="password"
          value={password}
          onChangeText={(e) => setPassword(e)}
        />

        <View style={styles.button}>
          <TouchableOpacity onPress={onPressToHome}>
            <Text style={styles.text}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.touchView}>
        <TouchableOpacity onPress={onPressRegister}>
          <Text style={styles.cadastroText}>+ Criar Conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
