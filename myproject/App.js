import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation, route }) {

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ alignItems: 'center' }}>

        {[ 
          { nome: "Marcos Andrade", tel: "81 99614-2890" },
          { nome: "Patrícia Tavares", tel: "81 99876-5332" },
          { nome: "Rodrigo Antunes", tel: "81 98776-5525" }
        ].map((item, index) => (
          <View key={index} style={styles.container1}>
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' }}
              style={styles.login}
            />
            <View>
              <Text>{item.nome}</Text>
              <Text>{item.tel}</Text>
            </View>
            <View style={styles.container2} />
          </View>
        ))}

      </ScrollView>
    </View>
  );
}

function LoginScreen({ navigation }) {
  return (
    <View style={styles.inicio}>
      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' }}
        style={styles.imagem}
      />

      <Text style={styles.label}>Login</Text>
      <TextInput style={styles.input} />

      <Text style={styles.label}>Senha</Text>
      <TextInput style={styles.input} secureTextEntry />

      <TouchableOpacity
        style={styles.buttonazul}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonvermelho}
        onPress={() => navigation.navigate('Usuarios')}
      >
        <Text style={styles.buttonText}>Cadastrar-se</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

function UsuariosScreen({ navigation }) {
  return (
    <View style={styles.containerCadastro}>
      <Text style={styles.label}>Nome</Text>
      <TextInput style={styles.input} />

      <Text style={styles.label}>CPF</Text>
      <TextInput style={styles.input} />

      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} />

      <Text style={styles.label}>Senha</Text>
      <TextInput style={styles.input} secureTextEntry />

      <TouchableOpacity style={styles.buttonazul}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">

        <Stack.Screen name="Login" component={LoginScreen} options={{
        headerTitleAlign: 'center'}}/>

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            headerTitleAlign: 'center',
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Usuarios')}>
                <Image
                  style={styles.add}
                  source={{ uri: 'https://cdn-icons-png.flaticon.com/512/54/54414.png' }}
                />
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen name="Usuarios" component={UsuariosScreen} 
        options={({ navigation }) => ({
          headerTitleAlign: 'center',
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigation('Usuarios')}>
              <Image
                style={styles.add}
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/54/54414.png' }}
              />
            </TouchableOpacity>
          ),
        })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  inicio: {
    flex: 1,
    backgroundColor: '#fdc761',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerCadastro: {
    flex: 1,
    backgroundColor: '#f0c5c5',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container1: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 20,
  },

  container2: {
    width: '45%',
    height: 5,
    backgroundColor: '#808080',
    marginTop: 10,
  },

  login: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },

  add: {
    width: 25,
    height: 25,
    marginRight: 15,
  },

  imagem: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },

  label: {
    fontSize: 20,
  },

  input: {
    backgroundColor: '#fff',
    borderColor: '#000',
    borderRadius: 5,
    borderWidth: 1,
    margin: 10,
    height: 40,
    width: 200,
    paddingHorizontal: 10,
  },

  buttonazul: {
    marginTop: 20,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },

  buttonvermelho: {
    marginTop: 10,
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});