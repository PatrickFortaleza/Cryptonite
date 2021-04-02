import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function Sparkline(props) {
  return (
    <View style={styles.container}>
      {props.StringPathStroke ? (
        <Svg height="100" width="100%" children={props.children}>
          {props.hasFill ? (
            <Path
              d={props.StringPathFill}
              stroke="none"
              strokeWidth="0"
              fill="#13346d"
            />
          ) : null}
          <Path
            d={props.StringPathStroke}
            stroke="#005dff"
            strokeWidth="2.5"
            fill="none"
          />
        </Svg>
      ) : null}
      <View style={styles.banner}>
        <Text style={styles.bannerText}>Last 7 days</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingTop: 20,
    borderBottomColor: "#282828",
    borderBottomWidth: 1,
  },
  banner: {
    backgroundColor: "#202020",
  },
  bannerText: {
    marginVertical: 7,
    textAlign: "center",
    color: "#fff",
    fontSize: 12,
  },
});
