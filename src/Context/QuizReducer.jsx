export const initialState = {
  currentQuestion: 0,
  score: 0,
  questions: [],
  loading: false,
  finished: false,
}

function quizReducer(state, action) {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: true }

    case "SET_QUESTIONS":
      return { ...state, questions: action.payload, loading: false }

    case "ANSWER_QUESTION":
      const isCorrect =
        action.payload === state.questions[state.currentQuestion].correct_answer

      const updatedScore = isCorrect ? state.score + 1 : state.score
      const isLastQuestion =
        state.currentQuestion + 1 === state.questions.length

      return {
        ...state,
        score: updatedScore,
        currentQuestion: state.currentQuestion + 1,
        finished: isLastQuestion,
      }

    case "RESTART_QUIZ":
      return { ...initialState }

    case "SET_ERROR":
      return { ...state, loading: false, error: action.payload }

    default:
      return state
  }
}

export default quizReducer
