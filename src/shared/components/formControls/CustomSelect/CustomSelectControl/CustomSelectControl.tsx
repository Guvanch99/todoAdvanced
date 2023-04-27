import { Control, FieldError, FieldErrors, FieldErrorsImpl, Merge, useController } from 'react-hook-form'
import { FC, memo } from 'react'
import { SelectProps } from '@mui/material'
import styles from './CustomSelectControl.module.scss'
import CustomSelectBase, { TGroupedOption, TOption } from '../CustomSelectBase/CustomSelectBase'
import { useValidationRules } from '../../../../hooks/useValidationRules'

type TProps = {
  control: Control<any>
  options?: TOption[]
  groupedOptions?: TGroupedOption[]
  name: string
  label?: string | null
  labelPlacement?: 'end' | 'start' | 'top' | 'bottom'
  placeholder?: string
  isRequired?: boolean
  handleError?: (error: FieldErrors) =>
    FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined,

} & Omit<SelectProps, 'type'>

const CustomSelectControl: FC<TProps> = ({
  label,
  labelPlacement,
  groupedOptions,
  control,
  options,
  name,
  handleError,
  isRequired,
  placeholder,
  ...rest
}) => {
  const { requiredRule } = useValidationRules()
  const {
    field: { value: currentValue, onChange },
    formState: { errors }
  } = useController({
    name,
    control,
    rules: {
      required: isRequired && requiredRule()
    }
  })
  const error = handleError?.(errors)

  return (
    <div className={styles.wrapper}>
      <CustomSelectBase
        key={currentValue}
        isError={!!error}
        label={label}
        labelPlacement={labelPlacement}
        placeholder={placeholder}
        options={options}
        groupedOptions={groupedOptions}
        currentValue={currentValue}
        handleChange={onChange}
        {...rest}
      />
      {error && <p className={styles.errorMessage}>{(error as any).message}</p>}
    </div>
  )
}

export default memo(CustomSelectControl)
