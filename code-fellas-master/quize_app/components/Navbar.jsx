import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useContext } from 'react';
import Link from 'next/link';
import { AuthContext } from '../context/Auth';
import styles from "../styles/app.module.css"

const Navbarglobal = () => {
    const {credData,setCredData}=useContext(AuthContext)
    const handleLogout=()=>{
     setCredData({
       ...credData,
       token: "",
       isAuth: false,
       role: "",
     })
    }

  return (
    <div>
       <Navbar bg="primary" variant="dark" 
    className={styles.navbar}
    >
      <Container>
    <Link href ="/" 
      className={styles.logText}
      >Quiz Aplication</Link>
       {
         credData.isAuth?(<Button  variant="secondary" onClick={handleLogout}>Logout</Button>):(<Button  variant="secondary"><Link href="/loginpage" className={styles.logText}>Login</Link>/<Link href="signup" className={styles.logText}>Signup</Link></Button>)
        }
      </Container>
    </Navbar>
    </div>
  )
}

export default Navbarglobal
