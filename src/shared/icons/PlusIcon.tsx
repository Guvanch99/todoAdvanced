import { FC } from 'react'
import { TIconProps } from './iconsBase/types'
import { ReactComponent as Icon } from './svg/Plus.svg'
import { IconWrapper } from './iconsBase/IconWrapper/IconWrapper'

const PlusIcon: FC<TIconProps> = (props) => (
  <IconWrapper {...props}>
    <Icon/>
  </IconWrapper>
)

export default PlusIcon
