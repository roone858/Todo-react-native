import React from "react";

import Todo from "./Todo";
import { ScrollView, View } from "react-native";

const TodoList = ({ todos }) => {
  // const todos = useSelector((state) => state.todos.data);
  return (
   
      <View style={{alignItems:"center"}} >
        {todos.map((item) => (
          <Todo item={item} key={item.id} />
        ))}
      </View>
 
  );
};

export default TodoList;
