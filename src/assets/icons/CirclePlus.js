import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
import {colors} from '../../theme/colors';

const CirclePlus = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={34}
    height={34}
    fill={colors.neutral}
    stroke={colors.main}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}>
    <Circle cx={12} cy={12} r={10} />
    <Circle cx={12} cy={12} r={10} fill="#000" opacity={0.1} />
    <Path d="M12 8v8M16 12H8" />
  </Svg>
);

export default CirclePlus;
