import React from 'react'
import { StyleSheet, Text, SafeAreaView, Image, Button, View} from 'react-native';

export default function CompanyDetail({route}){

    const{name, imageURL, price, oneDay, sevenDay, chart} = route.params

    return (
        <SafeAreaView>
            <Image source = {{uri: chart}} style = {styles.image}/>
            <Text style = {styles.price}> CAD {price}</Text>
            <Text style = {styles.initials}>  {name}</Text>

            <View style = {styles.trade}>
                <Button title="BUY" onClick={"Clicked"}></Button>
                <Button title="SELL" onClick={"Clicked"}></Button>
            </View>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
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
       
    },

    stats:{
       
    },
    items:{
       
    },

  });
  