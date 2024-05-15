import { Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, StatusBar, ScrollView, Image, Modal } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { launchImageLibrary } from 'react-native-image-picker';
import { useState } from 'react';

const Home = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView>
      <ScrollView>
        <StatusBar />
        <View style={{ marginTop: 20, marginLeft: 15 }}>
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Welcome User</Text>
          <Text>Good day</Text>

          {/* <Modal>
          <View style={{height: 400, width: '100%'}}>
            <Image style={{height: 400, width: '100%'}} source={{uri:selectImage}}/>
          </View>
          </Modal> */}


          <TouchableOpacity onPress={UploadImage} style={styles.container}>
            <Ionicons name='cloud-upload-outline' size={50} />
            <Text>Tap to upload images</Text>
          </TouchableOpacity>

          <Text style={{ marginTop: 15, fontWeight: 'bold' }}>Recent uploads</Text>
          <ScrollView style={{ marginTop: 15 }}>
            <View>
              <Text>Hello</Text>
              <Text>World</Text>
            </View>
          </ScrollView>

        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#E2E2E2",
    borderRadius: 10,
    height: 300,
    width: 300,
    borderStyle: 'dashed'
  }
})