import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import Bar from "./Bar";
import { FontAwesome } from '@expo/vector-icons';

const cardsData = [
  {
    id: 2,
    name: "All",
    title: 'High blood glucose levels',
    subTitle: 'High cardiologists | Alka hospital',
    time: '2:00pm - 3:00pm (1 hr)',
    imageUrl: 'https://www.dpconline.org/images/roundicons/icon_clipboard.png',
  },
  {
    id: 1,
    name: "month",
    title: 'High blood glucose levels',
    subTitle: 'High cardiologists | Alka hospital',
    time: '2:00pm - 3:00pm (1 hr)',
    imageUrl: 'https://www.dpconline.org/images/roundicons/icon_clipboard.png',
  },
  {
    id: 3,
    name: "year",
    title: 'High blood glucose levels',
    subTitle: 'High cardiologists | Alka hospital',
    time: '2:00pm - 3:00pm (1 hr)',
    imageUrl: 'https://www.dpconline.org/images/roundicons/icon_clipboard.png',
  },
 
];

const LabResults = () => {
  const [selectedType, setSelectedType] = useState(null);

  const handleTypeSelection = (typeId) => {
    setSelectedType(typeId);
  };

  // Filter the cards based on the selected type
  const filteredCards = selectedType
    ? cardsData.filter((card) => card.id === selectedType)
    : cardsData;

  return (
    <>
      <Bar />

      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          {cardsData.map((type) => (
            <TouchableOpacity
              key={type.id}
              style={[
                styles.button,
                selectedType === type.id && styles.selectedButton,
              ]}
              onPress={() => handleTypeSelection(type.id)}
            >
              <Text style={styles.buttonText}>{type.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
        {/* Render cards based on the selectedType or show all cards */}
        <View style={{ flex: 1, backgroundColor: '#eee', alignItems: 'center', justifyContent: 'start' }}>
            
          {filteredCards.map((card, index) => (
            
     <View key={index} style={{ marginTop: 10, alignItems: 'center' }}>
         {/* <View style={styles.containerlable}>
      <Text style={styles.text1}>October 23,</Text>
      <Text style={styles.text2}>Friday</Text>
    </View> */}
     <View style={styles.card}>
        
       <View style={styles.second}>
         <View style={styles.imageContainer}>
           <Image
             source={{ uri: card.imageUrl }}
             style={styles.image}
           />
         </View>
         <View style={styles.userInfo}>
           <View style={styles.titleContainer}>
             <Text style={styles.title}>{card.title}</Text>
             <FontAwesome name="eye" size={20} color="#566D8F" style={styles.icon} />
           </View>
          
           <View style={styles.timeContent}>
             <AntDesign name="clockcircleo" size={10} color="black" style={styles.icon} />
             <Text style={styles.hour}>{card.time}</Text>   
             
           </View>
           <View style={styles.buttonsContainer}>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}> See Report</Text>
                  </TouchableOpacity>
                </View>
         </View>
       </View>
     </View>
    
   </View>
          ))}
        </View>
        
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    backgroundColor: 'blue', // You can customize the button style here
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  buttonSeeReport: {
    color: '#F4F4F4', // You can customize the button text color here
    fontWeight: 'bold',
    bordeRadius: 11,
    

  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    
  },
  button: {
   
    marginHorizontal: 5,
    borderRadius: 5,
    paddingVertical: 4,
    paddingHorizontal: 16,
    flexDirection: 'column',
    alignItems: 'flex-start',
    borderRadius: 20,
    borderWidth: 1,
    color:"#566D8F",
    borderColor: '#566D8F', 
  },
  selectedButton: {
    backgroundColor: '#566D8F',
    color:"#fff",
   
    paddingVertical: 4,
    paddingHorizontal: 16,
    flexDirection: 'column',
    alignItems: 'flex-start',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#566D8F', 

  },
  buttonText: {
    fontWeight: 'bold',
    color:"#566D8F",

  },
  containerlable: {
    flex: 1,
    flexDirection: 'row',
  padding:13,
  right:100,
   
  },
  text1: {
    color: '#000',
    fontFamily: 'Cabin',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 20,
  },
  text2: {
    color: '#7D7D7D',
    fontFamily: 'Cabin',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
    marginLeft:8,
  },
  card: {
    backgroundColor: '#FFFFFF',
    width: 390,
    height: 150,
    borderRadius: 16,
    padding: 20,
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    shadowOffset: { width: 4, height: 7 },
    shadowOpacity: 1,
    shadowRadius: 12,
    elevation: 2,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    marginLeft: 5,
  },
  title: {
    fontWeight: 'bold',
    color: '#1C1B1F',
    fontSize: 15,
    padding: 3,
    marginTop:-50

  },
  subTitle: {
    color: '#787B80',
    fontSize: 15,
    padding: 3,
  },
  timeContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 5,

  },
  hour: {
    color: '#787B80',
    fontSize: 15,
    padding: 3,
    marginr: 5,
  },
  second: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },
  imageContainer: {
    marginRight: 10,
    marginTop:-90
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },
  userInfo: {
    flex: 1,
    padding: 5,
  },
  lineColor: {
    backgroundColor: '#787B80',
    opacity: 0.1,
    height: 1,
    marginBottom: 8,
    marginTop: 8,
  },
});

export default LabResults;
