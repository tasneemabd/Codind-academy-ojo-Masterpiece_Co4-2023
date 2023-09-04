import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Svg, Image } from 'react-native-svg';
import splash from './assets/splash.png'


export default function SplashScreen() {
  return (
    <View style={styles.container}>
        <Svg width="100%" height={400}>
        <Image href={splash} width="100%" height="100%" />
      </Svg>
      <View style={styles.card}>
        <View style={styles.cardBody}>
        <Text style={styles.signupText}>If you are a patient continue here </Text>

         
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Continue as a patient</Text>
          </TouchableOpacity>
          <View style={styles.socialIcons}>
            {/* <FontAwesomeIcon name="facebook" size={24} color="white" />
            <FontAwesomeIcon name="twitter" size={24} color="white" style={styles.iconSpacing} />
            <FontAwesomeIcon name="google" size={24} color="white" /> */}
          </View>
          <View style={styles.signup}>
            <Text style={styles.signupText}>If you are a doctor you can continue here
            </Text>
          </View>
          <View style={styles.signup}>
             <Text style={styles.signupLink}>Continue as a doctor</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  card: {
    borderRadius: 16,
    backgroundColor: '#FFF',
    width: '90%',
    maxWidth: 400,
  },
  cardBody: {
    padding: 30,
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#566D8F',
    textTransform: 'uppercase',
    padding:20,

  },
  subHeaderText: {
    color: '#566D8F',
  },
  input: {
    backgroundColor: 'transparent',
    borderColor: '#566D8F',
    borderWidth: 1,
    borderRadius: 8,
    borderBottomColor: '#566D8F', // Set the border color for the bottom border
    borderWidth: 0, // Set border width to 0 for top, left, and right
    borderBottomWidth: 1, // Set border width for the bottom    paddingVertical: 10,
    paddingHorizontal: 16,
    marginBottom: 20,
    padding:10,
    color: '#566D8F',
  },
  forgotPassword: {
    marginBottom: 16,
  },
  forgotPasswordText: {
    color: '#566D8F',
  },
  loginButton: {
    backgroundColor: '#566D8F',
    borderColor: '#566D8F',
    borderWidth: 1,
    borderRadius: 30,
    paddingVertical: 14,

    alignItems: 'center',
    marginBottom: 16,
  },
  loginButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontFamily: 'Cabin',

    fontSize: 16,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  iconSpacing: {
    marginHorizontal: 20,
  },
  signup: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupText: {
    fontSize:15,
    color: '#424242',
    padding:10,
  },
  signupLink: {
    fontWeight: 'bold',
    color: '#566D8F',
  },
  svgImage: {
    width: '100%',
    height: 300,
  },
};
