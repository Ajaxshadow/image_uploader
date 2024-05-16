import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/Home';
import SignUp from './Components/Uploading';
import LogIn from './pages/LogIn';
import ProgressBar from './Components/ProgressBar';
import Upload from './Components/Uploading';

function StackNavigator(){
const Stack = createNativeStackNavigator()
}

export default function App() {
  return (
    <Home/>
  );
}

