import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

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
    borderRadius: 20, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.25, 
    shadowRadius: 4, 
    elevation: 5, 
    padding: 20, 
    justifyContent: 'flex-start', 
    alignItems: 'center', 
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0D2717',
    marginBottom: 20, 
    textAlign: 'center', 
  },
  cardContent: {
    fontSize: 12,
    color: '#1A4D2E',
    textAlign: 'center',
  },
});
