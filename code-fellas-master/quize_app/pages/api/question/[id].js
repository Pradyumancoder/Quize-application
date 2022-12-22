import { connect } from "../../../db.connect";
import QuestionModel from "../../../models/Question.model";

export default async function handler(req ,res){
    const { method } = req;
  const { id } = req.query;

  try {
    await connect();
  } catch (e) {
    console.log(e);
  }
  
  if (method === "POST") {
    try {
        const { question, correct_ans, difficulty, opt1, opt2, opt3, opt4 } =
        req.body;
      let newQuestion = new QuestionModel({
        question: question,
        correct_ans: correct_ans,
        difficulty: difficulty,
        opt1: opt1,
        opt2: opt2,
        opt3: opt3,
        opt4: opt4,
      });
      await newQuestion.save();
      res.status(200).send(newQuestion);
    } catch (e) {
      res.status(400).send("something bad happen");
    }
  }
}