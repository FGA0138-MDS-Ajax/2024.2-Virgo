import { useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function WelcomeScreen() {
  const router = useRouter();

  const handleLogin = () => {
    console.log('Redirecionando para /login...');
    router.push('/login'); // Redireciona para a tela de login
  };

  const handleRegister = () => {
    console.log('Redirecionando para /register...');
    router.push('/register'); // Redireciona para a tela de cadastro
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require('../assets/images/app-icon-logo.png')}
        style={styles.logo}
      />

      {/* Nome do app */}
      <Text style={styles.title}>Plant Check</Text>

      {/* Botão "Já tenho conta" */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Já tenho conta</Text>
      </TouchableOpacity>

      {/* Botão "Criar conta" */}
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Criar conta</Text>
      </TouchableOpacity>

      {/* Mensagem sobre Termos de Serviço */}
      <Text style={styles.termsText}>
        Ao criar uma conta, você concorda com os{' '}
        <Text style={styles.linkText}>Termos de Serviço</Text>, incluindo nossa{' '}
        <Text style={styles.linkText}>Política de Privacidade</Text>.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FEFEFE',
    paddingBottom: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
    marginTop: -200,
  },
  icon: {
    marginBottom: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  button: {
    width: 270,
    height: 45,
    borderRadius: 21, 
    borderWidth: 1, 
    borderColor: '#277345', 
    backgroundColor: '#fff', 
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#057B44', 
    fontSize: 16,
    fontWeight: 'bold',
  },
  termsText: {
    width: 260, // Mesma largura do botão
    fontSize: 10, // Fonte reduzida
    color: '#1A4D2E',
    textAlign: 'left', // Alinhado à esquerda
    marginTop: 10,
    marginLeft: 10, // Espaço entre o botão e o texto
    lineHeight: 14, // Melhor espaçamento para fonte pequena
  },
  linkText: {
    color: '#0D2717', // Cor para "Termos de Serviço" e "Política de Privacidade"
    fontWeight: 'bold', // Negrito
  },
});
