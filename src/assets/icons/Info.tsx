import * as React from 'react'
import Svg, {Path, SvgProps} from 'react-native-svg'
import {colors} from '../../theme/colors'

const Info = (props: SvgProps) => (
  <Svg width={18} height={18} viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM11 7h2v2h-2V7zm0 4h2v6h-2v-6z"
      fill={colors.red}
    />
  </Svg>
)

export default Info
