import React from "react";
import { View, Text, StyleSheet } from "react-native"; // Import StyleSheet

import { AppBar, HStack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const Bar = () => (
  <AppBar
    title="Title"
    style={styles.appBar}
    leading={props => (
      <IconButton icon={props => <Icon name="menu" {...props} />} {...props} />
    )}
    trailing={props => (
      <HStack>
        <IconButton
        
          icon={props => <Icon name="magnify" {...props}  />}
          {...props}
        />
        <IconButton
          icon={props => <Icon name="dots-vertical" {...props} />}
          {...props}
        />
      </HStack>
    )}
  />
);
const styles = StyleSheet.create({
    appBar: {
      backgroundColor: "#566D8F", 
      padding:10,
    },
    iconButton: {
      // Styles for IconButton
    },
    trailingButtons: {
      // Styles for the HStack containing IconButton components
    },
  });

export default Bar;