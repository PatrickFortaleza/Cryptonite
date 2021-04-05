import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import SparklineCtrl from "../../../controllers/list/SparklineCtrl";
import LoadingPreloader from "../LoadingPreloader";

export default function ItemPreloader() {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <View style={styles.imageContainer}>
          <View
            style={{
              ...styles.image,
              backgroundColor: "#2b2b2b",
            }}
          ></View>
        </View>
        <View style={{ marginLeft: 10, overflow: "hidden" }}>
          <Text
            style={{
              backgroundColor: "#2b2b2b",
              textTransform: "uppercase",
              fontWeight: "bold",
              color: "#2b2b2b",
              fontSize: 20,
            }}
          >
            LOADING...
          </Text>
          <Text
            style={{
              ...styles.text,
              fontSize: 10,
              marginTop: 3,
              color: "#2b2b2b",
            }}
          >
            <LoadingPreloader />
          </Text>
        </View>
      </View>

      <View style={styles.right}>
        <Text style={{ ...styles.text, color: "grey", fontSize: 10 }}>
          24H HI/LO
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#1a1a1a",
    alignItems: "center",
    justifyContent: "space-between",
    height: 125,
    borderBottomWidth: 1,
    borderColor: "#333",
  },
  left: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 5,
    paddingLeft: 0,
  },
  imageContainer: {
    width: 75,
    height: 75,
    padding: 10,
  },
  center: {
    width: 150,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  right: {
    flex: 1,
    alignItems: "flex-end",
  },
  image: {
    flex: 1,
    borderRadius: 75 / 2,
    overflow: "hidden",
  },
  text: {
    color: "white",
    paddingRight: 10,
  },
});
