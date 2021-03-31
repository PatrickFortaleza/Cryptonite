import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Signout({ handleSignout }) {
  return (
    <View style={{ ...style.container }}>
      <View>
        <View>
          <Text style={style.heading}>Do you wish to sign out?</Text>
        </View>
        <View style={style.actions}>
          <TouchableOpacity style={style.button}>
            <Text style={style.buttonText}>Back To Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...style.button,
              backgroundColor: "#121212",
              borderWidth: 2,
              borderColor: "#333",
            }}
            onPress={() => handleSignout()}
          >
            <Text style={style.buttonText}>Yes, Signout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "#121212",
    height: "100%",
    justifyContent: "center",
  },
  heading: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
  },
  button: {
    // width: "100%",
    backgroundColor: "#3273ff",
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 14,
    marginHorizontal: 20,
    borderRadius: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 17,
  },
});
