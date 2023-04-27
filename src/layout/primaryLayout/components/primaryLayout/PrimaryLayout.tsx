import { FC, ReactNode } from 'react'
import classNames from 'classnames'
import { CardLayout } from '../../../cardLayout'
import styles from './PrimaryLayout.module.scss'

type TProps = {
  children: ReactNode
  header?: string | ReactNode
  isLabelMarginSmall?: boolean
  size?: 'small' | 'medium' | 'large'
  maxHeight?: boolean
  noPadding?: boolean
}

const PrimaryLayout: FC<TProps> = ({
  children,
  header,
  size = 'small',
  maxHeight,
  noPadding,
  isLabelMarginSmall
}) => (
  <div className={styles.wrapper}>
    <div className={classNames(styles.content, styles[size], { [styles.maxHeight]: maxHeight })}>
      <CardLayout
        isSmallPadding={size === 'large'}
        header={header}
        noPadding={noPadding}
        isLabelMarginSmall={isLabelMarginSmall}
      >
        {children}
      </CardLayout>
    </div>
  </div>
)
export default PrimaryLayout
