import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import SparklineCtrl from "../../../controllers/list/SparklineCtrl";

let ScreenWidth = Dimensions.get("window").width;
export default function index({ days, setDays, computedSparkline }) {
  return (
    <View style={{ height: 120, backgroundColor: "#13346d" }}>
      <SparklineCtrl
        sparkLine={computedSparkline}
        hasFill={true}
        noDays={true}
        height={100}
        width={ScreenWidth + 10}
      />
      <View style={style.controls}>
        {[...Array(7)].map((_, i) => (
          <TouchableOpacity
            key={i}
            style={
              days === +i + 1
                ? { ...style.button, backgroundColor: "#005dff" }
                : style.button
            }
            onPress={() => setDays(+i + 1)}
          >
            <Text style={{ color: "white" }}>{+i + 1}d</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  controls: {
    backgroundColor: "#232323",
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#353535",
    paddingVertical: 5,
  },
  button: {
    backgroundColor: "#494949",
    paddingVertical: 2,
    paddingHorizontal: 7,
    borderRadius: 3,
  },
});
