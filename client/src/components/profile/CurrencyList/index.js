import React from 'react';
import { FlatList } from 'react-native';
import CurrencyItem from './CurrencyItem';
export default function CurrencyList({ markets }) {
  return (
    <FlatList
        data={markets}
        keyExtractor={(item) => item.id}
        horizontal={false}
        numColumns={2}
        renderItem={(item, _index) => <CurrencyItem coinCount={75} currency={item.item}/>}
      />
  )
}
