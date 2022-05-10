import React from "react";
import { View, FlatList } from "react-native";
import ListItem from "./ListItem";

const List = ({ listOfItems, setListOfItems }) => {
  return (
    <View>
      <FlatList
        data={listOfItems}
        renderItem={({ item }) => (
          <ListItem
            el={item}
            setListOfItems={setListOfItems}
            listOfItems={listOfItems}
          />
        )}
      />
    </View>
  );
};

export default List;
