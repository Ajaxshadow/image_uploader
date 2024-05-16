import {
  Platform, SafeAreaView, StyleSheet,
  Text, TouchableOpacity, View,
  StatusBar, ScrollView, Image,
  Modal, FlatList
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { db, storage } from "../firebaseConfig";
import ProgressBar from '../Components/ProgressBar';




const Home = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "files"), (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          console.log("New file", change.doc.data());
          setFiles((prevFiles) => [...prevFiles, change.doc.data()]);
        }
      });
    });
    return () => unsubscribe();
  }, []);


  async function pickImage() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      allowsEditing: true,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      await uploadImage(result.assets[0].uri, "image");
    }
  }

  async function uploadImage(uri, fileType) {
    const response = await fetch(uri);
    const blob = await response.blob();

    const storageRef = ref(storage, "Pics/" + new Date().getTime());
    const uploadTask = uploadBytesResumable(storageRef, blob);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        setProgress(progress.toFixed());
      },
      (error) => {
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          console.log("File available at", downloadURL);
          await saveRecord(fileType, downloadURL, new Date().toISOString());
          setImage("");
        });
      }
    );
  }

  async function saveRecord(fileType, url, createdAt) {
    try {
      const docRef = await addDoc(collection(db, "files"), {
        fileType,
        url,
        createdAt,
      });
      console.log("document saved correctly", docRef.id);
    } catch (e) {
      console.log(e);
    }
  }


  return (
    <SafeAreaView>
      <StatusBar />
      <View style={{ marginTop: 20, marginLeft: 15 }}>
        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Welcome User</Text>
        <Text>Good day</Text>
      </View>

      <View style={{ alignItems: 'center', marginTop: 30 }}>
        <FlatList
          data={files}
          keyExtractor={(item) => item.url}
          renderItem={({ item }) => {
            if (item.fileType === "image") {
              return (
                <Image
                  source={{ uri: item.url }}
                  style={{ width: "34%", height: 100 }}
                />
              );
            }
          }}
          numColumns={3}
          contentContainerStyle={{ gap: 2 }}
          columnWrapperStyle={{ gap: 2 }}
        />
        <TouchableOpacity onPress={pickImage} style={styles.container}>
          <Ionicons name='cloud-upload-outline' size={50} />
          <Text>Tap to upload images</Text>
        </TouchableOpacity>
      </View>

      <View style={{marginTop: 20, alignItems: 'center', justifyContent: 'center'}}>
      {image && <ProgressBar image={image} progress={progress} />}
      </View>

      <View style={{ alignItems: 'center' }}>
        <Image source={require('../assets/Photoruum-black-text.jpg')}
          style={{ height: 100, width: 300 }} />
      </View>

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
    borderStyle: 'dashed',
    borderWidth: 1
  },
  uploadbtn: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    borderRadius: 10,
    margin: 15
  }
})
