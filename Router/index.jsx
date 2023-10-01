import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNavigator from "./StackNavigator";
import CompletedPage from "../pages/CompletedPage";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { fetchTodos } from "../redux/slice/todo-slice";

const Tab = createBottomTabNavigator();

const Router = () => {
  
  const dispach = useDispatch();
  dispach(fetchTodos());

  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            route.name === "Home"
              ? (iconName = "home")
              : route.name === "Completed"
              ? (iconName = "checkbox")
              : "";
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={StackNavigator} />
        <Tab.Screen name="Completed" component={CompletedPage} />
      </Tab.Navigator>
    </>
  );
};

export default Router;
