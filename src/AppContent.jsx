
import { useQuiz } from "./Context/QuizContext"
import Home from "./Pages/HOME.JSX"
import Quiz from "./Pages/Quiz"
import Result from "./Pages/Result"

function AppContent() {
  const { state } = useQuiz()

  if (state.loading) return <h2>Loading...</h2>
  if (state.finished) return <Result />
  if (state.questions.length === 0) return <Home />

  return <Quiz />
}

export default AppContent
