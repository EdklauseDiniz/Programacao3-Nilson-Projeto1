import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, navigation, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useRoute } from '@react-navigation/native';

function HomeScreen({navigation, route}) {

const { username, idade } = route.params;

return (
<View style={{ flex: 1, alignItems: 'center'

, justifyContent: 'center' }}>

<Text>Bem-vindo, {username}!</Text>
<Text>Idade: {idade}</Text>
</View>
);
}

function LoginScreen({navigatio}) {
  return (
    <View style={styles.container}>
      <Text>LoginScreen</Text>
      <Button title='Home' onPress={() => navigation.navigate('Home', {username:'Nilson',idade:30})} />
      <StatusBar style="auto" />
    </View>
  );
}

function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
