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
       <Navbar bg="secondary" variant="dark" 
    className={styles.navbar}
    >
      <Container>
    <Link href ="/" className={styles.logText}>
     <div style={{display:"flex", alignItems:"center",gap:"10px" }}>
     <img src="https://i.postimg.cc/SRfc0876/cropped-blackccg-1-120x130-removebg-preview.png" alt="" width="20%" />
      <h4>Champions Game</h4>
     </div>
      </Link>
       {
         credData.isAuth?(<Button  variant="dark" onClick={handleLogout}>Logout</Button>):(<Button  variant="dark"><Link href="/loginpage" className={styles.logText}>Login</Link>/<Link href="signup" className={styles.logText}>Signup</Link></Button>)
        }
      </Container>
    </Navbar>
    </div>
  )
}

export default Navbarglobal
