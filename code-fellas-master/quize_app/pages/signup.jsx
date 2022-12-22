import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "../styles/app.module.css"
import { AiFillEye,AiFillEyeInvisible} from 'react-icons/ai';
function Signup() {
  const [cred, setCred] = useState({ role: "", email: "", password: "" });
  const [error, setError] = useState(false);
  const [hide,setHide]=useState(true)

  const router= useRouter()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCred({ ...cred, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post("https://quiz-applications.vercel.app/signup", cred);
      router.push("/loginpage")
    } catch (e) {
      setError(true);
    }
  };
  const handleShowPass=()=>{
   setHide(!hide)
  }
  return (
    <div className={styles.signupBox}>
      <h3 style={{ textAlign: "center" }}>Signup</h3>
      <Form onSubmit={handleSubmit} required>
        <Form.Group className="mb-">
          <Form.Label>Select role</Form.Label>
          <Form.Select
            aria-label="Select role"
            value={cred.role}
            name="role"
            onChange={handleChange}
          >
            <option>select role</option>
            <option value="admin">admin</option>
            <option value="user">user</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className={styles.mb-3} controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={cred.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type={hide?"password":"text"}
            name="password"
            minLength="4"
            value={cred.password}
            onChange={handleChange}
            placeholder="Password"
          />
          <span className={styles.eyeicon} onClick={handleShowPass}>{hide?<AiFillEye/>:<AiFillEyeInvisible/>}</span>
        </Form.Group>
        <Form.Group>
          {error && <span className={styles.warning} >user already exists</span>}
        </Form.Group>
        <Button style={{ marginTop: "5px" }} variant="dark" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Signup;
