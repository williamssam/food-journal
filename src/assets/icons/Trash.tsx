import * as React from 'react'
import Svg, {Path, SvgProps} from 'react-native-svg'

const Trash = (props: SvgProps) => (
  <Svg
    viewBox="0 0 24 24"
    width={36}
    height={36}
    fill="none"
    stroke="#000"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}>
    <Path
      d="M20 6v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6"
      fill="#000"
      opacity={0.1}
    />
    <Path d="M2 6h20M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M9 10v8M15 10v8" />
    <Path d="M20 6v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6" />
  </Svg>
)

export default Trash
