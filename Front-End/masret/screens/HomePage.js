import { useState, useEffect, useCallback } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  SafeAreaView,
  Pressable,
  StatusBar,
  StyleSheet,
  Platform,
  ScrollView,
} from "react-native";
import Categories from "./Categories";
import StackNavigator from "../StackNavigator";
import Bar from "./Bar";


export default function HomePage() {
  const [os, setOs] = useState(Platform.OS);

  return (
   <>
    
        
          
           <Bar/>
      
         <Categories/>
  
   </>
  );
}

