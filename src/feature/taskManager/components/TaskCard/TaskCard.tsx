import {FC, useState} from "react"
import styles from './TaskCard.module.scss'
import TaskActionModal from "../TaskActionModal/TaskActionModal.tsx"

const priorityMap = {
  "0":"low",
  "1":"medium",
  "2":'high'
}

type TProps = {
  id: string
  title: string
  authorName: string
  priority: '0' | '1' | '2'
}
const TaskCard: FC<TProps> = ({title,id, authorName, priority})=>{
  const [modalId, setModalId] = useState('')
  return(
    <>
      <TaskActionModal id={modalId} close={()=>setModalId('')}/>
      <button onClick={()=>setModalId(id)} className={styles.wrapper}>
        <div className={styles.titleWrapper}>
          <div className={styles[priorityMap[priority]]}/>
          <h2 className={styles.title}>{title}</h2>
        </div>
        <p className={styles.description}>{authorName}</p>
      </button>
    </>
  )
}

export default TaskCard
