import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { CameraView, useCameraPermissions } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { useEffect, useRef, useState } from 'react';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [permission, requestPermission] = useCameraPermissions();
  const [cameraProps, setCameraProps] = useState({ facing: 'back' });
  const [image, setImage] = useState(null); // Armazena a imagem capturada ou selecionada
  const [isEditing, setIsEditing] = useState(false); // Estado para controlar a edição

  const cameraRef = useRef(null);

  useEffect(() => {
    if (permission?.granted) {
      // Validar permissões
    }
  }, [permission]);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            requestPermission();
          }}
        >
          <MaterialCommunityIcons name="alert" size={24} color="white" />
        </TouchableOpacity>
      </View>
    );
  }

  async function takePicture() {
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePictureAsync();
        setImage(photo.uri); // Define a URI da foto capturada
      } catch (error) {
        console.log('Erro ao tirar foto:', error);
      }
    }
  }

  const pickImage = async () => {

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri); // Define a URI da imagem selecionada
    }
  };

  function handleUsePhoto() {
    Alert.alert('Foto selecionada!', 'A foto foi selecionada e está pronta para envio.');
    setImage(null); // Reseta a visualização para voltar à câmera
  }

  return (
    <View style={styles.container}>
      {image ? (
        // Exibir apenas os botões "Descartar" e "Usar essa foto" ao capturar ou selecionar uma imagem
        <>
          <Image source={{ uri: image }} style={styles.capturedImage} />
          <View style={styles.saveControls}>
            <TouchableOpacity onPress={() => setImage(null)} style={styles.textButton}>
              <Text style={styles.textButtonText}>Descartar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleUsePhoto} style={styles.textButton}>
              <Text style={styles.textButtonText}>Usar essa foto</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : isEditing ? (
        // Enquanto a imagem está sendo editada, exibir um carregamento ou tela neutra
        <View style={styles.editingContainer}>
          <Text style={styles.editingText}>Editando imagem...</Text>
        </View>
      ) : (
        // Exibir os botões da câmera quando nenhuma imagem está sendo exibida
        <>
          <CameraView style={styles.camera} facing={cameraProps.facing} ref={cameraRef} />
          <View style={styles.bottomControls}>
            <TouchableOpacity onPress={pickImage} style={[styles.iconButton, styles.greenButton]}>
              <MaterialCommunityIcons name="image" size={30} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={takePicture} style={styles.captureButton} />
            <TouchableOpacity
              onPress={() =>
                setCameraProps((current) => ({
                  ...current,
                  facing: current.facing === 'back' ? 'front' : 'back',
                }))
              }
              style={[styles.iconButton, styles.greenButton]}
            >
              <MaterialCommunityIcons name="camera-flip" size={30} color="white" />
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  camera: {
    flex: 1,
    width: '100%',
  },
  capturedImage: {
    flex: 1,
    width: '100%',
  },
  editingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  editingText: {
    color: 'white',
    fontSize: 18,
  },
  bottomControls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    position: 'absolute',
    bottom: 50,
    width: '100%',
    paddingHorizontal: 20,
  },
  captureButton: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: 'white',
    borderWidth: 5,
    borderColor: '#ccc',
    marginHorizontal: -30,
  },
  iconButton: {
    padding: 10,
    borderRadius: 5,
  },
  greenButton: {
    backgroundColor: '#057B44',
  },
  saveControls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 150,
    width: '100%',
  },
  textButton: {
    padding: 10,
    backgroundColor: '#057B44',
    borderRadius: 5,
    marginHorizontal: 20,
  },
  textButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
