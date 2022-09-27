import * as React from 'react'
import Svg, {Path, SvgProps} from 'react-native-svg'

const ArrowLeft = (props: SvgProps) => (
  <Svg
    viewBox="0 0 24 24"
    width={36}
    height={36}
    fill="none"
    stroke="#000"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}>
    <Path d="m11 7-5 5 5 5M6 12h12" />
  </Svg>
)

export default ArrowLeft
