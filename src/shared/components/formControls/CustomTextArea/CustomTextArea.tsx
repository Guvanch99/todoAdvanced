import { TextareaAutosize } from '@mui/material'
import { Control, RegisterOptions, useController } from 'react-hook-form'
import { FC, memo } from 'react'
import classNames from 'classnames'
import styles from './CustomTextArea.module.scss'
import FormLabel from '../../FormLabel/FormLabel'

type TProps = {
  name: string
  control: Control<any>
  rules?: RegisterOptions
  label?: string | null
  labelPlacement?: 'end' | 'start' | 'top' | 'bottom'
}
const CustomTextArea: FC<TProps> = ({
  name,
  control,
  rules,
  label,
  labelPlacement = 'top'
}) => {
  const { field, fieldState } = useController({
    name,
    control,
    rules
  })
  const errorMessage = fieldState.error?.message
  return (
    <div className={styles.wrapper}>
      <FormLabel label={label} labelPlacement={labelPlacement}>
        <TextareaAutosize
          className={classNames(styles.textArea, {
            [styles.error]: !!errorMessage
          })}
          {...field}
        />
      </FormLabel>
      {!!errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
    </div>
  )
}

export default memo(CustomTextArea)
