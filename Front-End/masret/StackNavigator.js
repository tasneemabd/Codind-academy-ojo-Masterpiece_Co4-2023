import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, AntDesign, Ionicons,MaterialIcons } from "@expo/vector-icons";

//Screens
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import HomePage from "./screens/HomePage";
import ProfileScreen from "./screens/ProfileScreen";
import PatientProfileScreen from "./screens/PatientProfileScreen";
import LabResults from "./screens/LabResults";
import XRayResults from "./screens/XRayResults";
import Myvisit from "./screens/Myvisit";


const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  function BottomTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomePage}
          options={{
            tabBarLabel: "Home",
            backgroundColor: "black",
            tabBarLabelStyle: { color: "black" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="home" size={30} color="#566D8F" />
              ) : (
                <AntDesign name="home" size={30} color="#566D8F" />
              ),
          }}
        />
       <Tab.Screen
            name="Profile"
            component={PatientProfileScreen}
            options={{
              tabBarLabel: "Profile",
              tabBarLabelStyle: { color: "black" },
              headerShown: false,
              tabBarIcon: ({ focused }) =>
                focused ? (
                  <Ionicons name="person" size={30} color="#566D8F" />
                ) : (
                  <Ionicons name="person-outline" size={30} color="#566D8F" />
                ),
            }}
          />
       <Tab.Screen
            name="LabResults"
            component={LabResults}
            options={{
              tabBarLabel: "LabResults",
              tabBarLabelStyle: { color: "black" },
              headerShown: false,
              tabBarIcon: ({ focused }) =>
                focused ? (
                  <Ionicons name="person" size={30} color="#566D8F" />
                ) : (
                  <Ionicons name="person-outline" size={30} color="#566D8F" />
                ),
            }}
          />
       <Tab.Screen
            name="XRayResults"
            component={XRayResults}
            options={{
              tabBarLabel: "XRayResults",
              tabBarLabelStyle: { color: "black" },
              headerShown: false,
              tabBarIcon: ({ focused }) =>
                focused ? (
                  <Ionicons name="person" size={30} color="#566D8F" />
                ) : (
                  <Ionicons name="person-outline" size={30} color="#566D8F" />
                ),
            }}
          />
       <Tab.Screen
            name="Myvisit"
            component={Myvisit}
            options={{
              tabBarLabel: "Myvisit",
              tabBarLabelStyle: { color: "black" },
              headerShown: false,
              tabBarIcon: ({ focused }) =>
                focused ? (
                  <Ionicons name="person" size={30} color="#566D8F" />
                ) : (
                  <Ionicons name="person-outline" size={30} color="#566D8F" />
                ),
            }}
          />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
        
       
   
     
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
