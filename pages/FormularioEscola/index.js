import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native'
import { TextInput, Checkbox } from 'react-native-paper'
import React, { useState } from 'react'
import { db } from '../../components/config'
import styles from './style'
import { TextInputMask } from 'react-native-masked-text'

export default function FormularioEscola({ navigation }) {

  const [escola, setEscola] = useState('')
  const [anoEscolar, setAnoEscolar] = useState('')
  const [salaTurma, setSalaTurma] = useState('')
  const [turno, setTurno] = useState('')


  const handleSubmit = () => {
      navigation.navigate("FormularioResponsavel");
  }

  return (
    <ScrollView style={styles.container}>

       {/* Escola*/}
       <TextInput
        style={styles.input}
        label="Nome da Escola"
        onChangeText={(escola) => { setEscola(escola) }}
      />

       {/* Ano Escolar*/}
       <TextInput
        style={styles.input}
        label="Ano Escolar"
        onChangeText={(anoEscolar) => { setAnoEscolar(anoEscolar) }}
      />

       {/* Sala/Turma */}
       <TextInput
        style={styles.input}
        label="Sala/Turma"
        onChangeText={(salaTurma) => { setSalaTurma(salaTurma) }}
      />

       {/* Turno */}
       <TextInput
        style={styles.input}
        label="Turno"
        onChangeText={(turno) => { setTurno(turno) }}
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
