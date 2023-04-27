import { FC } from 'react'
import { TIconProps } from './iconsBase/types'
import { ReactComponent as Icon } from './svg/CloseFill.svg'
import { IconWrapper } from './iconsBase/IconWrapper/IconWrapper'

const CloseFillIcon: FC<TIconProps> = (props) => (
  <IconWrapper {...props}>
    <Icon/>
  </IconWrapper>
)

export default CloseFillIcon
