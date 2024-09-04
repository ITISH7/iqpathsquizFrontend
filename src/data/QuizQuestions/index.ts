import { Apptitude } from './apptitude'
import { CCpp } from './cc++'
import { Communication } from './communicationAndGrammer'
import { ComputerFundamentals } from './computerfundamental'
import { generalKnowledge } from './generalKnowledge'
import { javascript } from './javascript'
import { MernStack } from './mernStack'
import { python } from './python'
import { react } from './react'
import { VerbalCommunication } from './verbalCommunication'

// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

type Choice = string
type CorrectAnswers = string[]

export type Question = {
  question: string
  choices: Choice[]
  type: 'MCQs' | 'MAQs' | 'boolean'
  correctAnswers: CorrectAnswers
  score: number
  code?: string
  image?: string
}

export type Topic = {
  topic: string
  level: string
  totalQuestions: number
  totalScore: number
  totalTime: number
  questions: Question[]
}

export const quiz: Record<string, Topic> = {
  JavaScript: javascript,
  React: react,
  Python: python,
  Apptitude:Apptitude,
  'Communication and Grammer':Communication,
  'Computer Fundamentals':ComputerFundamentals,
  'General Knowledge': generalKnowledge,
  'Mern Stack':MernStack,
  'C/C++':CCpp,
  'Verbal Communication':VerbalCommunication
}
