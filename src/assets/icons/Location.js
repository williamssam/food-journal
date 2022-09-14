import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '../../theme/colors';

const Location = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M11 19.945A9.001 9.001 0 0 1 12 2a9 9 0 0 1 1 17.945V24h-2v-4.055z"
      fill={colors.main}
    />
  </Svg>
);

export default Location;
