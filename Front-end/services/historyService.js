import axios from "axios";

const API_URL = "http://192.168.0.160:3000/api/files/history"; // Substitua pelo seu IP/URL do servidor

export const fetchHistory = async (userId, token) => {
  try {
    const response = await axios.get(`${API_URL}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar histórico:", error);
    return [];
  }
};

export const saveHistory = async (userId, diagnosis, imageUri, token) => {
  try {
    await axios.post(
      API_URL,
      {
        userId,
        diagnostico: diagnosis,
        foto: imageUri,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
  } catch (error) {
    console.error("Erro ao salvar histórico:", error);
  }
};
