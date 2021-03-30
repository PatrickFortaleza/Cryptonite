import React from "react";
import Svg, { Path } from "react-native-svg";

export function GraphDefault(props) {
  return (
    <Svg height="20" width="20" viewBox="0 0 24 24" {...props}>
      <Path
        d="M0 5.783v-2.783l4 4 5-6 9 7.878 6-3.922v2.437l-6.176 3.989-8.6-7.528-5.09 6.108-4.134-4.179zm18.909 7.279l-1.267.818-1.135-.994-7.058-6.177-3.778 4.534-1.41 1.692-1.548-1.566-2.713-2.743v14.374h24v-13.226l-5.091 3.288z"
        stroke="grey"
        fill="grey"
        strokeWidth="0"
      />
    </Svg>
  );
}

export function GraphActive(props) {
  return (
    <Svg height="20" width="20" viewBox="0 0 24 24" {...props}>
      <Path
        d="M0 5.783v-2.783l4 4 5-6 9 7.878 6-3.922v2.437l-6.176 3.989-8.6-7.528-5.09 6.108-4.134-4.179zm18.909 7.279l-1.267.818-1.135-.994-7.058-6.177-3.778 4.534-1.41 1.692-1.548-1.566-2.713-2.743v14.374h24v-13.226l-5.091 3.288z"
        stroke="#3273ff"
        fill="#3273ff"
        strokeWidth="0"
      />
    </Svg>
  );
}
