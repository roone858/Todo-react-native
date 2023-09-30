import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNavigator from "./StackNavigator";
import CompletedPage from "../pages/CompletedPage";
import TodoDetails from "../components/TodoDetails";
import { Ionicons } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
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

      {/* <Tab.Screen name="Notifications" component={Notifications} />
        <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Settings" component={Settings} /> */}
    </Tab.Navigator>
  );
};

export default TabNavigation;
