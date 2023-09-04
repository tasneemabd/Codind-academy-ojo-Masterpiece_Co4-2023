import { StyleSheet } from "react-native";


import Card from "./Card";
import Categories from "./screens/Categories";
import SignUpScreen from "./screens/SignUpScreen";
import LoginScreen from "./screens//LoginScreen";
import StackNavigator from "./StackNavigator";

export default function App() {
  return (
    <>

        <StackNavigator/>
       
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
