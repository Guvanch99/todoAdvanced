import { FC, ReactNode } from 'react'
import { MenuProps } from '@mui/material/Menu/Menu'
import { Menu as MuiMenu } from '@mui/material'
import classNames from 'classnames'
import styles from './Menu.module.scss'

type TProps = {
  isOpen: boolean
  children: ReactNode
  size?: 'small'
} & Omit<MenuProps, 'open'>

const Menu: FC<TProps> = ({ isOpen, children, size, ...rest }) => (
  <MuiMenu
    disablePortal
    disableAutoFocusItem
    elevation={0}
    open={isOpen}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right'
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right'
    }}
    MenuListProps={{
      classes: {
        root: classNames(styles.menuListRoot, styles[size || ''])
      }
    }}
    {...rest}
  >
    {children}
  </MuiMenu>
)

export default Menu
