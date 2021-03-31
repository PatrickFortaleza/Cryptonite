import React from 'react'
import { StyleSheet, Text, SafeAreaView, Image} from 'react-native';

export default function CompanyDetail({route}){

    const{name, imageURL, description} = route.params

    return (
        <SafeAreaView>
            <Image source = {{uri: imageURL}} style = {styles.image} />
            <Text>{name}</Text>
            <Text>{description}</Text>
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
  