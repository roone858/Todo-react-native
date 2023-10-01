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
import { storeData } from "../utils/asyncStorage";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/slice/todo-slice";

export default function TodoForm() {
  const os = Platform.OS;
  const dispach = useDispatch();
  const todos = useSelector((state) => state.todos.data);
  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  const handleAddBtn = (title, description) => {
    const isTodoFound = todos.find((todo) => todo.title == title);
    if (!isTodoFound && title && description) {
      const newTodo = {
        id: todos.length + 1,
        title: title,
        description: description,
        isComplete: false,
      };
      dispach(addTodo(newTodo));
    }
  };

  useEffect(() => {
    storeData(todos);
    console.log("Global State Changed");
  }, [todos]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
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
              onPress={() => handleAddBtn(title, description)}
            >
              <Text style={styles.buttonText}>Add </Text>
            </Pressable>
          </View>
<View style={{width:"80%" ,marginHorizontal:"auto"}}>

          <TodoList todos={todos} />
</View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
