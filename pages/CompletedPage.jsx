import { View } from "react-native";
import React from "react";
import TodoList from "../components/TodoList";
import { useSelector } from "react-redux";
import { styles } from "../StyleSheet";

const CompletedPage = () => {
  const todos = useSelector((state) => state.todos.data);
  return (
    <View style={styles.container}>
      <TodoList todos={todos?.filter((item) => item.isComplete)} />
    </View>
  );
};

export default CompletedPage;
