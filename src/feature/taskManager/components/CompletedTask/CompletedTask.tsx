import {useTaskFilter} from "../../hooks/useTaskFilter.ts"
import CardLayout from "../../../../layout/cardLayout/components/CardLayout/CardLayout.tsx"
import TaskCard from "../TaskCard/TaskCard.tsx"
import styles from './CompletedTask.module.scss'
import SortSelect from "../../../../shared/components/formFields/SortSelect/SortSelect.tsx"
import {useFormInit} from "../../hooks/useFormInit.ts"

const CompletedTask = ()=>{
  const {control, watch} = useFormInit()
  const sortType = watch('sort')
  const completedTasks = useTaskFilter('2', sortType)

  return(
    <CardLayout header={
      <div className={styles.wrapper}>
        <p>Completed</p>
        <SortSelect control={control}/>
      </div>
    }>
      <div className={styles.content}>
        {
          completedTasks?.map(({title, priority, author_name,id})=>(
            <TaskCard key={id} id={id} title={title} authorName={author_name} priority={priority}/>
          ))
        }
      </div>
    </CardLayout>
  )
}

export default CompletedTask
