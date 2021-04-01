import React, {useState} from 'react';
import { StyleSheet, SafeAreaView, Image, TouchableOpacity, Text, TextInput, View} from 'react-native';


export default function Buy({
    //METHODS
      setQuantity, 
      setMarketPrice, 
      setBookValue, 
      submitForm, 
    //PROPERTIES
      prop
  }) {

  const [amount, setAmount] = useState(0)
  console.log(prop.image)

  return (
    <SafeAreaView  style={{
      backgroundColor: "#1a1a1a",
      height: "100%",
      justifyContent: "center",
    }}>
      <View style={{justifyContent: "center"}}>
        <Image source = {{uri: prop.image}} style = {styles.image}/>
        <Text style = {styles.header}>Company : {prop.name}</Text>

      </View>
      
      <View style = {styles.pair} >
        <Text style = {styles.quantity}>Quantity</Text>
        <TextInput
          onChangeText={(number) => setAmount(number)}
          placeholderTextColor={"grey"}
          placeholder="Enter Quantity"
          style = {styles.quantity}
        />
      </View>
      
      <View style = {styles.pair} >
        <Text style = {styles.marketPrice}>Market Price </Text>
        <Text style = {styles.marketPrice}>{prop.current_price}</Text>
      </View>

      <View style = {styles.pair}>
        <Text style = {styles.total}>Total</Text>
        <Text style = {styles.total}>{amount * prop.current_price}</Text>
      </View>
  
      <View >
        <TouchableOpacity
          onPress={() => {
            setQuantity(amount)
            setMarketPrice(prop.current_price)
            setBookValue(amount * prop.current_price)
            submitForm()
          }}
        >
          <Text style = {styles.buyButton}>BUY</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header :{
    fontSize : 35,
    color: "white",
  },
  quantity :{
    fontSize : 25,
    color: "white",
  },
  marketPrice : {
    fontSize : 25,
    color: "white",
  },
  total : {
    fontSize : 35,
    color: "white",
    paddingBottom : 40
  },
  pair : {
    flexDirection : 'row',
    justifyContent : 'space-between',
    padding : 20,
  },
  amount : {
    flexDirection: 'row'
  },
  buyButton : {
    fontSize : 35,
    color: "white",
    textAlign: 'center'
  },
  image : {
    height:50,
    width : 50
  }
});