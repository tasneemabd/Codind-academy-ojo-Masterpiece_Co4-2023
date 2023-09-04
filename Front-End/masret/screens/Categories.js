import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';
import Card from '../Card';
import MenuAppBar from '../MenuAppBar';
import StackNavigator from '../StackNavigator';


const CategoryIcon = ({ iconName, iconType, label }) => {
  return (
    <View style={styles.iconContainer}>
      <View style={styles.circle}>
        <Icon name={iconName} type={iconType} color="#566D8F" size={30} />
      </View>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

export default function Categories() {

    
  const categories = [
    { iconName: 'user', iconType: 'font-awesome', label: 'Profile ' },
    { iconName: 'star', iconType: 'font-awesome', label: 'X-rays' },
    { iconName: 'home', iconType: 'font-awesome', label: 'Lab Results' },
    { iconName: 'cog', iconType: 'font-awesome', label: 'Medication' },
    { iconName: 'globe', iconType: 'font-awesome', label: 'All Doctors' },
    { iconName: 'music', iconType: 'font-awesome', label: 'Surgery' },
    { iconName: 'camera', iconType: 'font-awesome', label: 'My visit' },
    { iconName: 'book', iconType: 'font-awesome', label: 'llergy' },
  ];

  const firstRow = categories.slice(0, 4);
  const secondRow = categories.slice(4, 8);

  return (
    <>
   
    <View style={styles.container}>
      <Card/>
      
      <View style={styles.row}>
        {firstRow.map((category, index) => (
          <CategoryIcon
            key={index}
            iconName={category.iconName}
            iconType={category.iconType}
            label={category.label}
          />
        ))}
      </View>
      <View style={styles.row}>
        {secondRow.map((category, index) => (
          <CategoryIcon
            key={index}
            iconName={category.iconName}
            iconType={category.iconType}
            label={category.label}
          />
        ))}
      </View>
      <StatusBar style="auto" />
    </View>
    </>

 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#fff',    
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around', // Distribute icons evenly along the row
  },
  iconContainer: {
    alignItems: 'center',
    margin: 10,
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: '#F1F3F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    marginTop: 10,
    fontSize: 12,
    color: 'black',
  },
});


