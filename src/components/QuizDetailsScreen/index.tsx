import styled from 'styled-components'
// import { AppLogo, StartIcon } from '../../config/icons'
import { useQuiz } from '../../context/QuizContext'
import {
  CenterCardContainer,
  HighlightedText,
  LogoContainer,
  PageCenter,
} from '../../styles/Global'
import { ScreenTypes } from '../../types'
import { convertSeconds } from '../../utils/helpers'

import Button from '../ui/Button'

const AppTitle = styled.h2`
  font-weight: 700;
  font-size: 32px;
  color: ${({ theme }) => theme.colors.themeColor};
`

const DetailTextContainer = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-top: 15px;
  margin-bottom: 40px;
  text-align: center;
  max-width: 500px;
`

const DetailText = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-top: 15px;
  line-height: 1.3;
`

const QuizDetailsScreen = () => {

  const { setCurrentScreen, quizDetails } = useQuiz()

  const { selectedQuizTopic, totalQuestions, totalScore, totalTime } = quizDetails

  const goToQuestionScreen = () => {
    setCurrentScreen(ScreenTypes.QuestionScreen)

    
  }

  return (
    <PageCenter light justifyCenter>
      <CenterCardContainer>
        {/* <LogoContainer>
          <AppLogo />
        </LogoContainer> */}
        <AppTitle>IQPATHS QUIZ</AppTitle>
        <DetailTextContainer>
          <DetailText>
            Selected Quiz Topic: <HighlightedText>{selectedQuizTopic}</HighlightedText>
          </DetailText>
          <DetailText>
            Total questions to attempt:{' '}
            <HighlightedText>{totalQuestions}</HighlightedText>
          </DetailText>
          <DetailText>
            Score in total: <HighlightedText>{totalScore}</HighlightedText>
          </DetailText>
          <DetailText>
            Total time: <HighlightedText>{convertSeconds(totalTime)}</HighlightedText>
          </DetailText>
          <DetailText>
            Hey Buddy, These are just Mock interview questions prepared for your benefit so<HighlightedText> dont try to cheat </HighlightedText> in this as in the end no one is going to judge you by this test and<HighlightedText> we are not going to use your test scores for any kind of exams </HighlightedText>,just try to do as many questions as you can by your own and in the end you will get the correct answers of all the questions<br></br>
            <DetailText>
            <HighlightedText>please consider few things in mind while giving the test :</HighlightedText>
            <DetailText>1. Dont reload the page as it will redirect to homescreen again .</DetailText>
             <DetailText>2. enough time is provided to you for solving the questions in every test and  you can not go back to correct any answer if you have done wrong so take your time and solve accordingly</DetailText>
             
          </DetailText>
            All the best for your Placements!
          </DetailText>
        </DetailTextContainer>
        <Button
          text="Start"
          icon={<img src="src\assets\icons\start.svg" alt="start Icon" style={{ width: '24px', height: '24px' }} />}
          iconPosition="left"
          onClick={goToQuestionScreen}
          bold
        />
      </CenterCardContainer>
    </PageCenter>
  )
}

export default QuizDetailsScreen
