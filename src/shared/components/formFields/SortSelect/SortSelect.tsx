import CustomSelectControl from "../../formControls/CustomSelect/CustomSelectControl/CustomSelectControl.tsx"
import {Control} from "react-hook-form"
import {FC, memo} from "react"
import styles from './SortSelect.module.scss'

const options = [
  {
    value:'DOWN',
    label:"Down"
  },
  {
    value:'UP',
    label:"Up"
  }
]

type TProps = {
  control: Control<any>
}

const SortSelect: FC<TProps> = ({control})=>(
  <div className={styles.wrapper}>
    <CustomSelectControl
      control={control}
      options={options}
      isRequired
      name="sort"
      placeholder="Sort"
      handleError={(error) => error?.sort}
    />
  </div>
)

export default memo(SortSelect)
