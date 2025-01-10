import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { CameraView, useCameraPermissions } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';
import { useEffect, useRef, useState } from 'react';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [permission, requestPermission] = useCameraPermissions();
  const [mediaLibraryPermission, requestMediaLibraryPermission] = MediaLibrary.usePermissions();
  const [imagePickerPermission, requestImagePickerPermission] = ImagePicker.useMediaLibraryPermissions();
  const [cameraProps, setCameraProps] = useState({
    facing: 'back',
  });
  const [image, setImage] = useState(null);

  const cameraRef = useRef(null);

  useEffect(() => {
    if (
      permission?.granted &&
      mediaLibraryPermission?.status === 'granted' &&
      imagePickerPermission?.status === 'granted'
    ) {
      // Future use: loading previous image if needed
    }
  }, [permission, mediaLibraryPermission, imagePickerPermission]);

  if (!permission || !mediaLibraryPermission || !imagePickerPermission) {
    return <View />;
  }

  if (
    !permission.granted ||
    mediaLibraryPermission.status !== 'granted' ||
    imagePickerPermission.status !== 'granted'
  ) {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            requestPermission();
            requestMediaLibraryPermission();
            requestImagePickerPermission();
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
        setImage(photo.uri);
      } catch (error) {
        console.log('Error taking picture:', error);
      }
    }
  }

  async function openGallery() {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: false, // Desativa o recorte
        quality: 1, // Mantém a qualidade total
      });

      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    } catch (error) {
      console.log('Error accessing gallery:', error);
    }
  }

  async function savePicture() {
    if (image) {
      try {
        await MediaLibrary.createAssetAsync(image);
        Alert.alert('Foto salva com sucesso!');
        setImage(null);
      } catch (error) {
        console.log('Error saving picture:', error);
      }
    }
  }

  function toggleProperty(property, value1, value2) {
    setCameraProps((current) => ({
      ...current,
      [property]: current[property] === value1 ? value2 : value1,
    }));
  }

  return (
    <View style={styles.container}>
      {!image ? (
        <>
          <CameraView
            style={styles.camera}
            facing={cameraProps.facing}
            ref={cameraRef}
          />
          <View style={styles.bottomControls}>
            <TouchableOpacity onPress={openGallery} style={[styles.iconButton, styles.greenButton]}>
              <MaterialCommunityIcons name="image" size={30} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={takePicture} style={styles.captureButton} />
            <TouchableOpacity
              onPress={() => toggleProperty('facing', 'back', 'front')}
              style={[styles.iconButton, styles.greenButton]}
            >
              <MaterialCommunityIcons name="camera-flip" size={30} color="white" />
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <>
          <Image source={{ uri: image }} style={styles.capturedImage} />
          <View style={styles.saveControls}>
            <TouchableOpacity onPress={() => setImage(null)} style={styles.textButton}>
              <Text style={styles.textButtonText}>Descartar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={savePicture} style={styles.textButton}>
              <Text style={styles.textButtonText}>Salvar</Text>
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
    bottom: 150, // Posicionamento ajustado para mover os botões mais para cima
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
