import * as React from 'react'
import Svg, {Path, SvgProps} from 'react-native-svg'

const Setting = (props: SvgProps) => (
  <Svg width={24} height={24} {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M17.5 2.474 23 12l-5.5 9.526h-11L1 12l5.5-9.526h11zM8.634 8.17l5 8.66 1.732-1-5-8.66-1.732 1z"
      fill="#000"
    />
  </Svg>
)

export default Setting
