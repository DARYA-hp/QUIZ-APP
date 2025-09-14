import { useEffect } from "react"
import { useQuiz } from "../Context/QuizContext"
import { useNavigate } from "react-router-dom"

function Quiz() {
  const { state, dispatch } = useQuiz()
  const navigate = useNavigate()

  useEffect(() => {
    if (state.finished) {
      navigate("/result")
    }
  }, [state.finished, navigate])

 console.log(test);
 
  if (!state.questions.length) return <p>Loading questions...</p>
  if (state.currentQuestion >= state.questions.length) return <p>No more questions</p>

  const question = state.questions[state.currentQuestion]
  const options = [...question.incorrect_answers, question.correct_answer].sort(() => Math.random() - 0.5)

  const handleAnswer = (answer) => {
    dispatch({ type: "ANSWER_QUESTION", payload: answer })
  }
 return(
  <>
  <div className="w-screen h-screen bg-gradient-to-b from-gray-300 to-black">
     <div className="text-center pt-[150px]">
      <p className="text-[35px] text-[#070783] font-bold"  style={{ textShadow: "2px 2px 2px  " }}>
        Question {state.currentQuestion + 1} of {state.questions.length}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question.question }} className="pt-6 text-[#121264] text-[27px]" style={{ textShadow: "1px 3px 3px  " }} />

      <div className="options">
        <div className="grid grid-cols-1 gap-4 mt-6 max-w-md mx-auto">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              dangerouslySetInnerHTML={{ __html: option }}
              className=" py-3 px-4 bg-[#cbcbf5] text-[#010150]  font-semibold 
                 hover:bg-blue-900 hover:text-white  duration-300 rounded-3xl"
            />
          ))}
        </div>

      </div>
    </div>
  </div>
  </>
 )
}

export default Quiz
