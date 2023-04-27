import { FC, ReactNode } from 'react'
import classNames from 'classnames'
import styles from './CardLayout.module.scss'
import Card from "../../../../shared/components/Card/Card.tsx"


type TProps = {
  header: string | ReactNode
  children: ReactNode
  isLabelMarginSmall?: boolean
  isSmallPadding?: boolean
  noPadding?: boolean
}

const CardLayout: FC<TProps> = ({
  header,
  isLabelMarginSmall,
  isSmallPadding,
  children,
  noPadding
}) => (
  <Card isSmallPadding={!!isSmallPadding} noPadding={noPadding}>
    <div className={classNames(
      styles.label,
      { [styles.marginSmall]: isLabelMarginSmall }
    )}
    >
      {header}
    </div>
    {children}
  </Card>
)

export default CardLayout
