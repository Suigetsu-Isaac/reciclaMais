import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";

import styles from "./styles";
import materiais from "./materiais";

import ItemCad from "../../components/ItemCad";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Logout from "../../components/Logout";



export default function CadMaterial() {


  const [content, setContent] = useState<string[]>([]);
  


  const handleTextChange = (index:number, text:string) => {
    const updatedValues = [...content];
    updatedValues[index] = text;
    setContent(updatedValues);
  };


  function listarMateriais(){

    content.map(
      (valor,indice) => {console.log(`No indice ${indice} temos o valor: ${valor}`)}
    )
  }

  async function salvar(){
    
    await AsyncStorage.setItem('materias',JSON.stringify(content))
    
    listarMateriais()
  }


  async function ler() {
    
    const res = await AsyncStorage.getItem('materiais')
    console.log(res)
  }
  function GetMaterial(){

    return(
      <>
      {
      materiais.map(
        (val,ind) =>{
          return <ItemCad
            key={ind}
            nome={val}
            value={content[ind]}
            setValue={(text) => {handleTextChange(ind,text)}}
          />
        }
      )}
      </>
    )

  }


  
  


  return (
    <View style={styles.container}>
      <Logout/>
      <Text style={styles.h1}>Valores Dos Materiais</Text>
      <Text style={styles.small}> Preco por kilo *KG </Text>
      <View style={styles.itensContainer}>

       <GetMaterial />

      </View>

      <View style={styles.buttonsCotainer}>
        <View style={styles.button}>
          <TouchableOpacity>
            <Text style={styles.text}>Editar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={salvar}>
            <Text style={styles.text}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
