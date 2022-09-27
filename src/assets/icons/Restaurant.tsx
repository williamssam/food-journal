import * as React from 'react'
import Svg, {Path, SvgProps} from 'react-native-svg'
import {colors} from '../../theme/colors'

const Restaurant = (props: SvgProps) => {
  return (
    <Svg viewBox="0 0 24 24" width={20} height={20} {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path
        d="M21 2v20h-2v-8h-3V7a5 5 0 015-5zM9 13.9V22H7v-8.1A5.002 5.002 0 013 9V3h2v7h2V3h2v7h2V3h2v6a5.002 5.002 0 01-4 4.9z"
        fill={colors.main}
      />
    </Svg>
  )
}

export default Restaurant
