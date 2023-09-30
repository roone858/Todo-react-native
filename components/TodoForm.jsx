import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
  Pressable,
  Platform,
} from "react-native";

import TodoList from "./TodoList";
import { styles } from "../StyleSheet";
import { retrieveData, storeData } from "../utils/asyncStorage";

export default function TodoForm() {
  const os = Platform.OS;
  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);
  const addTodo = (title, description) => {
    const isTodoFound = todos.find((todo) => todo.title == title);
    if (!isTodoFound && title && description)
      setTodos([
        ...todos,
        { id: todos.length + 1, title, description, isComplete: false },
      ]);
  };

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
    <SafeAreaView>
      <ScrollView>
        <View>
          <View style={{ ...styles.container, marginBottom: "5rem" }}>
            <Text
              style={{
                ...styles.header,
                color: os == "ios" ? "black" : "gray",
              }}
            >
              To-Do App
            </Text>

            <TextInput
              style={styles.input}
              onChangeText={(text) => setTitle(text)}
              value={title}
              placeholder="Enter Title"
            />

            <TextInput
              style={styles.input}
              onChangeText={(text) => setDescription(text)}
              value={description}
              placeholder="Enter Description"
            />

            <Pressable
              style={styles.button}
              onPress={() => addTodo(title, description)}
            >
              <Text style={styles.buttonText}>Add </Text>
            </Pressable>
          </View>
          <View style={{alignItems:"center"}}>
            <TodoList
              todos={todos}
              deleteTodo={deleteTodo}
              completeTodo={completeTodo}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
