import { StatusBar } from 'expo-status-bar';
import { Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Upload from './Upload'

const Home=({navigation})=>{

  return (
    <SafeAreaView>
      <StatusBar/>
      <View style={{ marginTop: 5, flexDirection: 'row', justifyContent: 'space-between', position: 'relative'}}>
        
        <Ionicons 
        onPress={()=>navigation.navigate(Upload)} 
        name='menu'
        style={{fontSize: 30}}/>

        <Text style={{fontSize: 20}}>Photoruum</Text>

        <FontAwesome name='id-card-o' style={{fontSize: 30}}/>

      </View>

      <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 50, marginRight: 80, marginLeft:80, backgroundColor:'purple', borderRadius:20, height: 200}}>
         <Text style={{fontSize: 30}}>Upload Photos Here</Text>
      </View>


    </SafeAreaView>
  );
}

export default Home;