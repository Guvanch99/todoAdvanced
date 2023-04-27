import { FC, ReactNode } from 'react'
import classNames from 'classnames'
import styles from './Innerlayout.module.scss'

type TProps = {
  children: ReactNode
  borderTopLine?: boolean
  borderBottomLine?: boolean
  contentClass: string
}
const InnerLayout: FC<TProps> = ({
  borderTopLine,
  borderBottomLine,
  contentClass,
  children
}) => (
  <div className={classNames(styles.wrapper, {
    [styles.borderTopLine]: borderTopLine,
    [styles.borderBottomLine]: borderBottomLine
  })}>
    <div className={classNames(styles.content, contentClass)}>
      {children}
    </div>
  </div>
)

export default InnerLayout
