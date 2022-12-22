import { connect } from "../../../db.connect";
import QuestionModel from "../../../models/Question.model";


QuestionRoute.get("/", async (req, res) => {
  try {
    const { difficulty } = req.query;
    // console.log(req.query)
    let data = await QuestionModel.find({ difficulty: difficulty },{correct_ans:0});
    res.status(200).send(data);
  } catch (e) {
    res.status(400).send(e);
  }
});
QuestionRoute.post("/checkans/:id", async (req, res) => {
  try {
    const {id} = req.params;
    const {userAns}=req.body;
    let data = await QuestionModel.find({_id:id});
    let s=data[0].correct_ans==userAns;
    console.log(data,data[0].correct_ans,userAns)
    res.status(200).send({msg:s});
  } catch (e) {
    res.status(400).send(e);
  }
});
module.exports = QuestionRoute;


export default async function handler(req, res){
    const { method } = req;

    try {
        await connect();
      } catch (e) {
        console.log(e);
      }

      if (method === "POST") {
        try {
            const {id} = req.params;
            const {userAns}=req.body;
            let data = await QuestionModel.find({_id:id});
            let s=data[0].correct_ans==userAns;
            console.log(data,data[0].correct_ans,userAns)
            res.status(200).send({msg:s});
          } catch (e) {
            res.status(400).send(e);
          }
        }
}
