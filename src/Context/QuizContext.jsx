import { createContext, useContext, useReducer } from "react"
import quizReducer, { initialState } from "./QuizReducer"

const QuizContext = createContext()

function QuizProvider({ children }) {
  const [state, dispatch] = useReducer(quizReducer, initialState)

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  )
}

export function useQuiz() {
  return useContext(QuizContext)
}

export default QuizProvider

