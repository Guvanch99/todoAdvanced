import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import { ListSubheader, Select, SelectProps } from '@mui/material'
import  { FC, ReactNode, useMemo, useState } from 'react'
import classNames from 'classnames'
import FormLabel from '../../../FormLabel/FormLabel'
import styles from './CustomSelectBase.module.scss'
import ArrowDownIcon from "../../../../icons/ArrowDownIcon.tsx";

export function usePreparedGroups(options?: TOption[], groupedOptions?: TGroupedOption[]) {
  return useMemo(() => groupedOptions ?? [{
    groupName: undefined,
    options: options ?? []
  }], [groupedOptions, options])
}

export type TGroupedOption = {
  groupName?: string
  options: TOption[]
}

export type TOption = {
  label: string | ReactNode
  value: string | number
}

export type TOptionsGroup = {
  title: string
  options: TOption[]
}

type TProps = {
  options?: TOption[]
  groupedOptions?: TGroupedOption[]
  currentValue: TOption['value'] | TOption['value'][]
  handleChange: (option: string) => void
  label?: string | null
  labelPlacement?: 'end' | 'start' | 'top' | 'bottom'
  placeholder?: string | null
  isError?: boolean
  selectClassName?: string
} & SelectProps

const CustomSelectBase: FC<TProps> = ({
  options,
  groupedOptions,
  currentValue,
  handleChange,
  placeholder,
  type,
  label,
  labelPlacement = 'top',
  isError,
  MenuProps,
  selectClassName,
  disabled,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const preparedGroups = usePreparedGroups(options, groupedOptions)

  return (
    <FormLabel labelPlacement={labelPlacement} label={label}>
      <FormControl fullWidth>
        <Select
          className={classNames(styles.select, selectClassName, {
            [styles.error]: isError
          })}
          inputProps={{
            inputMode: 'none'
          }}
          disabled={disabled}
          value={currentValue}
          displayEmpty
          onClick={(event) => event.stopPropagation()}
          onChange={({ target: { value } }) => handleChange(value as string)}
          renderValue={
            currentValue
              ? undefined
              : () => <p className={styles.placeholder}>{placeholder}</p>
          }
          open={isOpen}
          MenuProps={{
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'left'
            },
            transformOrigin: {
              vertical: 'top',
              horizontal: 'left'
            },
            disablePortal: true,
            ...MenuProps,
            classes: { paper: styles.menu }
          }}
          onOpen={() => setIsOpen(true)}
          onClose={() => setIsOpen(false)}
          IconComponent={(props) => (
            <button
              {...props}
              type="button"
              className={classNames(styles.iconWrapper, { [styles.cursorDefault]: disabled })}
              onClick={!disabled ? () => setIsOpen(true) : undefined}>
              <ArrowDownIcon/>
            </button>
          )}
          {...rest}
        >
          {
            preparedGroups?.reduce<ReactNode[]>((result, { groupName, options }) => [
              ...result,
              ...(
                groupName
                  ? [
                    <ListSubheader disableSticky key={groupName} className={styles.groupName}>
                      {groupName}
                    </ListSubheader>
                  ]
                  : []
              ),
              ...(options.map(({ value, label }) => (
                <MenuItem
                  className={styles.menuItem}
                  key={value}
                  value={value}>
                  {label}
                </MenuItem>
              )))
            ], [])
          }
        </Select>
      </FormControl>
    </FormLabel>
  )
}

export default CustomSelectBase
