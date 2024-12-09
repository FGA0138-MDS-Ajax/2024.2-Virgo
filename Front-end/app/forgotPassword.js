import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function forgotPassword() {
  return (
    <View style={styles.container}>
      {/* Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Título do Card</Text>
        <Text style={styles.cardContent}>
          Este é o conteúdo do card. 
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
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 20, 
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1A4D2E',
    marginBottom: 10, 
  },
  cardContent: {
    fontSize: 14,
    color: '#757575',
    textAlign: 'center',
  },
});
