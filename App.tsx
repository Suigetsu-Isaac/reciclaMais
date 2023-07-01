import { StyleSheet, Text, View } from "react-native";


import { Routes} from "./src/routes";





export default function App() {



  return (
    
    <Routes />

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d3d3d3",
    alignItems: "flex-start",

    justifyContent: "center",
  },
});
