import React, { useState } from "react";
import { View, Text, TouchableOpacity, Pressable, FlatList, Alert } from "react-native";
import { db } from "../../components/config";
import styles from "./style"
import { doc, collection, getDocs, deleteDoc } from 'firebase/firestore';
import { FontAwesome } from "@expo/vector-icons";


export default function DadosEducando({ navigation }) {
  //state que vai receber as nossas tasks quando carregar
  const [task, setTask] = useState([])
  const [showBox, setShowBox] = useState(true);

  const showConfirmDialog = (id) => {
    return Alert.alert(
      "Are your sure?",
      "Are you sure you want to remove this beautiful box?",
      [
        // The "Yes" button
        {
          text: "Yes",
          onPress: () => {
            deleteTask(id)
          },
        },
        // The "No" button
        // Does nothing but dismiss the dialog when tapped
        {
          text: "No",
        },
      ]
    );
  };


  //carregar toda vez que carreagar os elementos
  getDocs(collection(db, "Alunos")).then(docSnap => {
      let list = [];
      docSnap.forEach((doc) => {
          list.push({ ...doc.data(), id:doc.id })
      })
      setTask(list);
  })


  //delete data
  function deleteTask(id) {
      deleteDoc(doc(db, "Alunos", id));
  }



  return (
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={task}
          renderItem={( { item } )=>{
             return(
            <View style={styles.Tasks}>
              <TouchableOpacity
                style={styles.deleteTask}
                onPress={() => showConfirmDialog(item.id)}
              >
              <FontAwesome
                name="trash"
                size={23}
                color="orange"
              >
              </FontAwesome>
              </TouchableOpacity>
              <Text
                style={styles.DescriptionTask}
                onPress={()=>
                  navigation.navigate("Details",{
                    id: item.id,
                    nome: item.nome,
                  })
                }
              >
              {item.nome}  
              </Text>  
   
            </View>
            )
          }}
        />
      </View>
    )
  }