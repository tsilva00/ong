import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native'
import { TextInput, Checkbox } from 'react-native-paper'
import React, { useState } from 'react'
import { db } from '../../components/config'
import styles from './style'
import { TextInputMask } from 'react-native-masked-text';
import { addDoc, collection } from "firebase/firestore";
import { FormularioEducando } from "../FormularioEducando"

export default function DadosFerramentas({ navigation }) {

  const [internet, setInternet] = useState('')
  const [aparelho, setAparelho] = useState('')


  const handletInternetChange = () => {
    setInternet(!internet);
  };

  const handleAparelhoChange = () => {
    setAparelho(!aparelho);
  };

  const handleSubmit = () => {
    navigation.navigate("DadosFerramentas");
  }


  function addTask() {
    addDoc(collection(db, "Alunos"), {
      dataEntrada: dataEntrada,
      dataSaida: dataSaida,
      nome: nome,
      fone: fone,
      nascimento: nascimento,
      sexo: sexo,
      rg: rg,
      cpf: cpf,
      certidao: certidao,
      etnia: etnia,
      naturalidade: naturalidade,
      pcd: pcd,
      irmaos: irmaos,
      nomeIrmaos: nomeIrmaos,
      responsavelFin: responsavelFin,
      qtdMembros: qtdMembros,
      renda: renda,
      rua: rua,
      numero: numero,
      bairro: bairro,
      residencia: residencia,
      escola: escola,
      anoEscolar: anoEscolar,
      salaTurma: salaTurma,
      turno: turno,
      rgResponsavel: rgResponsavel,
      cpfResponsavel: cpfResponsavel,
      ofcMusical: ofcMusical,
      ofcHumana: ofcHumana,
      internet: internet,
      aparelho: aparelho,
    }).then(() => {
      //Data saved succesfully
      console.log('Data saved succesfully');
    }).catch((error) => {
      console.log(error);
    })
    navigation.navigate("Home")
  }


  return (
    <ScrollView style={styles.container}>

      {/* Internet */}
      <TextInput
        style={styles.input}
        label="Internet"
        onChangeText={(internet) => { setInternet(internet) }}
        render={(props) => (
          <Checkbox.Item
            {...props}
            onPress={handletInternetChange}
            status={internet ? 'checked' : 'unchecked'}
          />
        )}
      />

      {/* Aparelhos */}
      <TextInput
        style={styles.input}
        label="Dispositivo para Aulas Online"
        onChangeText={(aparelho) => { setAparelho(aparelho) }}
        render={(props) => (
          <Checkbox.Item
            {...props}
            onPress={handleAparelhoChange}
            status={aparelho ? 'checked' : 'unchecked'}
          />
        )}
      />



      <TouchableOpacity
        style={styles.buttonNext}
        onPress={() => {addTask()}}
      >
        <Text style={styles.iconButton}>Cadastrar Aluno</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}
