import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function forgotPassword() {
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
    marginTop: 51, 
    textAlign: 'center', 
  },
  cardContent: {
    fontSize: 12,
    color: '#1A4D2E',
    textAlign: 'center',
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
});
