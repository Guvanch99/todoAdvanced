import { FC } from 'react'
import { TIconProps } from './iconsBase/types'
import { ReactComponent as Icon } from './svg/ArrowDown.svg'
import { IconWrapper } from './iconsBase/IconWrapper/IconWrapper'

const ArrowDownIcon: FC<TIconProps> = (props) => (
  <IconWrapper {...props}>
    <Icon/>
  </IconWrapper>
)

export default ArrowDownIcon
