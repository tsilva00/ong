import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native'
import { TextInput, Checkbox } from 'react-native-paper'
import React, { useState } from 'react'
import { db } from '../../components/config'
import styles from './style'
import { TextInputMask } from 'react-native-masked-text'

export default function DadosOficina({ navigation }) {

  const [ofcMusical, setOfcMusical] = useState('')
  const [ofcHumana, setOfcHumana] = useState('')
  
  
  const handleOficinaMusChange = () => {
    setOfcMusical(!ofcMusical);
  };

  const handleOficinaHumChange = () => {
    setOfcHumana(!ofcHumana);
  };

  const handleSubmit = () => {
      navigation.navigate("DadosFerramentas");
  }

  return (
    <ScrollView style={styles.container}>

       {/* Oficina Musical */}
       <TextInput
        style={styles.input}
        label="Oficina Musical"
        onChangeText={(ofcMusical) => { setOfcMusical(ofcMusical) }}
        render={(props) => (
          <Checkbox.Item
            {...props}
            onPress={handleOficinaMusChange}
            status={ofcMusical ? 'checked' : 'unchecked'}
          />
        )}
      />

       {/* Oficina Humana */}
       <TextInput
        style={styles.input}
        label="Oficina de Formação Humana"
        onChangeText={(ofcHumana) => { setOfcHumana(ofcMusical) }}
        render={(props) => (
          <Checkbox.Item
            {...props}
            onPress={handleOficinaHumChange}
            status={ofcHumana ? 'checked' : 'unchecked'}
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
