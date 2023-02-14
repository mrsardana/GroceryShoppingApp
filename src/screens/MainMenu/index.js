import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../../res/colors';
import {fonts} from '../../res/fonts';

import profileImg from "../../../images/cart.png"
import categoryImg from "../../../images/category.jpeg";
import cartImg from "../../../images/cart.png";
import exitImg from "../../../images/exit.png";
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

const MainMenu = ({navigation}) => {
  return (
     <View style={styles.container}>
      <Text></Text>
      <Text></Text>

      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <View style={{flexDirection: "row", justifyContent: 'space-between'}}>
      <TouchableOpacity style={styles.mainMenuButton}>
      <Image style={styles.icons} source={profileImg}/>
      <Text></Text>
        <Text style={styles.btntext}>PROFILE</Text>
      </TouchableOpacity>
      <View style={{padding:5}}></View>
      <TouchableOpacity style={styles.mainMenuButton} onPress={() => navigation.navigate('ProductsList')}>
      <Image style={styles.icons} source={categoryImg}/>
      <Text></Text>
        <Text style={styles.btntext}>CATEGORIES</Text>
      </TouchableOpacity>
      </View>


      <View style={{flexDirection: "row", justifyContent: 'space-between'}}>
      <TouchableOpacity style={styles.mainMenuButton}>
      <Image style={styles.icons} source={cartImg}/>
      <Text></Text>
        <Text style={styles.btntext}>CART</Text>
      </TouchableOpacity>
      <View style={{padding:5}}></View>
      <TouchableOpacity style={styles.mainMenuButton}>
      <Image style={styles.icons} source={exitImg}/>
      <Text></Text>
        <Text style={styles.btntext}>EXIT</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default MainMenu;

const styles = StyleSheet.create({
  screen: {flex: 1, paddingHorizontal: 20, justifyContent: 'center'},
  image: {height: 225, width: '100%', resizeMode: 'stretch'},
  wrapperSlogan: {marginTop: 51},
  txtSlogan: {
    fontSize: 30,
    color: colors.primary,
    textAlign: 'center',
    fontFamily: fonts.SemiBold,
  },
  container: {
    backgroundColor: '#fff',
    // display: 'flex',
    alignItems: 'center',
    height: '100%'
  },
  logo: {
    resizeMode: "contain",
    height: 200,
    width: 200
  },
  icons: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    overflow: "hidden",
    borderWidth: 1
  },
  header: {
    color: '#fff',
    fontSize: 24,
    padding: 10,
    backgroundColor: '#556b2f',
    alignItems: 'center',
    marginBottom: 30,
    width:'100%',
    marginTop: 5
  },
  textinput:{
      alignSelf:'stretch',
      height: 35,
      marginBottom: 30,
      padding: 5,
      color:'#000',
      borderBottomColor:'#f8f8f8',
      borderBottomWidth: 1
  },
  button:{
      alignSelf:'center',
      alignItems:'center',
      padding: 10,
      width:300,
      backgroundColor: '#556b2f',
      marginTop: 10,
      borderRadius: 50
  },
  mainMenuButton:{
    alignSelf:'center',
    alignItems:'center',
    padding: 10,
    width:150,
    backgroundColor: '#556b2f',
    marginTop: 10,
    borderRadius: 20
},
  btntext: {
      color: '#fff',
      fontWeight: 'bold'
  },
  input: {
    backgroundColor:'#1C00ff00'
  },
  inputHighlight: {
    backgroundColor:'#FF0000'
  }
});
