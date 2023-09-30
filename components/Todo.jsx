import { View, Text, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import CheckBoxComponent from "./CheckBoxComponent";
import { styles } from "../StyleSheet";

const Todo = ({ item,deleteItem ,completeTodo}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: "auto",
        backgroundColor: "#fff",
        width: "80%",
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 5,
        padding: 15,
        margin: 5,
      }}
    >
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <CheckBoxComponent item={item} completeTodo={completeTodo} />
        <Text
          style={{ color: "#111", padding: 5, fontSize: 18 }}
          onPress={() => navigation.navigate("todo-details", item)}
        >
          {item.id}- {item.title}
        </Text>
      </View>
      <Pressable
        style={{
          backgroundColor: "#111",
          justifyContent: "center",
          borderRadius: 5,
          padding: 5,
          alignItems: "center",
        }}
        onPress={() => deleteItem(item.id)}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 15,
            textAlign: "center",
          }}
        >
          Delete{" "}
        </Text>
      </Pressable>
    </View>
  );
};

export default Todo;
