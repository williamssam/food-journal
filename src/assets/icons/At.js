import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

const At = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    fill="none"
    stroke="#000"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}>
    <Circle cx={12} cy={12} r={4} />
    <Path d="M16 8v5a3 3 0 0 0 3 3h0a3 3 0 0 0 3-3v-1a9.87 9.87 0 0 0-.79-3.89 10 10 0 0 0-5.32-5.32 10 10 0 0 0-7.78 0 10 10 0 0 0-5.32 5.32 10 10 0 0 0 0 7.78 10 10 0 0 0 5.32 5.32 10 10 0 0 0 7.78 0" />
  </Svg>
);

export default At;
