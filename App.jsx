import Router from "./Router";
import { NavigationContainer } from "@react-navigation/native";
import { store } from "./redux/index";
import { Provider } from "react-redux";

export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </Provider>
  );
}
