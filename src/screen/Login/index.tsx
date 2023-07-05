import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import React,{useEffect, useState} from "react";
import styles from "./styles";
import icon from "../../../assets/icon.png";
import { useNavigation } from "@react-navigation/native";


import { RegistrarDados } from "../Registro";
import {app,db} from '../../../firebaseConfig';
import { getDocs, collection } from 'firebase/firestore';

export default function Login() {

  const navigation = useNavigation();
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');

  
 
   

  async function recuperarDados() {
    let users=[]
    
    
    const {docs} = await getDocs(collection(db, "user"))

    docs.forEach((document) => {
      users.push({...document.data(),id:document.id})
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
  async function verificar() {
    
    const registrados:Array<RegistrarDados> = await recuperarDados()
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
    }else{
      alert("Usuário não cadastrado")
    }
    
    
  }

  function onPressRegister(){
    
    navigation.navigate("Registro");
  }

  useEffect(()=>{
       
      
 
  
},[])

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
