import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import ItemCad from "../../components/ItemCad";
import styles from "./styles";



import materiais, {state} from "./materiais";

export default function CadMaterial() {

  const [content,setContent] = useState();

  state({content,setContent})

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Valores Dos Materiais</Text>
      <View style={styles.itensContainer}>
        
        {
          materiais.map(
            (e) => {
              return (
                <ItemCad nome={e.name} content={e.content} setContent={e.setContent}/>
              )
            }
          )
        }

      </View>

      <View style={styles.buttonsCotainer}>
        <View style={styles.button}>
          <TouchableOpacity>
            <Text style={styles.text}>Editar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity>
            <Text style={styles.text}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
