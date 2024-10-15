import "./quizzesPage.scss"
import { englishTest } from "../../lib/englishTest"
import { useRef, useState } from "react";

const QuizzesPage = () => {
    let numberOfQuestions = englishTest.length;
    let [index, setIndex] = useState(0);
    let [question, setQuestion] = useState(englishTest[index]);
    let [lock, setLock] = useState(false);
    let [score, setScore] = useState(0);
    let [result, setResult] = useState(false);

    let Option1 = useRef(null);
    let Option2 = useRef(null);
    let Option3 = useRef(null);
    let Option4 = useRef(null);

    let option_array = [Option1, Option2, Option3, Option4];

    const checkAnswer = (e,ans) => {
        if(lock === false) {

            if(question.ans === ans){
                //console.log("Correct Answer");
                e.target.classList.add("correct");
                setLock(true);
                setScore (prev=>prev+1);
            } 
            else {
                //console.log("Wrong Answer");
                e.target.classList.add("wrong");
                setLock(true);
                option_array[question.ans-1].current.classList.add("correct");
            }
        }
    }

    const nextQuestion = () => {
        if (lock === true) {
            if(index === numberOfQuestions-1){
                setResult(true);
                return 0;
            }
            setIndex(++index);
            setQuestion(englishTest[index]);
            setLock(false);
            option_array.map((option)=>{
                option.current.classList.remove("correct");
                option.current.classList.remove("wrong");

            });
        }
    } 

  return (
   <div className="page">
        <div className="container">
          <h1>Quizzes</h1>
          <hr />
          {result 
          ? <>
          <h1>Your Score is {score} out of {numberOfQuestions}</h1>
          <button onClick={()=>{window.location.reload()}}>Restart</button>
          </>
          : <>
          <h2><span>{index+1}.</span> {question.question} </h2>
          <ul>
            <li ref={Option1} onClick={(e) => {checkAnswer(e,1)}}>{question.option1}</li>
            <li ref={Option2} onClick={(e) => {checkAnswer(e,2)}}>{question.option2}</li>
            <li ref={Option3} onClick={(e) => {checkAnswer(e,3)}}>{question.option3}</li>
            <li ref={Option4} onClick={(e) => {checkAnswer(e,4)}}>{question.option4}</li>
          </ul>
          <button onClick={nextQuestion}>Next</button>
          <div className="index">{index+1} of {numberOfQuestions} questions</div>
          </>}      
        </div>
   </div>
  )
}

export default QuizzesPage
