import React from "react";
import Svg, { Path } from "react-native-svg";

export function StarDefault(props) {
  return (
    <Svg height="20" width="20" viewBox="0 0 24 24" {...props}>
      <Path
        d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524v-12.005zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z"
        stroke="grey"
        fill="grey"
        strokeWidth="0"
      />
    </Svg>
  );
}

export function StarActive(props) {
  return (
    <Svg height="20" width="20" viewBox="0 0 24 24" {...props}>
      <Path
        d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524v-12.005zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z"
        stroke="#3273ff"
        fill="#3273ff"
        strokeWidth="0"
      />
    </Svg>
  );
}
