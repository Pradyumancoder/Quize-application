import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../context/Auth";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import styles from "../styles/app.module.css"
import { useRouter } from 'next/router'

function Login() {
  const [cred, setCred] = useState({ email: "", password: "" });
  const [error, setError] = useState(false);
  const [hide, setHide] = useState(true);
  const { credData, setCredData } = useContext(AuthContext);
  const router = useRouter();
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCred({ ...cred, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "https://quiz-applications.vercel.app/login",
        cred
      );
      setCredData({
        ...credData,
        token: data.token,
        isAuth: true,
        role: data.role,
      });
      if (data.role == "admin") {
        router.push("/adminpanel")
        console.log(data.role);
      } else if (data.role == "user") {
        router.push("/userpanel")
        console.log(data.role);
      }
    } catch (e) {
      setError(true);
    }
  };
  const handleShowPass = () => {
    setHide(!hide);
  };
  return (
    <div className={styles.signupBox}>
      <h3 style={{ textAlign: "center" }}>Login</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-" controlId="formBasicEmail">
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
            type={hide ? "password" : "text"}
            name="password"
            minLength="4"
            value={cred.password}
            onChange={handleChange}
            placeholder="Password"
          />
          <span className={styles.eyeicon} onClick={handleShowPass}>
            {hide ? <AiFillEye /> : <AiFillEyeInvisible />}
          </span>
        </Form.Group>
        <Form.Group>
          {error && <span className={styles.warning}>Invalid credentials !</span>}
        </Form.Group>
        <Button style={{ marginTop: "5px" }} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Login;
