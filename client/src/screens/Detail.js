import React from 'react'
import { StyleSheet, Text, SafeAreaView, Image} from 'react-native';

export default function CompanyDetail({route}){

    const{name, imageURL, price, oneDay, sevenDay, chart} = route.params

    return (
        <SafeAreaView>
            <Text> {chart}</Text>
            <Image source = {{uri: imageURL}} style = {styles.image} />
            <Text>{name}</Text>
            <Text>{price}</Text>
            <Text>{price}</Text>
            <Text>{price}</Text>
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
    }
  });
  