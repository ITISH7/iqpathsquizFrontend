import React from 'react'
import styled from 'styled-components'

import { device } from '../../../styles/BreakPoints'
import CodeSnippet from '../../ui/CodeSnippet/index'
import Answer from '../Answer/index'
import QuizImage from '../../ui/QuizImage/index'

const QuestionContainer = styled.div`
  margin-top: 30px;
  margin-bottom: 40px;
  max-width: 88%;
  @media ${device.sm} {
    max-width: 100%;
  }
`

const AnswersContainer = styled.div`
  max-width: 78%;
  @media ${device.sm} {
    max-width: 100%;
  }
`

const QuestionStyle = styled.h2`
  font-size: clamp(18px, 4vw, 28px);
  font-weight: 500;
  margin-bottom: 25px;
  color: ${({ theme }) => theme.colors.primaryText};
  line-height: 1.3;
`

const Question = ({
  question,
  code,
  image,
  type,
  options,
  selectedAnswer,
  handleAnswerSelection,
}) => {
  // console.log('question:', question)
  // console.log('options', options)
  return (
    <QuestionContainer>
      <QuestionStyle>{question}</QuestionStyle>
      {/* if question contains code snippet then show code */}
      {code && <CodeSnippet code={code} language="javascript" />}
      {/* if question contains an image */}
      {image && <QuizImage image={image} />}
      <AnswersContainer>
        {options.map((option, index) => (
          <Answer
            option={option}
            index={index}
            key={index}
            onChange={(e) => handleAnswerSelection(e, index)}
            type={type}
            selectedAnswer={selectedAnswer}
          />
        ))}
      </AnswersContainer>
    </QuestionContainer>
  )
}

export default Question
