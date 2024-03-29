import * as React from 'react'
import Svg, {Path, SvgProps} from 'react-native-svg'
import {colors} from '../../theme/colors'

export const Eye = (props: SvgProps) => (
  <Svg width={24} height={24} {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M1.181 12C2.121 6.88 6.608 3 12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9zM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
      fill={colors.text}
    />
  </Svg>
)

export const EyeOff = (props: SvgProps) => (
  <Svg width={24} height={24} {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M4.52 5.934 1.393 2.808l1.415-1.415 19.799 19.8-1.415 1.414-3.31-3.31A10.949 10.949 0 0 1 12 21c-5.392 0-9.878-3.88-10.819-9a10.982 10.982 0 0 1 3.34-6.066zm10.237 10.238-1.464-1.464a3 3 0 0 1-4.001-4.001L7.828 9.243a5 5 0 0 0 6.929 6.929zM7.974 3.76C9.221 3.27 10.58 3 12 3c5.392 0 9.878 3.88 10.819 9a10.947 10.947 0 0 1-2.012 4.592l-3.86-3.86a5 5 0 0 0-5.68-5.68L7.974 3.761z"
      fill={colors.text}
    />
  </Svg>
)
