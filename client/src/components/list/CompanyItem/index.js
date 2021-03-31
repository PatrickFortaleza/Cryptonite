import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native';

export default function CompanyItem({props}){
  return(
    <View style = {styles.container}>
      <View style = {styles.left}>
        <Image source={{uri: props.imageURL}} style={styles.image}/>
        <Text> {props.name}</Text>
      </View>

      <View style = {styles.center}>
        <Text> CAD {props.price}</Text>
        <Text> Holder Chart Var</Text>
      </View>  

      <View style = {styles.right}>
        <Text> {props.oneDay} 1D</Text>
        <Text> {props.sevenDay} 7D</Text>
      </View>  
            
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 125
  }, 
  left: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }, 
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  }, 
   right: {
    flex: 1,
    alignItems: 'flex-end',
    

   
  }, 
  image: {
      width: 75,
      height: 75
  },
  text:{
      paddingRight: 10
  }
});


  