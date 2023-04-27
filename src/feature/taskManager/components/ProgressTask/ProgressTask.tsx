import CardLayout from "../../../../layout/cardLayout/components/CardLayout/CardLayout.tsx"
import {useTaskFilter} from "../../hooks/useTaskFilter.ts"
import TaskCard from "../TaskCard/TaskCard.tsx"
import styles from './ProgressTask.module.scss'
import SortSelect from "../../../../shared/components/formFields/SortSelect/SortSelect.tsx"
import {useFormInit} from "../../hooks/useFormInit.ts"
const ProgressTask = ()=>{
  const {control, watch} = useFormInit()
  const sortType = watch('sort')
  const progressTasks = useTaskFilter('1', sortType)

  return(
    <CardLayout header={
      <div className={styles.wrapper}>
        <p>In Progress</p>
        <SortSelect control={control}/>
      </div>
    }>
      <div className={styles.content}>
        {
          progressTasks?.map(({title, author_name, priority,id})=>(
            <TaskCard key={id} id={id} title={title} authorName={author_name} priority={priority}/>
          ))
        }
      </div>
    </CardLayout>
  )
}

export default ProgressTask
