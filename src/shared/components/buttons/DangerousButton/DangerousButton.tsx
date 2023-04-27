import { FC } from 'react'
import classNames from 'classnames'
import BaseButton, { TButtonProps } from '../BaseButton/BaseButton'
import styles from './DangerousButton.module.scss'

const DangerousButton: FC<TButtonProps> = ({ children, ...props }) => (
  <BaseButton {...props} className={classNames(styles.dangerousButton, props.className)}>
    {children}
  </BaseButton>
)

export default DangerousButton
