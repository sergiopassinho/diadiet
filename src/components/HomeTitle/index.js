import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Voltar</Text>
      </TouchableOpacity>
      <Text style={styles.textTitle}>DiaDiet</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Filtro</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10
  },
  textTitle: {
    color: "#86d8f4",
    fontSize: 24
  },
  button: {
    backgroundColor: "transparent"
  },
  textButton: {
    color: "#86d8f4",
    fontSize: 16
  }
})

export default Header;