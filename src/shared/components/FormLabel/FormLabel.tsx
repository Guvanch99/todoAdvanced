import { FormControlLabel as Label } from '@mui/material'
import { FC, ReactElement, ReactNode } from 'react'
import styles from './FormLabel.module.scss'

type TProps = {
  children: ReactElement
  label?: string | null | ReactNode
  labelPlacement?: 'end' | 'start' | 'top' | 'bottom'
}
const FormLabel: FC<TProps> = ({ children, labelPlacement, label }) => (
  <Label
    className={styles.label}
    label={label}
    labelPlacement={labelPlacement}
    control={children}
  />
)

export default FormLabel
