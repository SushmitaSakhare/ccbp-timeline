import styled from 'styled-components/macro'

export const ProjectCardContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 7px;
  margin-bottom: 7px;
  @media screen and (min-width: 768px) {
  }
`

export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  @media screen and (min-width: 768px) {
  }
`

export const ProjectTitle = styled.h1`
  font-family: 'roboto';
  font-size: 20px;
  font-weight: 700;
  line-height: 1.3;
  color: #171f46;
  margin: 0px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`

export const ProjectTitleAndDurationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`
export const DurationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Duration = styled.p`
  font-family: 'roboto';
  font-size: 12px;
  font-weight: 600;
  line-height: 1.2;
  color: #171f46;
  margin-left: 4px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`

export const ProjectDescription = styled.p`
  font-family: 'roboto';
  font-size: 12px;
  line-height: 1.5;
  color: #1e293b;
  margin-top: 0px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
export const VisitLink = styled.a`
  font-family: 'roboto';
  font-size: 14px;
  font-weight: 600;
  line-height: 1.2;
  color: #0967d2;
  text-align: center;
  margin-top: 5px;
  text-decoration: none;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`
