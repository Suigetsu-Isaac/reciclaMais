import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import React from "react";
import styles from "./styles";
import icon from "../../../assets/icon.png";
import { useNavigation } from "@react-navigation/native";



/**
 *
 * Centro : {
 *  Image Reciclar
 *  Text: Login
 *
 *  Input: usuário
 *  Input: Senha
 *
 *  Button: Entrar
 * }
 *  Esquerda :{ Touch: + Criar Conta}
 */

export default function Login() {

  const navigation = useNavigation();

  function onPressToHome(){


    
    navigation.navigate("Home")
    
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
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          keyboardType="visible-password"
          textContentType="password"
        />

        <View style={styles.button}>
          <TouchableOpacity>
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
