import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { retrieveData, storeData } from "../utils/asyncStorage";
import TodoList from "../components/TodoList";
const CompletedPage = () => {
  const [todos, setTodos] = useState([]);

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const completeTodo = (id, value) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id == id) {
          todo.isComplete = value;
        }
        return todo;
      })
    );
  };

  useEffect(() => {
    (async () => {
      const result = await retrieveData();
      result.length > 0 ? setTodos(result) : setTodos([]);
    })();
  }, []);

  useEffect(() => {
    storeData(todos);
  }, [todos]);

  return (
    <View>
      <TodoList
        completeTodo={completeTodo}
        todos={todos?.filter((item) => item.isComplete)}
        deleteTodo={deleteTodo}
      />
    </View>
  );
};

export default CompletedPage;
