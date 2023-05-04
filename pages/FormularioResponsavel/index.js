import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native'
import { TextInput, Checkbox } from 'react-native-paper'
import React, { useState } from 'react'
import { db } from '../../components/config'
import styles from './style'
import { TextInputMask } from 'react-native-masked-text'

export default function FormularioResponsavel({ navigation }) {

  const [rgResponsavel, setRgResponsavel] = useState('')
  const [cpfResponsavel, setCpfResponsavel] = useState('')
  


  const handleSubmit = () => {
      navigation.navigate("DadosOficina");
  }

  return (
    <ScrollView style={styles.container}>

       {/* CPF Responsavel */}
       <TextInput
        style={styles.input}
        label="RG"
        keyboardType="numeric"
        onChangeText={(rgResponsavel) => { setRgResponsavel(rgResponsavel) }}
      />

       {/* CPF Responsavel */}
       <TextInput
        style={styles.input}
        label="CPF"
        keyboardType="numeric"
        onChangeText={(cpfResponsavel) => { setCpfResponsavel(cpfResponsavel) }}
        render={(props) => <TextInputMask {...props} type={'cpf'} />}
      />


      <TouchableOpacity
        style={styles.buttonNext}
        onPress={handleSubmit}
      >
        <Text style={styles.iconButton}>Seguinte</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}
