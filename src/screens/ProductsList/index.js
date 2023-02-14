import {colors} from '../../res/colors';
import {fonts} from '../../res/fonts';


import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, ActivityIndicator, RefreshControl } from "react-native";



import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications


  function ListItem(props) {
    return (
      <TouchableOpacity
        key={props.item.id}>
          <Text></Text>
          <Text>id:                 {props.item.id}</Text>
          <Text>title:     {props.item.title}</Text>
          <Text>description: {props.item.description}</Text>
          <Text></Text>
          <View style={{
              borderBottomColor: 'black',
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}/>
      </TouchableOpacity>
    );
  }


  var globalId;

function DetailsScreen({ navigation, route }) {

  const [id, setId]= React.useState('');
  const [title, settitle]= React.useState('');
  const [description, setdescription]= React.useState('');

  useEffect(() => {
      // Run! Like go get some data from an API.
      setId(route.params.item.id);
      settitle(route.params.item.title);
      setdescription(route.params.item.description);
      globalId = route.params.item.id;
  }, []);

  function onAddButtonCLicked(){
    if (name != "" && lname != "" && title != "" && address != "" && doctor != "" && department != "") {
      fetch(`https://dummyjson.com/products/${route.params.item._id}`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: id,
          description: description,
          title: title
        })
    });
    setId(id);
    var a = "Hello World"
    alert(a);
  } else {
    alert("Please fill all information!");
  }
}

  return (
    <View>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
       
      <Text style={styles.header}> Single Product </Text>
    </View>
  );
}

const ProductsList = ({navigation, props}) => {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
  
    const wait = (timeout) => {
      return new Promise(resolve => setTimeout(resolve, timeout));
    }

    useEffect(() => {
      fetch('https://dummyjson.com/products')
        .then((response) => response.json())
        .then((json) => setData(json.products))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);

    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((json) => setData(json.products))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
      wait(200).then(() => setRefreshing(false));
    }, []);

    return (
      <View style={{flex: 1}}>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text style={styles.header}> All Products List </Text>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => 
            <ListItem
            item={item}/>
          }
            keyExtractor={(item, key) => item.id}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
              />
            }
          />
        )}
        <Text></Text>
        <Text></Text>
        <Text></Text>
      </View>
    );
};

export default ProductsList;

const styles = StyleSheet.create({
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
