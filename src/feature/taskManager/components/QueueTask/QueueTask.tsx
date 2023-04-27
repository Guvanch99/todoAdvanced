import {useTaskFilter} from "../../hooks/useTaskFilter.ts"
import CardLayout from "../../../../layout/cardLayout/components/CardLayout/CardLayout.tsx"
import TaskCard from "../TaskCard/TaskCard.tsx"
import styles from './QueueTask.module.scss'
import SortSelect from "../../../../shared/components/formFields/SortSelect/SortSelect.tsx"
import {useFormInit} from "../../hooks/useFormInit.ts"
const QueueTask = ()=>{
  const {control, watch} = useFormInit()
  const sortType = watch('sort')
  const queueTasks = useTaskFilter('0', sortType)

  return(
    <CardLayout header={
      <div className={styles.wrapper}>
        <p>In Queue</p>
        <SortSelect control={control}/>
      </div>
    }>
      <div className={styles.content}>
        {
          queueTasks?.map(({title, author_name, priority,id})=>(
            <TaskCard key={id} id={id} title={title} authorName={author_name} priority={priority}/>
          ))
        }
      </div>
    </CardLayout>
  )
}

export default QueueTask
