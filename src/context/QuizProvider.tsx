import { ReactNode, useEffect, useState } from 'react'
import { quiz } from '../data/QuizQuestions'
import { QuizContextTypes, Result, ScreenTypes } from '../types'
import { QuizContext, initialState } from './QuizContext'

type QuizProviderProps = {
  children: ReactNode
}

export function QuizProvider({ children }: QuizProviderProps) {
  const [timer, setTimer] = useState<number>(initialState.timer)
  const [endTime, setEndTime] = useState<number>(initialState.endTime)
  const [quizTopic, setQuizTopic] = useState<string>(initialState.quizTopic)
  const [result, setResult] = useState<Result[]>(initialState.result)
  const [currentScreen, setCurrentScreen] = useState<ScreenTypes>(
    initialState.currentScreen
  )
  const [questions, setQuestions] =  useState<any[]>([])

  // const {
  //   // questions: quizQuestions,
  //   totalQuestions,
  //   totalTime,
  //   totalScore,
  // } = quiz[quizTopic]

  const selectQuizTopic = (topic: string) => {
    setQuizTopic(topic)
  }

  useEffect(() => {
    // setTimer(totalTime)
    // setQuestions(quizQuestions)
    console.log(questions)
  }, [quizTopic])

  const quizDetails = {
    totalQuestions: questions.length,
    totalScore: 100,  // Assuming a fixed total score for dummy data
    totalTime: timer,
    selectedQuizTopic: quizTopic,
  }

  const quizContextValue: QuizContextTypes = {
    currentScreen,
    setCurrentScreen,
    quizTopic,
    selectQuizTopic,
    questions,
    setQuestions,
    result,
    setResult,
    quizDetails,
    timer,
    setTimer,
    endTime,
    setEndTime,
  }

  return <QuizContext.Provider value={quizContextValue}>{children}</QuizContext.Provider>
}

