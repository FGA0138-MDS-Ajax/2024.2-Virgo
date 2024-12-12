import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function forgotPassword() {
  
  const router = useRouter();

  const handleSend = () => {
    // Simula o login
    console.log('Login bem-sucedido, redirecionando para (tabs)...');
    router.push('/forgotPasswordCheckEmail'); // Caminho real da tela de recuperação
  };

  return (
    <View style={styles.container}>
      {/* Card */}
      <View style={styles.card}>
        {/* Título */}
        <Text style={styles.cardTitle}>Esqueci minha senha</Text>

        <Text style={styles.cardContent}>
          Digite o seu e-mail no campo abaixo e você receberá um código para trocar sua senha.
        </Text>

        <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#1A4D2E"
        keyboardType="email-address"
        />

        <TouchableOpacity style={styles.button} onPress={handleSend}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#FEFEFE',
  },
  card: {
    width: 316,
    height: 290,
    backgroundColor: '#fff',
    borderRadius: 6, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.4, 
    shadowRadius: 5, 
    elevation: 4, 
    padding: 20, 
    justifyContent: 'flex-start', 
    alignItems: 'center', 
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0D2717',
    marginBottom: 20,
    marginTop: 20, 
    textAlign: 'center', 
  },
  cardContent: {
    fontSize: 12,
    color: '#1A4D2E',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    width: 284,
    height: 39,
    borderWidth: 1,
    borderColor: '#277345',
    borderRadius: 6,
    paddingHorizontal: 10,
    marginBottom: 15,
    color: '#000',
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  button: {
    width: 284,
    height: 42,
    backgroundColor: '#057B44',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
