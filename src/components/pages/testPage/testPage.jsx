import { useDispatch, useSelector } from "react-redux";
import classes from "./testPage.module.css"
import { useEffect, useState } from "react";
import { setAnswer } from "../../../redux/testPage/testPageReducer";
import TestResult from "./testResult/testResult";
import image from "../../../assets/images/i.png"

const TestPage = () => {
    const dispatch = useDispatch();
    const questions = useSelector(state => state.testPage.questions);
    const answers = useSelector(state => state.testPage.answers)
    const result = useSelector(state => state.testPage.result);

    const [сurrentQuestion, setCurrentQuestion] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showResultButton, setShowResultButton] = useState(false);
    const [isTestComplete, setIsTestComplete] = useState(false);

    useEffect(() => {
        setSelectedAnswer(answers[сurrentQuestion] || null)
    }, [сurrentQuestion, answers])

    const handleAnswerSelect = (answer) => {
        setSelectedAnswer(answer);
    }

    const handlePrevQuestion = () => {
        if (сurrentQuestion > 0) {
            setCurrentQuestion(сurrentQuestion - 1)
        }
    }

    const handleNextQuestion = () => {
        if (selectedAnswer !== null) {
            dispatch(setAnswer(сurrentQuestion, selectedAnswer));
            setSelectedAnswer(null)

        }
        if (сurrentQuestion === questions.length - 1) {
            setIsTestComplete(true);
            setShowResultButton(true);
        } else {
            setCurrentQuestion(сurrentQuestion + 1)
        }
    }

    const handleShowResult = () => {
        setShowResultButton(false);
    }

    if (сurrentQuestion >= questions.length) {
        return null;
    }

    return (
        <div className={classes.testContainer}>
            {(isTestComplete && result && !showResultButton) ? (<TestResult />) : (<div className={`container ${classes.testWrapper}`}>
                <p className={classes.testParagraf}>Если у вас есть вопросы по анкете или вам нужна помощь в ее заполнении, то вы можете позвонить <br />
                    по круглосуточному номеру 8 800 950-33-98</p>
                <div className={classes.test}>
                    <h2>{questions[сurrentQuestion].question}</h2>
                    <form action="">
                        {questions[сurrentQuestion].options.map((option, index) => (
                            <div key={index} className={classes.testAnswers}>

                                <input type="radio" id={option.value} name={option.value} value={option.value} checked={selectedAnswer === option.value}
                                    onChange={() => handleAnswerSelect(option.value)} />
                                <label htmlFor={option.value}>
                                    {option.text}
                                </label>
                            </div>
                        ))}
                    </form>
                    <div className={classes.testButtons}>
                        <button onClick={handlePrevQuestion} disabled={сurrentQuestion < 1}><img src="https://cdn-icons-png.flaticon.com/128/545/545680.png" alt="" /> Назад</button>

                        {showResultButton ? (<button onClick={handleShowResult}>Узнать<img src={image} alt="" /></button>)
                            : (<button onClick={handleNextQuestion} >Дальше <img src="https://cdn-icons-png.flaticon.com/128/545/545682.png" alt="" /></button>)}
                    </div>
                </div>
            </div>)}

        </div>
    )
}

export default TestPage;