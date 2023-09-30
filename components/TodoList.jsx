import React from "react";
import { View, Text, FlatList } from "react-native";
import { styles } from "../StyleSheet";
import Todo from "./Todo";

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  return (
    <>
      {todos.map((item) => (
        <Todo item={item} key={item.id} deleteItem={deleteTodo} completeTodo={completeTodo} />
      ))}
    </>
  );
};

export default TodoList;
