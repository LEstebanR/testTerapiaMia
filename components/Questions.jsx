import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

import Button from "./Button";

const Questions = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [arrowUrl, setArrowUrl] = useState(faAngleDown);
  const [arrowClass, setArrowClass] = useState("arrowDown");
  const [answerClass, setAnswerClass] = useState("answerHidden");
  const [showAnswer2, setShowAnswer2] = useState(false);
  const [arrowUrl2, setArrowUrl2] = useState(faAngleDown);
  const [arrowClass2, setArrowClass2] = useState("arrowDown");
  const [answerClass2, setAnswerClass2] = useState("answerHidden");
  const [showAnswer3, setShowAnswer3] = useState(false);
  const [arrowUrl3, setArrowUrl3] = useState(faAngleDown);
  const [arrowClass3, setArrowClass3] = useState("arrowDown");
  const [answerClass3, setAnswerClass3] = useState("answerHidden");
  const [showAnswer4, setShowAnswer4] = useState(false);
  const [arrowUrl4, setArrowUrl4] = useState(faAngleDown);
  const [arrowClass4, setArrowClass4] = useState("arrowDown");
  const [answerClass4, setAnswerClass4] = useState("answerHidden");
  
  const statusAnswer= () => {
    setShowAnswer(!showAnswer);
  }
  const statusAnswer2= () => {
    setShowAnswer2(!showAnswer2);
  }
  const statusAnswer3= () => {
    setShowAnswer3(!showAnswer3);
  }
  const statusAnswer4= () => {
    setShowAnswer4(!showAnswer4);
  }
  useEffect(() => {
    if (showAnswer) {
      setArrowUrl(faAngleUp);
      setArrowClass("arrowUp");
      setAnswerClass("answerShow");
    } else {
      setArrowUrl(faAngleDown);
      setArrowClass("arrowDown");
      setAnswerClass("answerHidden");
    }
  }, [showAnswer]);
  useEffect(() => {
    if (showAnswer2) {
      setArrowUrl2(faAngleUp);
      setArrowClass2("arrowUp");
      setAnswerClass2("answerShow");
    } else {
      setArrowUrl2(faAngleDown);
      setArrowClass2("arrowDown");
      setAnswerClass2("answerHidden");
    }
  }, [showAnswer2]);
  useEffect(() => {
    if (showAnswer3) {
      setArrowUrl3(faAngleUp);
      setArrowClass3("arrowUp");
      setAnswerClass3("answerShow");
    } else {
      setArrowUrl3(faAngleDown);
      setArrowClass3("arrowDown");
      setAnswerClass3("answerHidden");
    }
  }, [showAnswer3]);
  useEffect(() => {
    if (showAnswer4) {
      setArrowUrl4(faAngleUp);
      setArrowClass4("arrowUp");
      setAnswerClass4("answerShow");
    } else {
      setArrowUrl4(faAngleDown);
      setArrowClass4("arrowDown");
      setAnswerClass4("answerHidden");
    }
  }, [showAnswer4]);
  
  return (
    <div className="questions-container">
      <h1>Frequently Asked Questions</h1>
      <p>Here are some of our FAQs. If you have any other questions you will like answereded please feel free to email us.</p>
      <div className="question-container">
        <p className="question">What is Bookmark?</p>
        <div onClick={statusAnswer} >
          <FontAwesomeIcon className={arrowClass} icon={arrowUrl} />
        </div>
      </div>
      <p className={answerClass}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur assumenda, ratione aliquid culpa, illo facilis reiciendis quidem similique fuga nemo minima eveniet. Autem pariatur, neque quidem nesciunt nihil voluptatem officia!</p>
      <hr className="divisor"/>
     
      <div className="question-container">
        <p className="question">How can I request anew browser?</p>
        <div onClick={statusAnswer2} >
          <FontAwesomeIcon className={arrowClass2} icon={arrowUrl2} />
        </div>
      </div>  
        <p className={answerClass2}>Vivamus luctus eros aliquet convails ultrices Mauris auge massa, ultrices non liguia. Suspedisse imperdiet.Vivamus luctus eros aliquet convails ultrices Mauris auge massa, ultrices non liguia. Suspedisse imperdiet.Vivamus luctus eros aliquet convails ultrices Mauris auge massa, ultrices non liguia. Suspedisse imperdiet.</p>
        <hr className="divisor"/>
     
      <div className="question-container" >
        <p className="question">Is tehre a mobile app?</p>
        <div onClick={statusAnswer3} >
          <FontAwesomeIcon className={arrowClass3} icon={arrowUrl3} />
        </div>
      </div>
        <p className={answerClass3}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur assumenda, ratione aliquid culpa, illo facilis reiciendis quidem similique fuga nemo minima eveniet. Autem pariatur, neque quidem nesciunt nihil voluptatem officia!</p>
        <hr className="divisor"/>
     
      <div className="question-container">
        <p className="question">What about Chromium browsers?</p>
        <div onClick={statusAnswer4}>
          <FontAwesomeIcon className={arrowClass4} icon={arrowUrl4} />
        </div>
      </div>
        <p className={answerClass4}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur assumenda, ratione aliquid culpa, illo facilis reiciendis quidem similique fuga nemo minima eveniet. Autem pariatur, neque quidem nesciunt nihil voluptatem officia!</p>
        <hr className="divisor"/>

        <div className="question-button-container">
          <Button primary>More info</Button>
        </div>
     
    </div>
  )
}

export default Questions;