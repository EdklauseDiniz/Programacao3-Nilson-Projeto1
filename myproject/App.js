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
          { nome: "Marcos Andrade", tel: "81 99614-2890", email:"marcos@gmail.com" },
          { nome: "Patrícia Tavares", tel: "81 99876-5332", email:"patricia@gmail.com" },
          { nome: "Rodrigo Antunes", tel: "81 98776-5525", email:"rodrigo@gmail.com" },
        ].map((item, index) => (
          <View key={index} style={styles.container1}>
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' }}
              style={styles.login}
            />
            <View>
              <TouchableOpacity onPress={() => navigation.navigate('Alterar', { item, index })}>
                <Text style={styles.label}>{item.nome}</Text>
                <Text style={styles.label}>{item.tel}</Text>  
              </TouchableOpacity>
            </View>
            <View style={styles.container2} />
          </View> 
        ))}

      </ScrollView>
    </View>
  );
}

function AlterarScreen({ navigation, route }) {

  const { item, index } = route.params;

  return (
    <View style={styles.containerCadastro}>

      <Text style={styles.label}>Nome</Text>
      <TextInput 
        style={styles.input} 
        placeholder={item.nome} 
      />
      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} placeholder={item.email}/>
      <Text style={styles.label}>Telefone</Text>
      <TextInput style={styles.input} placeholder={item.tel}/>

      <TouchableOpacity style={styles.buttonazul}>
        <Text style={styles.buttonText}>Alterar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonvermelho}>
        <Text style={styles.buttonText}>Excluir</Text>
      </TouchableOpacity>
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

function CadastroScreen({ navigation }) {
  return (
    <View style={styles.containerCadastro}>
      <Text style={styles.label}>Nome</Text>
      <TextInput style={styles.input} />

      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} />

      <Text style={styles.label}>Telefone</Text>
      <TextInput style={styles.input} />

      <TouchableOpacity style={styles.buttonazul}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">

        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{
          headerTitleAlign: 'center'}}/>

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            headerTitleAlign: 'center',
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                <Image
                  style={styles.add}
                  source={{ uri: 'https://cdn-icons-png.flaticon.com/512/54/54414.png' }}
                />
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen name="Usuarios" component={UsuariosScreen} 
          options={({}) => ({
          headerTitleAlign: 'center',
        })} />

        <Stack.Screen name="Cadastro" component={CadastroScreen} 
        options={{headerTitleAlign: 'center'}} />
        
        <Stack.Screen name="Alterar" component={AlterarScreen} 
        options={{headerTitleAlign: 'center'}} />
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
    width: '95%',
    height: 5,
    borderRadius: 5,
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
    width: 200,
    height: 40,
    borderRadius: 5,
  },

  buttonvermelho: {
    marginTop: 10,
    backgroundColor: 'red',
    width: 200,
    height: 40,
    borderRadius: 5,
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
    lineHeight: 40,
  },
});