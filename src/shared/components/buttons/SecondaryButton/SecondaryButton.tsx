import  { FC } from 'react'
import classNames from 'classnames'
import BaseButton, { TButtonProps } from '../BaseButton/BaseButton'
import styles from './SecondaryButton.module.scss'

const SecondaryButton: FC<TButtonProps> = ({ children, ...props }) => (
  <BaseButton {...props} className={classNames(styles.secondary, props.className)}>
    {children}
  </BaseButton>
)

export default SecondaryButton
