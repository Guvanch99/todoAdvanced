import {memo} from "react"
import PrimaryLayout from "../../../layout/primaryLayout/components/primaryLayout/PrimaryLayout.tsx"
import {useNavigate} from "react-router-dom"
import PrimaryButton from "../../../shared/components/buttons/PrimaryButton/PrimaryButton.tsx"
import styles from './Error.module.scss'

const Error = ()=>{
  const navigate = useNavigate()
  return(
    <PrimaryLayout header={<div className={styles.header}>Error</div>}>
      <div className={styles.wrapper}>
        <p className={styles.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged.
        </p>
        <PrimaryButton onClick={()=>navigate('/login')} text="Back"/>
      </div>

    </PrimaryLayout>
  )
}

export default memo(Error)
