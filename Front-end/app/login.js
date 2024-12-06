import { useRouter } from 'expo-router';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
  const router = useRouter();

  const handleLogin = () => {
    // Simula o login
    console.log('Login bem-sucedido, redirecionando para (tabs)...');
    router.replace('(tabs)');
  };

  const handleRegister = () => {
    // Redireciona para a tela de cadastro
    console.log('Redirecionando para /register...');
    router.push('/register'); // Caminho real da tela de cadastro
  };

  const handleForgotPassword = () => {
    console.log('Redirecionando para /forgot-password...');
    router.push('/forgot-password'); // Caminho real da tela de recuperação
  };

  return (
    <View style={styles.container}>
      
      <Image
        source={require('../assets/images/app-icon-logo.png')}
        style={styles.logo}
      />

      <Text style={styles.title}>Entrar</Text>
      
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#1A4D2E"
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#1A4D2E"
        //secureTextEntry={!passwordVisible}
      />

      {/*
      <TouchableOpacity
          style={styles.eyeButton}
          onPress={() => setPasswordVisible(!passwordVisible)}
      />
      */}

      <TouchableOpacity style={styles.forgotPasswordContainer} onPress={handleForgotPassword}>
        <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      {/* Texto de redirecionamento para cadastro */}
      <TouchableOpacity style={styles.registerContainer} onPress={handleRegister}>
        <Text style={styles.registerText}>
          Não possui uma conta? <Text style={styles.registerLink}>Cadastrar</Text>
        </Text>
      </TouchableOpacity>
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
  marginBottom: 70, 
  marginTop: -70,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: 270,
    height: 45,
    borderWidth: 1,
    borderColor: '#277345',
    borderRadius: 6,
    paddingHorizontal: 10,
    marginBottom: 15,
    color: '#000',
    backgroundColor: '#fff',
  },
  forgotPasswordContainer: {
    alignSelf: 'flex-end',
    marginRight: '16%', // 
    marginBottom: 20,
  },
  forgotPasswordText: {
    fontSize: 14,
    color: '#057B44',
    fontWeight: 'bold',
  },
  button: {
    width: 270,
    height: 55,
    backgroundColor: '#057B44',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerContainer: {
    marginTop: 20,
  },
  registerText: {
    fontSize: 14,
    color: '#057B44',
    textAlign: 'center',
  },
  registerLink: {
    color: '#000000',
    fontWeight: 'bold',
  },
});