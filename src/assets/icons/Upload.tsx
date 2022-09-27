import * as React from 'react'
import Svg, {Path, SvgProps} from 'react-native-svg'
import {colors} from '../../theme/colors'

const Upload = (props: SvgProps) => (
  <Svg
    viewBox="0 0 24 24"
    width={36}
    height={36}
    fill="none"
    stroke={colors.neutral}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}>
    <Path
      d="M3.68 15h17.26A3.49 3.49 0 0 0 19 9 7 7 0 0 0 5.24 7.18 4.49 4.49 0 0 0 3.68 15Z"
      fill="#fff"
      opacity={0.1}
      stroke="none"
    />
    <Path d="M4 15.24a4.5 4.5 0 0 1 1.24-8.06A7 7 0 0 1 19 9v0a3.5 3.5 0 0 1 1 6.62" />
    <Path d="m8 13 4-4 4 4M12 18V9.5" />
  </Svg>
)

export default Upload
