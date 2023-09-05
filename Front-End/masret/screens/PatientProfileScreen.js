import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ProgressChart } from 'react-native-chart-kit'; // Import the ProgressChart component
import Bar from './Bar'



export default function PatientProfileScreen() {
  return (
    <>
    
    <Bar/>
    <ScrollView style={styles.container}>
      <View style={styles.card}>
      
     
        <View style={styles.second}>
          <View style={styles.image}>
            <Image
              source={{ uri: 'https://i.imgur.com/0LKZQYM.jpg' }}
              style={styles.profileImage}
            />
          </View>
          <View>
            <View style={styles.userInfo}>
              <Text>Omer Ali</Text>
            </View>
            <View style={styles.line} />
          </View>
        </View>

        <Text>48 comments</Text>
        <View style={{ flexDirection: 'row', gap: 28 }}>
          {/* Create an array of objects with different icons and text */}
          {[
            { icon: 'person-circle-outline', text: '48 Age' },
            { icon: 'star-outline', text: '70 weight' },
            { icon: 'heart-outline', text: '185 height' },
            { icon: 'chatbubble-ellipses-outline', text: 'A+ blood Group' },
          ].map((item, index) => (
            <View style={styles.buttons} key={index}>
              <TouchableOpacity style={styles.followButton}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <Ionicons name={item.icon} size={30} color="#566D8F" />
                </View>
              </TouchableOpacity>
              <View style={{ alignItems: 'center', marginTop: 8 }}>
                <Text style={{ color: 'black' }}>{item.text.split(' ')[0]}</Text>
                <Text style={{ color: 'black' }}>{item.text.split(' ')[1]}</Text>
              </View>
            </View>
          ))}
        </View>
         <View style={styles.line} />
         <View style={styles.br} />


        {/* Add the ProgressChart */}
        <View style={styles.chartContainer}>
          <ProgressChart
            data={[0.4, 0.6, 0.3]}
            width={400}
            height={220}
            chartConfig={{
              backgroundColor: '#566D8F',
              backgroundGradientFrom: '#566D8F',
              backgroundGradientTo: '#efefef',
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
                backgroundGradientFrom: '#566D8F',
              },
            }}
            style={{
              marginVertical: 8,
              borderRadius: 16,
              
            }}
          />
        </View>
            <View style={styles.br} />
 
        <View style={styles.first}>
          <Text style={styles.heading}>Vital medical conditions</Text>
          <View style={styles.time}>
            <View style={styles.clockIcon}>
              <Text style={styles.hour}>Lorem ipsum dolor sit amet consectetur.
               Eget iaculis est cras ornare augue. Lorem ipsum dolor sit amet consectetur hrs</Text>
            </View>
            </View>
            </View>
                        <View style={styles.br} />

        <View style={styles.first}>
          <Text style={styles.heading}>Basic Details</Text>
          <View style={styles.time}>
            <View style={styles.clockIcon}>
              <Text style={styles.time}>Addres</Text>
              <Text style={styles.hour}> address</Text>
            </View>
            </View>
          <View style={styles.time}>
            <View style={styles.clockIcon}>
              <Text style={styles.time}>Phone</Text>
              <Text style={styles.hour}> 0779907251</Text>
            </View>
            </View>
          <View style={styles.time}>
            <View style={styles.clockIcon}>
              <Text style={styles.time}>Diabetes</Text>
              <Text style={styles.hour}> Normal</Text>
            </View>
            </View>
          <View style={styles.time}>
            <View style={styles.clockIcon}>
              <Text style={styles.time}>blood pressure</Text>
              <Text style={styles.hour}> Normal</Text>
            </View>
            </View>
            </View>
                        <View style={styles.br} />

            <View style={styles.first}>
          <Text style={styles.heading}>Attachments :</Text>
          
            </View>
          
        
        <View style={styles.third}>
          <TouchableOpacity style={styles.bookButton}>
            <Text>
              <Image
                // source={require('./clock-icon.png')} // Add your clock icon image
                style={styles.clockIcon}
              />{' '}
              Book Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
    </> 
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  card: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    padding: 16,
  },
  first: {},
  heading: {
    fontWeight: '700',
  },
  time: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  clockIcon: {
    marginRight: 4,
      flex: 1,
    color: '#566D8F',
  },
  hour: {
    
    color: '#566D8F',
    fontSize: 12,
  },
  price: {
    fontWeight: 'bold',
  },
  second: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  image: {
    marginRight: 8,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  userInfo: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  ratings: {
    flexDirection: 'row',
    marginLeft: 8,
  },
  star: {
    color: '#388E3C',
  },
  buttons: {
    marginTop: 8,
  },
  followButton: {
    width: 70,
    height: 70,
    borderRadius: 60,
    backgroundColor: '#CAD2D6',
  },
  profileButton: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 15,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginRight: 4,
  },
  commentButton: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 15,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  commentIcon: {
    width: 16,
    height: 16,
  },
  line: {
    backgroundColor: '#566D8F',
    height: 3,
    marginTop: 16,
  },
  third: {
    marginTop: 16,
  },
  bookButton: {
    backgroundColor: '#566D8F',
    borderRadius: 15,
    paddingVertical: 8,
    alignItems: 'center',
  },
  chartContainer: {
    alignItems: 'center',
   
  },
   br: {
    marginVertical: 10, // Adds vertical margin between lines
  },
  chartLabel: {
    color: '#fff', // Text color inside the chart
    fontSize: 14,
    fontWeight: 'bold',
  },
});
