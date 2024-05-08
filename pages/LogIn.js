import { useNavigation } from "@react-navigation/native";
import { View, Text, TextInput, StyleSheet, Pressable, Image, ScrollView} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Link from "@react-navigation/native";
import { router } from "expo-router";
import SignUp from "./SignUp";

const LogIn=()=>{

    const onLoginPress=()=>{
        console.warn('you logged in')
    }

    return(
        <SafeAreaView style={{backgroundColor: 'black', flex: 1}}>
            <ScrollView>
            <View style={{marginTop: 50, alignItems: "center"}}>
                <Image source={require('../assets/Photoruum-Logo-White.jpg')}
                style={{height: 150, width: 150}}
                />

                <View style={{alignItems: "center"}}>
                <Text style={{fontSize:20, color: 'white'}}>Welcome</Text>
                <Text style={{fontSize:20, color: 'white'}}>to</Text>
                <Text style={{fontSize:20, color: 'white'}}>Photoruum</Text>
                </View>
            </View>

            <View style={{marginTop: 25,alignItems: "center"}}>
                <Text style={{fontSize: 30, color: 'white', fontWeight: "bold"}}>Login</Text>
            </View>
            <View style={{marginTop: 10}}>
                <Text style={styles.texts}>Username</Text>
                <TextInput placeholder='Please enter Username' 
                placeholderTextColor={'white'}
                style={styles.inputs}/>

                <Text style={styles.texts}>Password</Text>
                <TextInput placeholder='Must be atleast 8 characters'
                 placeholderTextColor={'white'}
                 style={styles.inputs}/>
            </View>

            <View style={{ marginTop: 20, alignItems: "center"}}>
                <Pressable style={styles.button} onPress={onLoginPress}>
                    <Text style={{fontSize: 17, padding: 12, fontWeight: "bold"}}>Login</Text>
                </Pressable>

                <Text style={{marginTop: 20, fontSize: 17, color: 'white'}}>Don't have an account? Sign up!</Text>
                <View style={{ marginTop:20, alignItems: "center"}}>
                    <Pressable style={styles.button}>
                        <Text style={{fontSize: 17, padding: 12, fontWeight: "bold"}} >Sign-up</Text>
                        </Pressable>
                    </View>
            </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles= StyleSheet.create({
    inputs:{
        borderWidth:2,
        borderColor: 'grey',
        borderRadius: 20,
        marginLeft: 15,
        marginRight:20,
        padding: 10,
        height: 40,
        fontSize: 14,
    },

    texts:{
        marginTop: 10,
        marginLeft: 15,
        marginBottom: 5,
        fontSize: 18,
        color: 'white',
    },

    button:{
        backgroundColor: "white",
        borderRadius: 24,
        height: "auto",
        width: "auto",
        borderColor: "grey",
        borderWidth: 1.5
    },
})

export default LogIn;

