import { FC } from 'react'
import styled from 'styled-components'

// import { TimerIcon } from '../../../../config/icons'
import { Flex } from '../../../../styles/Global'
import { device } from '../../../../styles/BreakPoints'

const TimerStyle = styled.span`
  min-width: 60px;
  font-size: clamp(16px, 5vw, 24px);
  font-weight: 500;
  margin-left: 8px;
  color: ${({ theme }) => theme.colors.themeColor};
  @media ${device.md} {
    margin-left: 5px;
    min-width: 55px;
  }
`

interface CounterProps {
  time: string
}

const Counter: FC<CounterProps> = ({ time }) => {
  return (
    <Flex center>
      {<img src="src\assets\icons\timer.svg" alt="timer Icon" style={{ width: '24px', height: '24px' }} />}
      <TimerStyle>{time}</TimerStyle>
    </Flex>
  )
}

export default Counter
