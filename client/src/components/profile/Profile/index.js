import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import CardView from '../CardView';
import CurrencyList from '../CurrencyList';

export default function Profile({ user, markets }) {
  if (!user) {
    return <View style={styles.container}>
      <Text>Loading...</Text>
    </View>
  }
  const { username, cash } = user;

  const moneyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });


  return (
    <View style={styles.container}>
      <CardView
        image={<Icon size={40} color="white" name="user-circle" />}
        topText={username}
        bottomText='San Francisco, CA'
        width={200}
      />
      <CardView
        image={<Icon size={40} color='white' name='wallet' />}
        topText={`Wallet: ${moneyFormatter.format(cash)}`}
        width={200}
      />
      <View style={{ paddingTop: '15%' }}>
        <CurrencyList markets={markets} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#1A1A1A',
    paddingTop: '15%',
    alignItems: 'center',
  },
});
