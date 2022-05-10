import { useState } from "react";
import { View } from "react-native";
import CreateItem from "./components/CreateItem";
import Header from "./components/Header";
import List from "./components/List";

export default function App() {
  const [listOfItems, setListOfItems] = useState([
    {
      key: "1",
      text: "Купить молоко",
    },
    {
      key: "2",
      text: "Купить хлеб",
    },
    {
      key: "3",
      text: "Купить рубашку",
    },
  ]);

  return (
    <View>
      <Header />
      <CreateItem listOfItems={listOfItems} setListOfItems={setListOfItems} />
      <List listOfItems={listOfItems} setListOfItems={setListOfItems} />
    </View>
  );
}
