import styled from 'styled-components/macro'

export const TimelineContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
`

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1110px;
  height: 100vh;
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`

export const Heading = styled.h1`
  font-family: 'roboto';
  font-size: 18px;
  font-weight: 500;
  line-height: 2.7;
  color: #171f46;
  margin: 0px;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const CCBPHeading = styled.span`
  font-family: 'roboto';
  font-size: 24px;
  font-weight: 500;
  color: #2b237c;
  margin: 0px;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`
