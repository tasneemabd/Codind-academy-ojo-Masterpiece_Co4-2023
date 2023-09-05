import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';

export default function Card() {
    const data = [
        { content: 'Card 1' },
        { content: 'Card 2' },
        { content: 'Card 3' },
        // Add more cards as needed
      ];
      const carouselRef = useRef(null);
      const [activeIndex, setActiveIndex] = useState(0);
    
      useEffect(() => {
        const timer = setInterval(() => {
          let newIndex = activeIndex + 1;
          if (newIndex >= data.length) {
            newIndex = 0;
          }
          carouselRef.current.snapToItem(newIndex);
        }, 3000); // Change interval as needed (in milliseconds)
    
        return () => clearInterval(timer);
      }, [activeIndex]);
    
      const renderItem = ({ item }) => (
        <View style={styles.card}>
          <Text style={styles.cardContent}>{item.content}</Text>
        </View>
      );
  return (
    <View style={styles.container}>
              <Text style={styles.title}>Card Slider Title</Text>

    <Carousel
      ref={carouselRef}
      data={data}
      renderItem={renderItem}
      sliderWidth={Dimensions.get('window').width}
      itemWidth={300} // Customize the card width
      autoplay
      autoplayInterval={3000} // Adjust interval as needed (in milliseconds)
      onSnapToItem={(index) => setActiveIndex(index)}
    />
  </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        justifyContent:"flex-start",
       
        marginBottom: 30,
      },
    card: {
      width: 310,
      height: 200,
      backgroundColor: '#566D8F',
      backgroundGradientFrom: '#566D3F',
      backgroundGradientTo: '#efefef',
      borderRadius: 10,
      shadowColor: 'rgb(50, 50, 50)',
      shadowOpacity: 0.5,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowRadius: 4,
      elevation: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    cardContent: {
      fontSize: 18,
      padding: 10,
    },
  });