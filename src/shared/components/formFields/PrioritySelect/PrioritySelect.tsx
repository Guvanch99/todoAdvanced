import {FC, memo} from "react"
import {Control} from "react-hook-form"
import CustomSelectControl from "../../formControls/CustomSelect/CustomSelectControl/CustomSelectControl.tsx"

const options = [
  {
    value: '0',
    label:'Low'
  },
  {
    value: '1',
    label:'Medium'
  },
  {
    value: '2',
    label:'High'
  }
]

type TProps = {
  control: Control<any>
}
const PrioritySelect: FC<TProps> = ({control})=>(
  <CustomSelectControl
    control={control}
    options={options}
    isRequired
    name="priority"
    label={`Priority *`}
    placeholder="Priority"
    handleError={(error) => error?.priority}
  />
)

export default memo(PrioritySelect)
