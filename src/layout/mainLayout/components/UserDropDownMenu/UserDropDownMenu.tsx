import React from 'react'
import classNames from 'classnames'
import { MenuItem } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import styles from './UserDropDownMenu.module.scss'
import Menu from '../../../../../../freshtrade-frontend/src/shared/components/menu/Menu'
import ArrowDownIcon from '../../../../../../freshtrade-frontend/src/shared/components/icons/ArrowDownIcon'
import { TMenuOptions } from '../../types'
import {useAuthContext} from "../../../../feature/auth/authBase"

export function useUserMenuOptions() {
  const navigate = useNavigate()

  const userMenuOptions: TMenuOptions[] = [
    {
      label: 'logout',
      handleSelect: () => navigate('/logout')
    }
  ]

  return userMenuOptions
}

const UserDropDownMenu = () => {
  const {authData} = useAuthContext()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const userMenuOptions = useUserMenuOptions()
  const isOpen = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className={styles.wrapper}>
      <button
        type="button"
        onClick={handleClick}
        className={classNames(styles.content, { [styles.bordered]: isOpen })}
      >
        <div className={styles.logoWrapper}>
          {authData?.name[0]}
        </div>
        <div className={styles.icon}>
          <ArrowDownIcon width={20} height={20}/>
        </div>
      </button>
      <Menu
        size="small"
        anchorEl={anchorEl}
        isOpen={isOpen}
        onClose={handleClose}
      >
        {
          userMenuOptions.map(({ label, handleSelect }) => (
            <MenuItem
              key={label}
              onClick={() => {
                handleSelect()
                handleClose()
              }}>
              {label}
            </MenuItem>
          ))
        }
      </Menu>
    </div>
  )
}

export default UserDropDownMenu
