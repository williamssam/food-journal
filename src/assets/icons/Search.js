import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
import {colors} from '../../theme/colors';

const SvgComponent = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    fill="#000"
    stroke="#000"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}>
    <Circle
      cx={11}
      cy={11}
      r={9}
      fill={colors.main}
      opacity={0.1}
      stroke="none"
    />
    <Circle cx={11} cy={11} r={9} />
    <Path d="M17.5 17.5 22 22" />
  </Svg>
);

export default SvgComponent;
