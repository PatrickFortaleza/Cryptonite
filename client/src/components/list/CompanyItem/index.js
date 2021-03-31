import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native';

export default function CompanyItem({props}){
    return(
        <View style = {styles.container}>
            <Image source={{uri: props.imageURL}} style={styles.image}/>
            <Text> {props.name}</Text>
            <Text> {props.description}</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }, 
  image: {
      width: 150,
      height: 100
  },
  text:{
      paddingRight: 10
  }
});


  