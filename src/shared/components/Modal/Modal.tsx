import {
  Dialog as MuiDialog
} from '@mui/material'
import { FC, ReactNode } from 'react'
import { DialogProps } from '@mui/material/Dialog/Dialog'
import classNames from 'classnames'
import styles from './Modal.module.scss'
import CloseFillIcon from '../../icons/CloseFillIcon.tsx'

type TProps = {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  large?: boolean
  modalClass?: string
} & Omit<DialogProps, 'open'>

const Modal: FC<TProps> = ({
  isOpen,
  onClose,
  large,
  modalClass,
  children,
  ...rest
}) => (
  <MuiDialog
    {...rest}
    className={classNames(styles.modal, modalClass, { [styles.modalLarge]: large })}
    classes={{
      paper: 'paperModal'
    }}
    open={isOpen}
    onClose={onClose}
  >
    <div className={styles.wrapper}>
      <button
        type="button"
        onClick={onClose}
        className={styles.iconWrapper}>
        <CloseFillIcon/>
      </button>
      {children}
    </div>
  </MuiDialog>
)

export default Modal
