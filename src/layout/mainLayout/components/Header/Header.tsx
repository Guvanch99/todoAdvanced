import { memo } from 'react'
import InnerLayout from '../Inner/InnerLayout'
import styles from './Header.module.scss'
import UserDropDownMenu from "../UserDropDownMenu/UserDropDownMenu.tsx"
import NewTask from "../NewTask/NewTask.tsx"
const Header = () => (
  <div className={styles.wrapper}>
    <InnerLayout borderBottomLine contentClass={styles.innerContent}>
      <div className={styles.content}>
        <NewTask/>
      </div>
      <UserDropDownMenu/>
    </InnerLayout>
  </div>
)

export default memo(Header)
