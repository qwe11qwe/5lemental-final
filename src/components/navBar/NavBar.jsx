import { homeLine, plus, heartLine, userLine } from '@/assets/icons/svg-icons.js';
import styles from './Component.module.css';

function NavBar () {

  return(
    <nav className={styles.nav}>
      {/* <NavLink to='/'> */}
        <div className={styles.item}>
          <img src={homeLine} className={styles.icon}/>
          <span className={styles.text}>홈</span>
        </div>
      {/* </NavLink> */}
      {/* <NavLink to='/'> */}
        <div className={styles.item}>
          <img src={plus} className={styles.icon}/>
          <span className={styles.text}>재료추가</span>
        </div>
      {/* </NavLink> */}
      {/* <NavLink to='/'> */}
      <div className={styles.item}>
        <img src={heartLine} className={styles.icon}/>
        <span className={styles.text}>좋아요</span>
      </div>
      {/* </NavLink> */}
      {/* <NavLink to='/'> */}
      <div className={styles.item}>
        <img src={userLine} className={styles.icon}/>
        <span className={styles.text}>프로필</span>
      </div>
      {/* </NavLink> */}
    </nav>
  )
}

export default NavBar