import { View,Text, StyleSheet, ScrollView, Pressable, Alert, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native";
import { useState } from "react";
import { Entypo } from "@expo/vector-icons";


const SignUp=()=>{
        const [userName, setUserName] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [confirmPassword, setConfirmPassword] = useState('');

        //Errors:
        const [userNameError, setUserNameError] = useState('');
        const [emailError, setEmailError] = useState('');
        const [passwordError, setPasswordError] = useState('');
        const [confirmPasswordError, setConfirmPasswordError] = useState('');

        //show password:
        const [showPassword, setShowPassword] = useState(true);
      
        const isValidEmail = (email) => {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
          };    

        const toggleShowPassword = () =>{
            setShowPassword(!showPassword);
        }

        const onSignUpPress = () => {
          setUserNameError('')
          setEmailError('');
          setPasswordError('');
          setConfirmPasswordError('');
      
          let hasError = false;

          if (!userName) {
            setUserNameError('Username is required');
            hasError = true;
          }
          if (!email) {
            setEmailError('Email is required');
            hasError = true;
          }
          else if (!isValidEmail(email)) {
            setEmailError('Please enter a valid email');
            hasError = true;
         }
          if (!password) {
            setPasswordError('Password is required');
            hasError = true;
        }
         else if(password.length < 8){
            setPasswordError('Password is too short')
            hasError = true;
        } 
          if (!confirmPassword) {
            setConfirmPasswordError('Please confirm your password');
            hasError = true;
          }
        if (confirmPassword !== password){
            setConfirmPasswordError('Password does not match')
            hasError= true;
        } 
        if (hasError){
            return;
        }
        else{
        console.log("Username:", userName)
        console.log("Email:", email)
        console.log("Password:", password)
        }  
    }

    return(
        <SafeAreaView>
            <ScrollView>
        <View style={{marginTop: 30, alignItems: "center"}}>
            <Text style={{fontSize: 30}}>Sign-up</Text>
        </View>
        <View style={{marginTop: 20}}>
            <Text style={styles.texts}>First name</Text>
            <TextInput style={styles.inputs}
            placeholder= "Please enter First name"
            />
            
            <Text style={styles.texts}>Last name</Text>
            <TextInput style={styles.inputs}
            placeholder="Please enter Last name"
            />

            <Text style={styles.texts}>Username</Text>
            <TextInput style={styles.inputs}
            placeholder="Please enter Username"
            value={userName}
            onChangeText={setUserName}
            placeholderTextColor={userNameError ? 'red' : 'black'}
            />
            {userNameError ? <Text style={styles.errorText}>{userNameError}</Text> : null}

            <Text style={styles.texts}>Email</Text>
            <TextInput style={styles.inputs}
            placeholder="Please enter Email"
            value={email}
            onChangeText={setEmail}
            placeholderTextColor={emailError ? 'red' : 'black'}
            />
            {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null} 



            <Text style={styles.texts}>Password</Text>
            <View  style={[styles.inputs, styles.passwordinput]}>
            <TextInput secureTextEntry={showPassword}
            placeholder="Must be atleast 8 characters"
            value={password}
            onChangeText={setPassword}
            placeholderTextColor={passwordError ? 'red' : 'black'}
            />
            <TouchableOpacity onPress={toggleShowPassword}>
            {showPassword ? (
                <Entypo name='eye' size={17} color="black"/>
             ) : (
                <Entypo name='eye-with-line' size={17} color="black"/>
            )}
            </TouchableOpacity>
            </View>
            {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}



            <Text style={styles.texts}>Confirm Password</Text>
            <TextInput secureTextEntry={true} style={styles.inputs}
            placeholder="Confirm password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholderTextColor={confirmPasswordError ? 'red' : 'black'}
            />
            {confirmPasswordError ? <Text style={styles.errorText}>{confirmPasswordError}</Text> : null}

        </View>

        <View style={{ marginTop:60, alignItems: "center"}}>
            <Pressable style={styles.button} onPress={onSignUpPress}>
                <Text style={{fontSize: 17, padding: 12}}>Sign-Up</Text>
            </Pressable>
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
    },

    button:{
        backgroundColor: "#d19fe8",
        borderRadius: 24,
        height: "auto",
        width: "auto",
        borderColor: "black",
        borderWidth: 1.5
    },
    errorText: {
        color: 'red',
        marginLeft: 25,
    },
    passwordinput:{
        flexDirection: "row",
        justifyContent: "space-between"
    }
})

export default SignUp;