import React from 'react';
import { StyleSheet, SafeAreaView, FlatList, TouchableOpacity, Text} from 'react-native';
import CompanyItem from '../CompanyItem'


export default function List({
  //METHODS
  showDetail,
  //PROPERTIES
  cryptoData
}) {

  return (
    <SafeAreaView style={styles.container}>
        <FlatList
            keyExtractor={company => company.id}
            data={cryptoData}
            renderItem={({ item }) => {
            return(
                <TouchableOpacity onPress={() => {showDetail(item)}}>
                    <CompanyItem coinData = {item}/>
                </TouchableOpacity>
            ) }}
        />
    </SafeAreaView>
 

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
