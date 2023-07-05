import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useEffect } from "react";
import Item from "../../components/Item";
import styles from "./styles";
import iconApi from "../../service/iconApi";
import Logout from "../../components/Logout";

export default function Home() {
  // Tratando os dados

  useEffect(() => {
    async function pegar() {
      try {
        const response = await iconApi("can");
        console.log(response);
      } catch (error) {}
    }
    pegar();
  }, []);

  const onpress = () => {
    console.log("precionou");
  };

  // JSX
  return (
    <View style={styles.container}>
      <View>
        <Text style={[styles.text, { color: "black" }]}>
          Informe a Quantidade de Materiais
        </Text>
        <Logout />
      </View>
      <View style={styles.itensContainer}>
        <Item
          key={0}
          source={require("../../../images/aluminio.png")}
          name="Aluminio"
        />
        <Item
          key={1}
          source={require("../../../images/plastico.png")}
          name="Plastico"
        />
        <Item
          key={2}
          source={require("../../../images/papelao.png")}
          name="Papelao"
        />
        <Item
          key={3}
          source={require("../../../images/vidro.png")}
          name="Vidro"
        />
        <Item
          key={4}
          source={require("../../../images/vidro.png")}
          name="Ferro"
        />
        <Item
          key={5}
          source={require("../../../images/vidro.png")}
          name="Cobre"
        />
      </View>

      <View style={styles.button}>
        <TouchableOpacity onPress={onpress}>
          <Text style={styles.text}>Calcular</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
