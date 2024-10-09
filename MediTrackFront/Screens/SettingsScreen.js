import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Écran des paramètres</Text>

      <TouchableOpacity style={styles.blueButton}>
        <Text style={styles.buttonText}>Gestion des rappels</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.blueButton}>
        <Text style={styles.buttonText}>Médicament 1</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.blueButton}>
        <Text style={styles.buttonText}>Médicament 2</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.blueButton}>
        <Text style={styles.buttonText}>Profil utilisateur</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.blueButton}>
        <Text style={styles.buttonText}>Notifications</Text>
      </TouchableOpacity>

      {/* Bouton de déconnexion rouge */}
      <TouchableOpacity style={styles.redButton}>
        <Text style={styles.buttonText}>Déconnexion</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  blueButton: {
    backgroundColor: '#4A90E2', 
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 5,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  redButton: {
    backgroundColor: '#FF3B30', 
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 5,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default SettingsScreen;
