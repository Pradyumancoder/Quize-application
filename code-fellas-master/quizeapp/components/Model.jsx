import { useRouter } from "next/router";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function Model(props) {
const router = useRouter()

  const data = props.data;
  const handleClose=()=>{
    router.push("/")
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Quiz Ended</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h4>Your Final Score:</h4>
          <h2>{props.score}</h2>
        </div>
       
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="0 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="score"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Model;
