import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Pages/HOME.JSX"
import Quiz from "./Pages/Quiz"
import Result from "./Pages/Result"
import QuizProvider from "./Context/QuizContext"

function App() {
  return (
    <QuizProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </Router>
    </QuizProvider>
  )
}

export default App
