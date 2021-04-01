import React from 'react';
import { StyleSheet, SafeAreaView, FlatList, TouchableOpacity, Text, View} from 'react-native';
import CompanyItem from '../CompanyItem'

export default function Buy({
  //METHODS
  //PROPERTIES
  prop
}) {
  return (
    <SafeAreaView>
      <Text>Buy component {prop.name}</Text>
      <Text>Market Price {prop.current_price}</Text>
      <Text>Total {prop.current_price}</Text>
    </SafeAreaView>
    
  )
}