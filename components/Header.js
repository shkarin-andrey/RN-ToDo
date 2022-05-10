import { StyleSheet, View, Text } from "react-native";
import React from "react";

export default function Header() {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>Список дел</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    justifyContent: "center",
    height: 100,
    backgroundColor: "silver",
  },
  text: {
    color: "#333",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
});
