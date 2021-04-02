import React from "react";
import Svg, { Path } from "react-native-svg";

export function ArrowDown(props) {
  return (
    <Svg width="15" height="15" viewBox="0 0 24 24" {...props}>
      <Path d="M12 21l-12-18h24z" stroke="red" fill="red" strokeWidth="0" />
    </Svg>
  );
}

export function ArrowUp(props) {
  return (
    <Svg width="15" height="15" viewBox="0 0 24 24" {...props}>
      <Path d="M24 22h-24l12-20z" stroke="green" fill="green" strokeWidth="0" />
    </Svg>
  );
}
