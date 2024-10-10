import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Home = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDatePress = (date) => {
    setSelectedDate(date);
  };

  const renderDay = (day) => (
    <TouchableOpacity 
      key={day}
      onPress={() => handleDatePress(day)}
      style={[
        styles.calendarDay,
        selectedDate === day && styles.selectedDay
      ]}
    >
      <Text style={styles.dayText}>{day}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* En-tête de l'application */}
      <View style={styles.header}>
      </View>

      {/* Boutons Hebdo, Mensuel, Annuel */}
      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.tabButton}>
          <Text style={styles.buttonText}>Hebdo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tabButton, styles.activeTab]}>
          <Text style={[styles.buttonText, styles.activeText]}>Mensuel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <Text style={styles.buttonText}>Annuel</Text>
        </TouchableOpacity>
      </View>

      {/* Calendrier */}
      <View style={styles.calendarContainer}>
        <Text style={styles.calendarText}>L    M    M    J    V    S    D</Text>

        <View style={styles.week}>
          {['1', '2', '3', '4', '5', '6', '7'].map(renderDay)}
        </View>
        <View style={styles.week}>
          {['8', '9', '10', '11', '12', '13', '14'].map(renderDay)}
        </View>
        <View style={styles.week}>
          {['15', '16', '17', '18', '19', '20', '21'].map(renderDay)}
        </View>
        <View style={styles.week}>
          {['22', '23', '24', '25', '26', '27', '28'].map(renderDay)}
        </View>
        <View style={styles.week}>
          {['29', '30', '31'].map(renderDay)}
        </View>
      </View>

      {/* Jours consécutifs */}
      <View style={styles.counterContainer}>
        <View style={styles.counter}>
          <Text style={styles.counterText}>56</Text>
        </View>
        <Text style={styles.counterLabel}>jours consécutifs</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF0F6',
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  tabButton: {
    backgroundColor: '#D9E6F2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  activeTab: {
    backgroundColor: '#B0EACD',
  },
  buttonText: {
    fontSize: 16,
    color: '#555',
  },
  activeText: {
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  calendarContainer: {
    backgroundColor: '#DCE8F4',
    borderRadius: 10,
    padding: 20,
    marginBottom: 30,
  },
  calendarText: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 16,
  },
  week: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  calendarDay: {
    padding: 10,
    backgroundColor: '#D9E6F2',
    borderRadius: 10,
    width: 40,
    alignItems: 'center',
  },
  selectedDay: {
    backgroundColor: '#6CEAB7',
  },
  dayText: {
    fontSize: 16,
    color: '#555',
  },
  counterContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  counter: {
    backgroundColor: '#6CEAB7',
    borderRadius: 50,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  counterText: {
    fontSize: 36,
    color: '#FFFFFF',
  },
  counterLabel: {
    fontSize: 16,
    color: '#555',
  },
});

export default Home;
