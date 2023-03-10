import Button from 'react-bootstrap/Button';
import React from 'react'
import Link from 'next/link';
import styles from "../styles/app.module.css"

const UserDes = () => {
  return (
    <div >
    <h3>Rule for User</h3>
    <ul className={styles.txtStart}>
        <li>Each question should have a difficulty defined between 1–10.</li>
        <li>The quiz starts for everyone at difficulty level 5.</li>
        <li>For every correct answer, the next question should be at the current level + 1 difficulty.</li>
        <li>For every incorrect answer, the next question should be at the current level - 1 difficulty -1.</li>
    </ul>
    <Link href='/userpanel'> <Button variant="dark">Play !</Button></Link>
</div>
  )
}

export default UserDes