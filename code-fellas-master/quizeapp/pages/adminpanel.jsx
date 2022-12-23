import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import axios from "axios"
import styles from "../styles/app.module.css"

function AdminPanel() {
  const [formData, setFormData] = useState({
    question: "",
    correct_ans: "",
    difficulty:"",
    opt1: "",
    opt2: "",
    opt3: "",
    opt4: "",
  });
  const [noOfques, setNoOfques] = useState(0);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
   
    axios.post("https://quiz-applications.vercel.app/question/create",formData)
    .then((d)=>{
      setNoOfques(noOfques + 1);
    })
    .catch((e)=>{
      console.log(e)
    })
   
  };
  return (
    <Container className={styles.Box}>
      <h3 >Question Added:<span className={styles.txtSpan}>{noOfques}</span></h3>
      <Form onSubmit={handleSubmit} >
        <Form.Group className={styles.mb_3} controlId="formBasicEmail">
          <Form.Control
            name="question"
            type="text"
            value={formData.question}
            onChange={handleChange}
            placeholder="Enter Question"
          />
        </Form.Group>

        <Form.Group className={styles.mb_3} controlId="formBasicPassword">
          <Form.Control
            type="text"
            name="correct_ans"
            value={formData.correct_ans}
            onChange={handleChange}
            placeholder="Enter correct answer eg. correct1,correct2"
          />
        </Form.Group>
        <Form.Group className={styles.mb_3} controlId="formBasicPassword">
          <Form.Control
            type="text"
            name="difficulty"
            value={formData.difficulty}
            onChange={handleChange}
            placeholder="Enter difficulty level range from 1-10"
          />
        </Form.Group>
        <Form.Group className={styles.mb_3} controlId="formBasicPassword">
          <Form.Control
            type="text"
            name="opt1"
            value={formData.opt1}
            onChange={handleChange}
            placeholder="option 1"
          />
        </Form.Group>
        <Form.Group className={styles.mb_3} controlId="formBasicPassword">
          <Form.Control
            type="text"
            name="opt2"
            value={formData.opt2}
            onChange={handleChange}
            placeholder="option 2"
          />
        </Form.Group>
        <Form.Group className={styles.mb_3} controlId="formBasicPassword">
          <Form.Control
            type="text"
            name="opt3"
            value={formData.opt3}
            onChange={handleChange}
            placeholder="option 3"
          />
        </Form.Group>
        <Form.Group className={styles.mb_3} controlId="formBasicPassword">
          <Form.Control
            name="opt4"
            type="text"
            value={formData.opt4}
            onChange={handleChange}
            placeholder="option 4"
          />
        </Form.Group>

        <Button variant="dark" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default AdminPanel;
