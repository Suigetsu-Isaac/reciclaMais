import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { MaterialIcons } from '@expo/vector-icons';


import styles from './styles'
export default function Logout() {
  const navigation = useNavigation()
  async function toLogin() {
    navigation.navigate('Login');
  }
  
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toLogin}>
        <MaterialIcons name="logout" size={24} color="black" />
        <Text>Logout</Text>
      </TouchableOpacity>
      
    </View>
  )
}