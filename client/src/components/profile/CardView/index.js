import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function CardView({ image, topText, bottomText, width }) {
  return (<View style={styles.container}>
    <View style={{ paddingHorizontal: 10 }}>
      {image}
    </View>
            <View style={{ paddingHorizontal: 10, minWidth: width }}>
      <Text style={styles.text}>{topText}</Text>
      {bottomText ? <Text style={styles.smallText}>{bottomText}</Text> : <></>}
    </View>
  </View>)
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 20,
  },
  text: {
    color: 'white',
    fontSize: 15
  },
  smallText: {
    color: 'white',
    fontSize: 10
  }
})
