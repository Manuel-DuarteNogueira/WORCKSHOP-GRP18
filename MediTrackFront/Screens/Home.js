import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 
import Feather from '@expo/vector-icons/Feather';

const Home = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');
  const [input5, setInput5] = useState('');
  const [input6, setInput6] = useState('');

  return (
    <View style={styles.container}>
   
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput} 
          placeholder="Nom du traitement" 
          placeholderTextColor="#fff" 
          value={input1}
          onChangeText={setInput1}
          textAlign="center"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput} 
          placeholder="Dose à prendre en (mg)" 
          placeholderTextColor="#fff" 
          value={input2}
          onChangeText={setInput2}
          textAlign="center"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput} 
          placeholder="Fréquence de prise" 
          placeholderTextColor="#fff" 
          value={input3}
          onChangeText={setInput3}
          textAlign="center"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput} 
          placeholder="Heure de prise" 
          placeholderTextColor="#fff" 
          value={input4}
          onChangeText={setInput4}
          textAlign="center"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput} 
          placeholder="Durée du traitement" 
          placeholderTextColor="#fff" 
          value={input5}
          onChangeText={setInput5}
          textAlign="center"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput} 
          placeholder="Notes aditionnelles" 
          placeholderTextColor="#fff" 
          value={input6}
          onChangeText={setInput6}
          textAlign="center"
        />
      </View>

     
      <TouchableOpacity style={styles.circularButton} onPress={() => alert('Validé !')}>
        <Feather name="check-circle" size={70} color="#fff" /> 
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
    paddingBottom:80,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 15,
    backgroundColor: '#4A90E2',
    borderRadius: 5,
    padding: 10,
  },
  textInput: {
    height: 40,
    color: 'white',
    paddingHorizontal: 10,
    textAlign: 'center',
  },
  circularButton: {
    backgroundColor: '#50E3C2',   
    width: 100,                
    height: 100,               
    borderRadius: 40,         
    justifyContent: 'center', 
    alignItems: 'center',     
    position: 'absolute',     
    bottom: 10,               
  },
});

export default Home;
