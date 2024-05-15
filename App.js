import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/Home';
import Upload from './pages/Upload';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';

function StackNavigator(){
const Stack = createNativeStackNavigator()

  return(
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home}/>
      <Stack.Screen options={{headerShown: false}} name='Signup' component={SignUp}/>
      <Stack.Screen options={{headerShown: false}} name='Login' component={LogIn}/>
      <Stack.Screen name='Upload' component={Upload}/>
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
    <StackNavigator/>
    </NavigationContainer>
    
  );
}
