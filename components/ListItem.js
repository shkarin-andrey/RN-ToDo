import React from "react";
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";

const ListItem = ({ el, setListOfItems, listOfItems }) => {
  const deleteItem = () => {
    const formatedListItems = listOfItems.filter((x) => x.key !== el.key);
    setListOfItems(formatedListItems);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{el.text}</Text>
      <TouchableHighlight style={styles.btn} onPress={deleteItem}>
        <Text style={styles.btnText}>x</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fafafa",
    borderBottomWidth: 1,
    borderColor: "silver",
  },
  btn: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  btnText: {
    color: "white",
    fontSize: 30,
  },
});

export default ListItem;
