import React from 'react';
import { StyleSheet, FlatList, TouchableOpacity, Text, View} from 'react-native';
import CompanyItem from '../CompanyItem'


export default function List({
  //METHODS
  showDetail,
  //PROPERTIES
  cryptoData
}) {

  return (
    <FlatList
          style={styles.flatList}
          keyExtractor={company => company.id}
          data={cryptoData}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => {showDetail(item)}}>
                <CompanyItem coinData = {item}/>    
              </TouchableOpacity>
            )
          }}
        />
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
