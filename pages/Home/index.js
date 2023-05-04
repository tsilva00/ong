import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import Logo from '../../components/Logo'
import styles from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Home({navigation}) {
    return (
        <View style={styles.container} >
            <Logo />
            <TouchableOpacity
                style={styles.buttonNewTask}
                onPress={() => {navigation.navigate("Main")}}
            >
                <Text style={styles.button}>Cadastrar Novo Educando</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonNewTask}
                onPress={() => {navigation.navigate("DadosEducando")}}
            >
                <Text style={styles.button}>Educandos Cadastrados</Text>
            </TouchableOpacity>
        </View>
    )
}
