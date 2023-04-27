import { FC, ReactNode } from 'react'
import classNames from 'classnames'
import styles from './Card.module.scss'

type TProps = {
  children: ReactNode
  isSmallPadding: boolean
  noPadding?: boolean
  autoWidth?: boolean
}
const Card: FC<TProps> = ({ isSmallPadding, noPadding, children }) => (
  <div className={classNames(styles.card, {
    [styles.smallPadding]: isSmallPadding,
    [styles.noPadding]: noPadding
  })}>
    {children}
  </div>
)

export default Card
