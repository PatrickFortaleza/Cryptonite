import React from 'react'
import { StyleSheet, Text, SafeAreaView, Image, Button, View} from 'react-native';

export default function CompanyDetail({
    name, image, current_price,
    high_24h, low_24h
}){

  return (

      <SafeAreaView>
          <Image source = {{uri: image}} style = {styles.image}/>
          <Text style = {styles.price}> CAD {current_price}</Text>
          <Text style = {styles.initials}>  {name}</Text>

          <View style = {styles.trade}>
              <Button title="BUY" onClick={"Clicked"} style = {styles.buy}></Button>
              <Button title="SELL" onClick={"Clicked"} style = {styles.sell}></Button>
          </View>
          
          <View>
              <Text style = {styles.stats}>Stats</Text>  
              <View style = {styles.pairItem}>
                  <Text style = {styles.items}>Market Cap</Text> 
                  <Text style = {styles.items}>{current_price}</Text>
              </View>
              
              <View style = {styles.pairItem}>
                  <Text style = {styles.items}>Details</Text>  
                  <Text style = {styles.items}>{high_24h}</Text>
              </View>
              
              <View style = {styles.pairItem}>
                  <Text style = {styles.items}>Another detail</Text> 
                  <Text style = {styles.items}>{low_24h}</Text>
              </View>
              
          </View>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f194ff", //'#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  image:{
      height:250
  },
  price:{
      fontSize : 50
  },
  initials:{
      fontSize : 25
  },
  trade:{
      paddingTop: 75,
      paddingBottom: 75,
      flexDirection: 'row',
      justifyContent : 'space-around'
  },
  buy:{
      color : "#841584",
      
  },
  sell:{
     
  },

  stats:{
      fontSize : 25,
      paddingLeft : 10,
      paddingBottom: 10
  },
  pairItem:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft : 10,
      paddingRight : 10,
      paddingBottom: 10,
      
  },
  items:{
      fontSize : 18
  },

});