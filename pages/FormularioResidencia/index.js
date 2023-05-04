import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native'
import { TextInput, Checkbox } from 'react-native-paper'
import React, { useState } from 'react'
import { db } from '../../components/config'
import styles from './style'
import { TextInputMask } from 'react-native-masked-text'

export default function FormularioResidencia({ navigation }) {

  const [rua, setRua] = useState('')
  const [beco, setBeco] = useState('')
  const [numero, setNumero] = useState('')
  const [bairro, setBairro] = useState('')
  const [residencia, setResidencia] = useState('')

  

  const handleSubmit = () => {
      navigation.navigate("FormularioEscola");
  }

  return (
    <ScrollView style={styles.container}>

       {/* Rua*/}
       <TextInput
        style={styles.input}
        label="Rua"
        onChangeText={(rua) => { setRua(rua) }}
      />

       {/* Beco*/}
       <TextInput
        style={styles.input}
        label="Beco"
        onChangeText={(beco) => { setBeco(beco) }}
      />

       {/* Numero*/}
       <TextInput
        style={styles.input}
        label="Número"
        keyboardType="numeric"
        onChangeText={(numero) => { setNumero(numero) }}
      />

       {/* Bairro*/}
       <TextInput
        style={styles.input}
        label="Bairro"
        onChangeText={(bairro) => { setBairro(bairro) }}
      />

       {/* Tipo de Residencia */}
       <TextInput
        style={styles.input}
        label="Tipo de Residência "
        onChangeText={(residencia) => { setResidencia(residencia) }}
        placeholder={'Alugada / Própria / Cedida / Outros'}
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
