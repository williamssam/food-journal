import * as React from 'react'
import Svg, {Path, SvgProps} from 'react-native-svg'
import {colors} from '../../theme/colors'

const Time = (props: SvgProps) => {
  return (
    <Svg viewBox="0 0 24 24" width={24} height={24} {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path
        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm1-10V7h-2v7h6v-2h-4z"
        fill={colors.main}
      />
    </Svg>
  )
}

export default Time
