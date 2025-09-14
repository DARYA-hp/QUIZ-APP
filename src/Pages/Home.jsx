import { useQuiz } from "../Context/QuizContext"
import { fetchQuestions } from "../Services/api"
import { useNavigate } from "react-router-dom"

function Home() {
  const { dispatch } = useQuiz()
  const navigate = useNavigate()

  const startQuiz = async () => {
    dispatch({ type: "SET_LOADING" })
    try {
      const data = await fetchQuestions()
      dispatch({ type: "SET_QUESTIONS", payload: data })
      navigate("/quiz")
    } catch (error) {
      console.error("Failed to fetch questions:", error)
      dispatch({ type: "SET_ERROR", payload: "Failed to load questions" })
    }
  }
  }
  return (
    <div className="w-screen h-screen bg-gradient-to-b from-black to-gray-300">
      <div className="text-center pt-[150px]">
        <p className="text-[50px] text-[#f773d6] font-bold " style={{ textShadow: "4px 4px 4px " }}>Quiz App</p>
        <p className="pt-6 text-[35px] text-[#e987d9]" style={{ textShadow: "2px 3px 3px " }}>Welcome to Quiz App</p>
        <button onClick={startQuiz} className="w-28 h-10 rounded-2xl mt-6 text-neutral-200 bg-[#ff00d4]">
          Start Quiz
        </button>
      </div>
    </div>
  )
export default Home