import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AddScreen from '../Screens/AddScreen';
import SettingsScreen from '../Screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const Navbar = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'white', 
        tabBarInactiveTintColor: 'white', 
        tabBarStyle: {
          backgroundColor: '#4A90E2', 
        },
      }}
    >
      <Tab.Screen
        name="Accueil"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="signal-cellular-alt" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Ajouter"
        component={AddScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="add-circle" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Paramètres"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Navbar;
