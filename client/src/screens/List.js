import React from 'react';
import { StyleSheet, SafeAreaView, FlatList, TouchableOpacity} from 'react-native';
import ListItem from '../components/list/CompanyItem'
import Data from '../../fakedata.js'


export default function ListScreen({navigation}) {

  const showDetail = (company) => {
    navigation.navigate('DetailScreen', company)
    
  }
      
  return (
    <SafeAreaView style={styles.container}>
        <FlatList
            keyExtractor={company => company.name}
            data={Data}
            renderItem={({ item }) => {
            return(
                <TouchableOpacity onPress={() => {showDetail(item)}}>
                    <ListItem props = {item}/>
                </TouchableOpacity>
            ) 
            }}
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
