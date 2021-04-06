import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import CardView from '../../CardView';

export default function CurrencyItem({ currency, coinCount, onPress }) {
  return <TouchableOpacity onPress={onPress}>
    <CardView
      image={<Image source={{ uri: currency.image }} style={styles.image}></Image>}
      topText={currency.name}
      bottomText={`Coins: ${coinCount}`}
      width={125}
    />
  </TouchableOpacity>
}

const styles = StyleSheet.create({
  image: {
    borderRadius: 75 / 2,
    overflow: "hidden",
    width: 25,
    height: 25
  }
});
