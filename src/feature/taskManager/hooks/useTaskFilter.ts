import {TTask} from "../types.ts"
import {useTaskManagerContext} from "../state/useTaskManagerState.ts"
import {useMemo} from "react"

export function useTaskFilter(status: TTask['status'], sortType?: 'UP' | 'DOWN'){
  const {tasks} = useTaskManagerContext()

  const filteredTasks = useMemo(()=>tasks
    ?.filter((task)=>task.status === status)
  ,[tasks, status])

  return useMemo(()=>{
    if(!sortType){
      return filteredTasks
    }
    if(sortType === "UP"){
      return filteredTasks?.sort((a, b) =>
        new Date(a.schedule.creation_time).getTime() -
        new Date(b.schedule.creation_time).getTime()
      )
    }
    return filteredTasks?.sort((a, b) =>
      new Date(b.schedule.creation_time).getTime() -
      new Date(a.schedule.creation_time).getTime()
    )
  },[sortType, filteredTasks])
}
