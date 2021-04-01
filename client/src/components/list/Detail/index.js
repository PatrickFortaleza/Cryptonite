import React from 'react'
import { 
    StyleSheet, 
    Text, 
    SafeAreaView, 
    Image, 
    Button, 
    TouchableOpacity, 
    View
} from 'react-native';

export default function CompanyDetail({
    //METHOD
    showBuy,
    showSell,
    // PROPERTIES
    name, 
    image, 
    current_price,
    high_24h, 
    low_24h,
}){
    //pass the object to the buy page through route
    let item = {
        name : name,
        image : image, 
        current_price : current_price,
        high_24h : high_24h, 
        low_24h : low_24h,
    }
    console.log(item)

  return (

      <SafeAreaView data={item} style = {styles.container}>
          <Image source = {{uri: image}} style = {styles.image}/>
          <Text style = {styles.price}> CAD {current_price}</Text>
          <Text style = {styles.initials}>  {name}</Text>

          <View style = {styles.trade}>
            <TouchableOpacity onPress={() => showBuy(item)}>
                <Text style = {styles.buy}>Buy</Text> 
            </TouchableOpacity>
             
            <TouchableOpacity onPress={() => {showSell(item)}}>
                <Text style = {styles.sell}>Sell</Text> 
            </TouchableOpacity>
          </View>
          
          <View>
              <Text style = {styles.stats}>Stats</Text>  
              <View style = {styles.pairItem}>
                  <Text style = {styles.items}>Market Cap</Text> 
                  <Text style = {styles.items}>{current_price}</Text>
              </View>
              
              <View style = {styles.pairItem}>
                  <Text style = {styles.items}>High in 24hours</Text>  
                  <Text style = {styles.items}>{high_24h}</Text>
              </View>
              
              <View style = {styles.pairItem}>
                  <Text style = {styles.items}>Low in 24hours</Text> 
                  <Text style = {styles.items}>{low_24h}</Text>
              </View>
              
          </View>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1a1a1a",
    height: "100%"
  },
  image:{
      height:250
  },
  price:{
      fontSize : 50,
      color: "white",
  },
  initials:{
      fontSize : 25,
      color: "white",
  },
  trade:{
      paddingTop: 75,
      paddingBottom: 75,
      flexDirection: 'row',
      justifyContent : 'space-around'
  },
  buy:{
      color : "#841584",
      fontSize : 50,
      color: "white",
      
  },
  sell:{
    color : "#841584",
    fontSize : 50,
    color: "white",
  },

  stats:{
      fontSize : 25,
      color: "white",
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
      color: "white",
      fontSize : 18
  },

});