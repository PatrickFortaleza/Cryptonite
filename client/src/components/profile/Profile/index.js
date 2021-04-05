import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
export default function Profile({ user }) {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View>
          <Icon size={32} color="black" name="user-circle" />
        </View>
        <View>
          <Text style={styles.text}>John Doe</Text>
          <Text style={styles.smallText}>San Francisco, CA</Text>
        </View>
      </View>
      <View style={styles.cardContainer}>
        <View>
          <Icon size={32} color="black" name="wallet" />
        </View>
        <View>
          <Text style={styles.text}>Wallet: $50, 000</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: '#191919',
    maxWidth: '100%',
    margin: 'auto',
    padding: 20
  },
  profileImage: {
    borderRadius: 200
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 20
  },
  text: {
    paddingLeft: 10
  },
  smallText: {
    paddingLeft: 10,
    fontSize: 10
  }
});
