import React, {useState} from 'react';
import { StyleSheet, SafeAreaView, Image, TouchableOpacity, Text, TextInput, View} from 'react-native';


export default function Buy({
    //METHODS
      setQuantity, 
      setMarketPrice, 
      setBookValue, 
      submitForm, 
    //PROPERTIES
      prop,
      bookValue
  }) {

  const [amount, setAmount] = useState(0)
  console.log(prop.image)

  return (
    <SafeAreaView style = {styles.container}>
      <View style = {styles.main}>
        <View style = {styles.title}>
          <Image source = {{uri: prop.image}} style = {styles.image}/>
          <Text style = {styles.header}>{prop.name}</Text>
        </View>
        
        <View style = {styles.pair} >
          <Text style = {styles.quantity}>Quantity</Text>
          <TextInput
            onChangeText={(number) => {
              
              setQuantity(+number)
              
            }}
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
          <Text style = {styles.total}>{bookValue}</Text>
        </View>
    
        <View >
          <TouchableOpacity
            style = {styles.button}
            onPress={() => {
              submitForm()
            }}
          >
            <Text style = {styles.buttonText}>BUY</Text>
          </TouchableOpacity>
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
  title : {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 20
  },
  main : {
    height: "100%"
  },
  header :{
    fontSize : 35,
    color: "white",
  },
  quantity :{
    fontSize : 20,
    color: "white",
  },
  marketPrice : {
    fontSize : 20,
    color: "white",
  },
  total : {
    fontSize : 25,
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
  button: {
    backgroundColor: "#0079ff",
    marginTop: 17,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 30,
  },
  buttonText : {
    fontSize : 25,
    color: "white",
    textAlign: 'center'
  },
  image : {
    height:50,
    width : 50
  }
}); 