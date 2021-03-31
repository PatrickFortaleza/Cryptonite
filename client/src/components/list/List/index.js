import React from 'react';
import { StyleSheet, SafeAreaView, FlatList, TouchableOpacity, Text} from 'react-native';
import CompanyItem from '../CompanyItem'
import Data from './fakedata.js'


export default function List({
  //METHODS
  showDetail
}) {

  return (
    <SafeAreaView style={styles.container}>
        <FlatList
            keyExtractor={company => company.name}
            data={Data}
            renderItem={({ item }) => {
            return(
                <TouchableOpacity onPress={() => {showDetail(item)}}>
                    <CompanyItem props = {item}/>
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
