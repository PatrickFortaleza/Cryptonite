import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { computeDays } from "../../../utility";

export default function Sparkline(props) {
  return (
    <View style={styles.container}>
      {props.StringPathStroke ? (
        <View>
          <Svg
            height="100"
            width="100%"
            children={props.children}
            key={Math.random()}
          >
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
        </View>
      ) : null}

      {!props.noDays ? (
        <View
          style={{
            borderColor: "#005dff",
            position: "absolute",
            left: "50%",
            bottom: "40%",
            transform: [{ translateX: "-50%" }],
            width: "100%",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "#eee",
              fontSize: 11,
              flex: 1,
            }}
          >
            {computeDays(+props.sparkLineLength)}d
          </Text>
        </View>
      ) : null}
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
