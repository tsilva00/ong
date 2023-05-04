import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native'
import { TextInput, Checkbox } from 'react-native-paper'
import React, { useState } from 'react'
import { db } from '../../components/config'
import styles from './style'
import { TextInputMask } from 'react-native-masked-text'

export default function FormularioFamilia({ navigation }) {

  const [irmaos, setIrmaos] = useState('')
  const [nomeIrmaos, setNomeIrmaos] = useState('')
  const [responsavelFin, setResponsavelFin] = useState('')
  const [qtdMembros, setQtdMembros] = useState('')
  const [renda, setRenda] = useState('')
  
  const handlePossuiIrmaosMembrosChange = () => {
    setIrmaos(!irmaos);
  };

  const handleSubmit = () => {
      navigation.navigate("FormularioResidencia");
  }

  return (
    <ScrollView style={styles.container}>

      {/* Possui Irmãos*/}
      <TextInput
        label="Possui Irmãos Membros do Instituto?"
        style={styles.input2}
        onChangeText={(irmaos) => { setIrmaos(irmaos) }}
        render={(props) => (
          <Checkbox.Item
            {...props}
            onPress={handlePossuiIrmaosMembrosChange}
            status={irmaos ? 'checked' : 'unchecked'}
          />
        )}
      />
      <Text style={styles.obrigatorio}>*obrigatório</Text>

      
      {/* Nome dos Irmãos*/}
      <TextInput
        style={styles.input}
        label='Nome dos Irmãos Membros'
        onChangeText={(nomeIrmaos) => { setNomeIrmaos(nomeIrmaos) }}
      />
      
      {/* Principal Responável Finaceiro*/}
      <TextInput
        style={styles.input}
        label='Principal Responável Finaceiro'
        onChangeText={(responsavelFin) => { setResponsavelFin(responsavelFin) }}
      />
      
      {/* Quantidade de Membros*/}
      <TextInput
        style={styles.input}
        label='Quantidade de Membros'
        keyboardType="numeric"
        placeholder={'Incluindo o Educando'}
        onChangeText={(qtdMembros) => { setQtdMembros(qtdMembros) }}
      />
      
      {/*Renda Familiar*/}
      <TextInput
        style={styles.input}
        label='Renda Familiar'
        keyboardType="numeric"
        placeholder={'Per Capita'}
        onChangeText={(renda) => { setRenda(renda) }}
        render={(props) => (
          <TextInputMask
            {...props}
            type={'money'}
            options={{
              precision: 2,
              separator: ',',
              delimiter: '.',
              unit: 'R$',
              suffixUnit: '',
            }}
          />
        )}
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
