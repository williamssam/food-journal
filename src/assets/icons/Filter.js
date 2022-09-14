import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { colors } from "../../theme/colors";

const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    fill={colors.neutral}
    stroke="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <Path
      d="m21.57 5-7.14 8.48a1.82 1.82 0 0 0-.43 1.19V20a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-5.33a1.82 1.82 0 0 0-.43-1.18L2.43 5A1.82 1.82 0 0 1 2 3.83 1.83 1.83 0 0 1 3.83 2h16.34A1.83 1.83 0 0 1 22 3.83 1.82 1.82 0 0 1 21.57 5Z"
      fill="#000"
      opacity={0.1}
      stroke="none"
    />
    <Path d="m21.57 5-7.14 8.48a1.82 1.82 0 0 0-.43 1.19V20a2 2 0 0 1-2 2h0a2 2 0 0 1-2-2v-5.33a1.82 1.82 0 0 0-.43-1.18L2.43 5A1.82 1.82 0 0 1 2 3.83h0A1.83 1.83 0 0 1 3.83 2h16.34A1.83 1.83 0 0 1 22 3.83h0A1.82 1.82 0 0 1 21.57 5Z" />
  </Svg>
)

export default SvgComponent
