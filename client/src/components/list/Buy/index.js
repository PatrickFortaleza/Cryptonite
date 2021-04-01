import React, {useState} from 'react';
import { StyleSheet, SafeAreaView, FlatList, TouchableOpacity, Text, TextInput, View} from 'react-native';


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

  return (
    <SafeAreaView>
      <Text>Company : {prop.name}</Text>

      <View style = {styles.amount}>
        <Text >Quantity</Text>
        <TextInput
          onChangeText={(number) => setAmount(number)}
          placeholderTextColor={"grey"}
          placeholder="Enter Quantity"
        />
      </View>
      
      <Text>Market Price {prop.current_price}</Text>
      <Text>Total {amount * prop.current_price}</Text>

      <View>
        <TouchableOpacity
          onPress={() => {
            submitForm()
            setQuantity(amount)
            setMarketPrice(prop.current_price)
            setBookValue(amount * prop.current_price)
          }}
        >
          <Text>BUY</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  amount : {
    flexDirection: 'row'
  }
});