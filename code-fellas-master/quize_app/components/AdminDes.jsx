import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import { useContext } from "react";
import { AuthContext } from "../context/Auth";
import ErrorShow from "./ErrorModal";
import { useRouter } from "next/router";
import styles from "../styles/app.module.css"
const AdminDes = () => {
const router=useRouter()
  const {credData}=useContext(AuthContext)
  const [modalShow, setModalShow] = useState(false);
  // console.log(credData)
  const handleClick=()=>{
   if(credData.role=="admin"){
    router.push("/admin")
   }else{
    setModalShow(true)
   }
  }
  return (
    <Stack  gap={5} >
      {modalShow&&<ErrorShow show={modalShow} text={"You are not Authorized Person"} onHide={() => setModalShow(false)}/>}
      <div>
        <h3>Rule for Admin</h3>
        <ul className={styles.txtStart}>
          <li>Admin can add 10 random question</li>
          <li>Question type</li>
          <li>Multiple choice with a single correct answer</li>
          <li>Multiple choice with multiple correct answers</li>
        </ul>
      </div>
      <div>
       
          <Button onClick={handleClick} variant="primary">Go to Admin Page</Button>
       
      </div>
    </Stack>
  );
};

export default AdminDes;
