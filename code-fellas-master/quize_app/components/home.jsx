import AdminDes from "./AdminDes";
import UserDes from "./UserDes";
import styles from "../styles/home2.module.css";


function Home2() {
  return (
    <div className={styles.home2Box} >
      <div className={styles.home2SubBox1}>
        <AdminDes />
      </div>
      <div className={styles.home2SubBox2}>
        <UserDes />
      </div>
    </div>
  );
}

export default Home2;
