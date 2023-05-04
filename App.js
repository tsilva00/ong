import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./pages/Home";
import DadosEducando from "./pages/DadosEducando"
import DadosFerramentas from "./pages/DadosFerramentas"
import DadosOficina from "./pages/DadosOficina"
import FormularioResponsavel from "./pages/FormularioResponsavel"
import FormularioEscola from "./pages/FormularioEscola"
import FormularioResidencia from "./pages/FormularioResidencia"
import FormularioEducando from "./pages/FormularioEducando"
import FormularioFamilia from "./pages/FormularioFamilia"
import Main from "./pages/Main";


const Stack = createStackNavigator();

export default function App () {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
        name="Home"
        component={Home}
        options={{
          headerTintColor: '#F79031'
        }}
        />
        <Stack.Screen 
        name="DadosEducando"
        component={DadosEducando}
        options={{
          headerTintColor: '#F79031'
        }}
        />
        <Stack.Screen 
        name="DadosFerramentas"
        component={DadosFerramentas}
        options={{
          headerTintColor: '#F79031'
        }}
        />
        <Stack.Screen 
        name="DadosOficina"
        component={DadosOficina}
        options={{
          headerTintColor: '#F79031'
        }}
        />
        <Stack.Screen 
        name="FormularioEducando"
        component={FormularioEducando}
        options={{
          headerTintColor: '#F79031'
        }}
        />
        <Stack.Screen 
        name="FormularioEscola"
        component={FormularioEscola}
        options={{
          headerTintColor: '#F79031'
        }}
        />
        <Stack.Screen 
        name="FormularioFamilia"
        component={FormularioFamilia}
        options={{
          headerTintColor: '#F79031'
        }}
        />
        <Stack.Screen 
        name="Main"
        component={Main}
        options={{
          headerTintColor: '#F79031'
        }}
        />
        <Stack.Screen 
        name="FormularioResidencia"
        component={FormularioResidencia}
        options={{
          headerTintColor: '#F79031'
        }}
        />
        <Stack.Screen 
        name="FormularioResponsavel"
        component={FormularioResponsavel}
        options={{
          headerTintColor: '#F79031'
        }}
        />  
      </Stack.Navigator>
    </NavigationContainer>
  )}