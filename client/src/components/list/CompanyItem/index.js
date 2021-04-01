import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native';

export default function CompanyItem({coinData}){
  return(
    <View style = {styles.container}>
      <View style = {styles.left}>
        <Image source={{uri: coinData.image}} style={styles.image}/>
        <Text style={styles.text}> {coinData.name}</Text>
       
      </View>

      <View style = {styles.center}>
        <Text style={styles.text}> USD {coinData.current_price}</Text>
        {/* <Text> Holder Chart Var</Text> */}
      </View>  

      <View style = {styles.right}>
      <Text style={styles.text}>24H</Text>
        <Text style={styles.text}> {coinData.high_24h}</Text>
        <Text style={styles.text}> {coinData.low_24h}</Text>
      </View>  
            
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: "#1a1a1a",
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
      color: "white",
      paddingRight: 10
  }
});


  