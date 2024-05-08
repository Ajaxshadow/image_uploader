import { Button, View, Text } from "react-native";
import LogIn from "./LogIn";
 
const Upload=({navigation})=>{

    return(
        <View>
            <Text>Navigate down here</Text>
            <Button title="Here!" onPress={()=>navigation.navigate(LogIn)}/>
        </View>
    );
}

export default Upload;