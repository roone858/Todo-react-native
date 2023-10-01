import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TodoForm from "../components/TodoForm";
import { SafeAreaView, ScrollView } from "react-native";
import TodoDetails from "../components/TodoDetails";
import Welcome from "../pages/Welcome";
const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
   
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="TodoForm"
        >
          <Stack.Screen name="TodoForm" component={TodoForm} />
          <Stack.Screen name="todo-details" component={TodoDetails} />
          {/* <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} /> */}
        </Stack.Navigator>

  );
};

export default StackNavigator;
