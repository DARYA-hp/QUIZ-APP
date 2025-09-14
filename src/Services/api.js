import { useQuiz } from "../Context/QuizContext"
import { useNavigate } from "react-router-dom"

function Result() {
  const { state, dispatch } = useQuiz()
  const navigate = useNavigate()

  const handleRestart = () => {
    dispatch({ type: "RESTART_QUIZ" })
    navigate("/")
  }

  return (
    
   <div className="w-screen h-screen bg-gradient-to-b from-black to-gray-300">
     <div className="text-center pt-[150px]">
      <p className="text-[45px] text-[#f773d6] font-bold " style={{ textShadow: "3px 4px 3px " }}>Your Score: {state.score}</p>
      <button onClick={handleRestart} className="w-28 h-10 rounded-2xl mt-6 text-neutral-200 bg-[#ff00d4]">
        Restart Quiz
      </button>
    </div>
   </div>
  )
}

export default Result
