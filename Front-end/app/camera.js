import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CameraView, useCameraPermissions } from "expo-camera";
import { useLocalSearchParams } from "expo-router";
import * as ImagePicker from "expo-image-picker";
import { useEffect, useRef, useState } from "react";
import {
  Alert,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Svg, { Path } from "react-native-svg";

//Funçao que verifica se é AGRICULTOR ou AGRONOMO

async function checkUserRole(router) {
  try {
    const token = await AsyncStorage.getItem("token");
    const id = await AsyncStorage.getItem("userID");

    console.log("userID:", id);
    console.log("Token:", token);

    if (!token || !id) {
      console.log("Token received:", token);
      console.log("Token de autenticação não encontrado.");
      console.log("ID received:", id);
      console.log("ID não encontrado.");
      return;
    }

    const url = `http://192.168.0.160:3000/api/users/${id}`;
    const headers = { Authorization: `Bearer ${token}` };

    const response = await axios.get(url, { headers });
    const userRole = response.data.role;
    console.log("Role: ", userRole);

    if (userRole === "AGRONOMO") {
      router.push("/diagnosticoAgronomo");
    } else if (userRole === "AGRICULTOR") {
      router.push("/diagnosticoAgricultor");
    } else {
      console.error("Role desconhecida:", userRole);
    }
  } catch (error) {
    console.error("Erro ao verificar a role:", error);
  }
}

export default function CameraScreen() {
  const router = useRouter();

  const { plant_type } = useLocalSearchParams();

  if (!plant_type) {
    console.error("Erro: plant_type não foi passado!");
  }

  useEffect(() => {
    console.log("Planta selecionada:", plant_type);
  }, []);

  const handleBack = () => {
    router.back();
  };

  const { width, height } = Dimensions.get("window");
  const [permission, requestPermission] = useCameraPermissions();
  const [cameraProps, setCameraProps] = useState({
    facing: "back",
    torch: false,
  }); // Incluído torch
  const [image, setImage] = useState(null); // Armazena a imagem capturada ou selecionada

  const cameraRef = useRef(null);

  const Template = () => (
    <Svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d={`M${width} 0H0V${height}H${width}V0ZM${width * 0.84} ${
          height * 0.26
        }H${width * 0.16}V${height * 0.64}H${width * 0.84}V${height * 0.26}Z`}
        fill="black"
        fillOpacity="0.5"
      />
      <Path
        d={`M${width * 0.16} ${height * 0.26}H${width * 0.84}V${
          height * 0.64
        }H${width * 0.16}V${height * 0.26}Z`}
        stroke="#FFEE00"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="bevel"
        strokeDasharray="35 35"
      />
    </Svg>
  );

  useEffect(() => {
    if (permission?.granted) {
      // Validação de permissões
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
        console.log("Erro ao tirar foto:", error);
      }
    }
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri); // Define a URI da imagem selecionada
    }
  };

  async function handleUsePhoto() {
    const url = "http://192.168.0.160:3000/api/files/upload";

    if (!image) {
      Alert.alert("Erro", "Nenhuma imagem para enviar.");
      return;
    }
    console.log("Image URI:", image);

    const formData = new FormData();
    console.log("Depois de criar FormData");

    const filename = "uploaded_image.jpg";
    console.log("Unique File Name:", filename);

    formData.append("file", {
      uri: image,
      name: filename,
      type: "image/jpeg",
    });
    formData.append("plant_type", plant_type); //precisa ser passado / append fora pq ele não faz parte do OBJETO file!!!!!!!
    try {
      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      Alert.alert("Sucesso", "Imagem enviada com sucesso!");
      console.log("Resposta do servidor:", response.data); //espero dar certo

      if (response.data && response.data.filename) {
        const uploadedFilename = response.data.filename;
        console.log("Salvando filename:", uploadedFilename);
        await AsyncStorage.setItem("PlantImageFilename", uploadedFilename);
      } else {
        console.error("Erro: O backend não retornou um filename válido.");
      }

      console.log("Salvando a foto: ", image);
      await AsyncStorage.setItem("PlantImage", image);

      if (response.data.prediction) {
        await AsyncStorage.setItem("PlantPrediction", response.data.prediction);
        console.log("Diagnóstico salvo:", response.data.prediction);
      }

      await checkUserRole(router);
    } catch (error) {
      console.error("Erro ao enviar a imagem:", error);
      Alert.alert("Erro", "Falha ao enviar a imagem.");
    }
    setImage(null);
  }

  return (
    <View style={styles.container}>
      {image ? (
        // Exibir apenas os botões "Descartar" e "Usar foto" ao capturar ou selecionar uma imagem
        <>
          <Image source={{ uri: image }} style={styles.capturedImage} />
          <View style={styles.blackBackground}>
            <TouchableOpacity
              onPress={() => setImage(null)}
              style={[styles.button, styles.redButton]}
            >
              <Text style={styles.buttonText}>Descartar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleUsePhoto(plant_type)}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Usar foto</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        // Exibir os botões da câmera quando nenhuma imagem está sendo exibida
        <>
          <TouchableOpacity onPress={handleBack} style={styles.backButton}>
            <Ionicons name="arrow-back-circle-outline" size={50} color="#fff" />
          </TouchableOpacity>
          <CameraView
            style={styles.camera}
            facing={cameraProps.facing}
            ref={cameraRef}
            enableTorch={cameraProps.torch} // Configuração do flash com enableTorch
          />
          <View style={styles.templateOverlay}>
            <Template style={styles.template} />
          </View>
          <View style={styles.flashButtonContainer}>
            <TouchableOpacity
              onPress={() =>
                setCameraProps((current) => ({
                  ...current,
                  torch: !current.torch,
                }))
              }
              style={[styles.iconButton, styles.moreTransparentBlackButton]}
            >
              <MaterialCommunityIcons
                name={cameraProps.torch ? "flash" : "flash-off"}
                size={20}
                color="white"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.bottomControls}>
            <View style={styles.iconWithLabel}>
              <TouchableOpacity
                onPress={pickImage}
                style={[styles.iconButton, styles.moreTransparentBlackButton]}
              >
                <MaterialCommunityIcons name="image" size={30} color="white" />
              </TouchableOpacity>
              <Text style={styles.iconLabel}>Galeria</Text>
            </View>
            <TouchableOpacity
              onPress={takePicture}
              style={styles.captureButton}
            />
            <View style={styles.iconWithLabel}>
              <TouchableOpacity
                onPress={() =>
                  setCameraProps((current) => ({
                    ...current,
                    facing: current.facing === "back" ? "front" : "back",
                  }))
                }
                style={[styles.iconButton, styles.moreTransparentBlackButton]}
              >
                <MaterialCommunityIcons
                  name="camera-flip"
                  size={30}
                  color="white"
                />
              </TouchableOpacity>
              <Text style={styles.iconLabel}>Trocar</Text>
            </View>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  camera: {
    flex: 1,
    width: "100%",
  },
  capturedImage: {
    flex: 1,
    width: "100%",
  },
  bottomControls: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    position: "absolute",
    bottom: 50,
    width: "100%",
    paddingHorizontal: 20,
  },
  captureButton: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "white",
    borderWidth: 5,
    borderColor: "#ccc",
    marginHorizontal: -30,
  },
  iconButton: {
    width: 60,
    height: 60,
    borderRadius: 30, // Botão redondo
    justifyContent: "center",
    alignItems: "center",
  },
  moreTransparentBlackButton: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    opacity: 0.9, // Preto mais transparente
  },
  flashButtonContainer: {
    position: "absolute",
    top: 60,
    right: 20,
  },
  blackBackground: {
    width: "100%",
    height: 150, // Altura do fundo preto
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    opacity: 0.9, // Preto mais transparente
    position: "absolute",
    bottom: 0,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    opacity: 1,
  },
  button: {
    width: 150,
    height: 65,
    borderRadius: 15,
    borderCurve: "continuous",
    backgroundColor: "#057B44",
    justifyContent: "center",
    alignItems: "center",
  },
  redButton: {
    backgroundColor: "#A80000", // Cor vermelha para botão Descartar
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  templateOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  template: {
    width: "100%",
    height: "100%",
  },
  iconWithLabel: {
    alignItems: "center",
  },
  iconLabel: {
    color: "white",
    marginTop: 5,
    fontSize: 14,
  },
  backButton: {
    position: "absolute",
    top: 70,
    left: 20,
    zIndex: 10,
  },
});
