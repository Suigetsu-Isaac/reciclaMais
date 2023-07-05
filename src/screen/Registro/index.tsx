import { View, Text, TextInput } from "react-native";

import { Picker } from "@react-native-picker/picker";
import React, { useRef, useState } from "react";
import styles from "./styles";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { user_table } from "../../../fakeDB/user_table";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import uuid from 'react-native-uuid';
export interface RegistrarDados{
  id: string,
  username: string,
  phoneNumber: string,
  email:string,
  password:string
  type: 'adm' | 'client'
}


export default function Registro() {

  const [selectedAccount, setSelectedAccount] = useState('client');
  const [username, SetUsername] = useState('');
  const [phoneNumber, SetPhoneNumber] = useState('');
  const [email, SetEmail] = useState('');
  const [password, setPassword] = useState('');
  const pickerRef = useRef();
  const navigation = useNavigation();


  const id = uuid.v1();
  
  async function salvarDados() {
        
    
    if(typeof id == "string"){
     setDoc(doc(db,'user',id),{
        id,
        username,
        phoneNumber,
        email,
        password,
        type : selectedAccount
      }).then(
        ()=>{
          console.log('data submited')
        }
      ).catch(
        (error)=>{
          console.log(error)
        }
      )
    }

    

  }


  async function recuperarDados() {
    let users=[]
    
    
    const {docs} = await getDocs(collection(db, "user"))

    docs.forEach((document) => {
      users.push({...document.data,id:document.id})
    })
    
    try{

      if (users.length >0){
        console.log("Documento data: ",users)
        return users
      }else{
        console.log('Vazio')
      }
    }catch(error){
      console.log("error ao recuperar dados: ",error)
    }
    
    
    
  };


  function onPressBack() {
    navigation.navigate("Login");
  }



  async function getUser() {

    const valor:Array<RegistrarDados> =   await recuperarDados();

    console.log("valor id :", valor[0].id)

  }

  function registerUser() {

    let id = user_table[user_table.length - 1].id
    id++;
    const newUser = {
      "id": id,
      "username": username,
      "phoneNumber": phoneNumber,
      "email": email,
      "password": password,
      "type": selectedAccount
    }

    console.log(newUser)

    user_table.push(newUser)
    salvarDados();
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
          onChangeText={(e) => { SetUsername(e) }}
          value={username}
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
