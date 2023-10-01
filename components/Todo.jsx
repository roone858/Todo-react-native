import { View, Text, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import CheckBoxComponent from "./CheckBoxComponent";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../redux/slice/todo-slice";

const Todo = ({ item }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
       
        backgroundColor: "#fff",
        width: "100%",
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
        <CheckBoxComponent item={item} />
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
        onPress={() => dispatch(deleteTodo(item.id))}
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
