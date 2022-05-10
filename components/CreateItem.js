import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableHighlight,
} from "react-native";
import uuid from "react-native-uuid";

const CreateItem = ({ listOfItems, setListOfItems }) => {
  const [value, setValue] = useState("");

  const onChange = (value) => {
    setValue(value);
  };

  const addItem = () => {
    if (value.trim() !== "") {
      setListOfItems([
        ...listOfItems,
        {
          key: uuid.v4(),
          text: value,
        },
      ]);
      setValue("");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        placeholder={"Впишите задачу"}
      />
      <TouchableHighlight style={styles.btn} onPress={addItem}>
        <Text style={styles.btnText}>Добавить</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: "green",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  btn: {
    backgroundColor: "#2196F3",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default CreateItem;
