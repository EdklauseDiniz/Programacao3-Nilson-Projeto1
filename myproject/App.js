import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, Image, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation, route }) {

  const username = route?.params?.username;
  const idade = route?.params?.idade;

  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Marcos Andrade</Text>
        <Text>81 99614-2890</Text>
        <Text>Idade: {idade}</Text>
      </View>
    </SafeAreaView>
  );
}

function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={{
        uri:'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'}} 
        style={styles.login}/>
      <Text style={styles.text}>Login</Text>
      <TextInput style={styles.input}></TextInput>
      <Text style={styles.text}>Senha</Text>
      <TextInput style={styles.input}></TextInput>
      <TouchableOpacity
        style={styles.buttonazul}
        onPress={() => navigation.navigate('Home', { username: 'Nilson', idade: 30 })}
      >
        <Text style={{ color: '#fff' }}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonvermelho}
        onPress={() => navigation.navigate('Home', { username: 'Nilson', idade: 30 })}
      >
        <Text style={{ color: '#fff'}}>Cadastrar-se</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} options={{headerRight: () => (
          <TouchableOpacity>
            <Image style={styles.add} source={{uri:'https://cdn-icons-png.flaticon.com/512/54/54414.png'}}/>
          </TouchableOpacity>
        )}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdc761',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  login: {
    padding: 60,
    margin: 50,
  },

  add: {
    padding: 15,
    right: 75,
  },

  text: {
    fontSize: 40,
  },

  input: {
    backgroundColor: '#fff',

    borderColor: '#000000',
    borderRadius: 5,
    borderWidth: 1,

    margin: 15,
    height: 20,
    width: 150,
  },

  buttonazul: {
    marginTop: 20,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },

  buttonvermelho: {
    marginTop: 20,
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  }
});