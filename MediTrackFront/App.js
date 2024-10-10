import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Image, StyleSheet, View } from 'react-native';
import Navbar from './Components/Navbar'; 

const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
    
        <Image source={require('./assets/meditrack.png')} style={styles.logo} />

        <Navbar />
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 150,  
    height: 100, 
    alignSelf: 'left', 
    marginTop: 25,       
  },
});

export default App;
