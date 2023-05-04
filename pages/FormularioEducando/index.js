import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native'
import { TextInput, Checkbox } from 'react-native-paper'
import React, { useState } from 'react'
import { db } from '../../components/config'
import styles from './style'
import { TextInputMask } from 'react-native-masked-text'

export default function FormularioEducando({ navigation }) {

  const [dataEntrada, setDataEntrada] = useState('')
  const [dataSaida, setDataSaida] = useState('')
  const [nome, setNome] = useState('')
  const [fone, setFone] = useState('')
  const [nascimento, setNascimento] = useState('')
  const [sexo, setSexo] = useState('')
  const [rg, setRg] = useState('')
  const [cpf, setCpf] = useState('')
  const [certidao, setCertidao] = useState('')
  const [etnia, setEtnia] = useState('')
  const [naturalidade, setNaturalidade] = useState('')
  const [pcd, setPcd] = useState('')
  
  const handlePCDChange = () => {
    setPcd(!pcd);
  };

  const handleSubmit = () => {
      navigation.navigate("FormularioFamilia");
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.label}>Formulário do Educando</Text>
      {/* Data de Entrada */}
      <TextInput
        label="Data de Entrada"
        style={styles.input}
        placeholder={'dd/mm/aaaa'}
        keyboardType="numeric"
        onChangeText={(dataEntrada) => { setDataEntrada(dataEntrada) }}
        render={(props) => (
          <TextInputMask
            {...props}
            type={'datetime'}
            options={{
              format: 'DD/MM/YYYY',
            }}
          />
        )}
      />
      <Text style={styles.obrigatorio}>*obrigatório</Text>

      {/* Data de Saida */}
      <TextInput
        label="Data de Saida"
        style={styles.input}
        placeholder={'dd/mm/aaaa'}
        keyboardType="numeric"
        onChangeText={(dataSaida) => { setDataSaida(dataSaida) }}
        render={(props) => (
          <TextInputMask
            {...props}
            type={'datetime'}
            options={{
              format: 'DD/MM/YYYY',
            }}
          />
        )}
      />

      {/* Nome*/}
      <TextInput
        style={styles.input}
        placeholder='Nome'
        onChangeText={(nome) => { setNome(nome) }}
      />
      <Text style={styles.obrigatorio}>*obrigatório</Text>

      {/* Fone */}
      <TextInput
        label="Fone"
        style={styles.input}
        placeholder={'(99) 9999-9999 ou (99) 99999-9999'}
        keyboardType="numeric"
        onChangeText={(fone) => { setFone(fone) }}
        render={(props) => (
          <TextInputMask
            {...props}
            type={'cel-phone'}
            options={{
              maskType: 'BRL',
              withDDD: true,
              dddMask: '(99) ',
            }}
          />
        )}
      />
      <Text style={styles.obrigatorio}>*obrigatório</Text>

      {/* Nascimento */}
      <TextInput
        label="Nascimento"
        style={styles.input}
        placeholder={'dd/mm/aaaa'}
        keyboardType="numeric"
        onChangeText={(nascimento) => { setNascimento(nascimento) }}
        render={(props) => (
          <TextInputMask
            {...props}
            type={'datetime'}
            options={{
              format: 'DD/MM/YYYY',
            }}
          />
        )}
      />
      <Text style={styles.obrigatorio}>*obrigatório</Text>

      {/* Sexo */}
      <TextInput
        style={styles.input}
        placeholder='Sexo'
        onChangeText={(sexo) => { setSexo(sexo) }}
      />
      <Text style={styles.obrigatorio}>*obrigatório</Text>

      {/* RG */}
      <TextInput
        style={styles.input}
        placeholder='RG'
        keyboardType="numeric"
        onChangeText={(rg) => { setRg(rg) }}
      />
      

      {/* CPF */}
      <TextInput
        style={styles.input}
        placeholder='CPF'
        keyboardType="numeric"
        onChangeText={(cpf) => { setCpf(cpf) }}
        render={(props) => <TextInputMask {...props} type={'cpf'} />}
      />
      <Text style={styles.obrigatorio}>*obrigatório</Text>

      {/* certidao */}
      <TextInput
        style={styles.input}
        placeholder='Certidão de Nascimento'
        keyboardType="numeric"
        onChangeText={(certidao) => { setCertidao(certidao) }}
      />

      {/* Etnia */}
      <TextInput
        style={styles.input}
        placeholder='Etnia/Cor'
        onChangeText={(etnia) => { setEtnia(etnia) }}
      />
      <Text style={styles.obrigatorio}>*obrigatório</Text>

      {/* Naturalidade */}
      <TextInput
        style={styles.input}
        placeholder='Naturalidade'
        onChangeText={(naturalidade) => { setNaturalidade(naturalidade) }}
      />
      <Text style={styles.obrigatorio}>*obrigatório</Text>

      {/* PCD */}
      <TextInput
        label="Pessoa com Deficência?"
        style={styles.input}
        onChangeText={(pcd) => { setPcd(pcd) }}
        render={(props) => (
          <Checkbox.Item
            {...props}
            onPress={handlePCDChange}
            status={pcd ? 'checked' : 'unchecked'}
          />
        )}
      />
      <Text style={styles.obrigatorio}>Selecione caso sim</Text>



      <TouchableOpacity
        style={styles.buttonNext}
        onPress={handleSubmit}
      >
        <Text style={styles.iconButton}>Seguinte</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}
