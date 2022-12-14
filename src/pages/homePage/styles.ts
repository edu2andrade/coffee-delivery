import styled from 'styled-components'
import bgImage from '../../assets/Background.svg'

export const HomeContainer = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const BgContainer = styled.div`
  background: url(${bgImage});
  width: 100%;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const HeroContainer = styled.section`
  min-height: 34rem;
  max-width: 96rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;

  @media (max-width: 75rem) {
    margin-top: 2rem;
    flex-wrap: wrap-reverse;
    gap: 2rem;

    img {
      height: 15rem;
    }
  }
`
export const ContentContainer = styled.div`
  max-width: 50rem;

  h1 {
    font-size: 4rem;
    font-weight: 800;
    line-height: 4.5rem;
    color: ${(props) => props.theme['base-title']};
  }

  p {
    margin-top: 1rem;
    font-size: 1.25rem;
  }

  @media (max-width: 84rem) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      text-align: center;
      font-size: 2.5rem;
      line-height: 2.5rem;
    }
    p {
      text-align: center;
    }
  }
`
export const FeaturesContainer = styled.div`
  margin-top: 4rem;
  max-width: 50rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;

  span {
    width: 20rem;
  }

  @media (max-width: 84rem) {
    margin: 3rem 0;
    span {
      width: 100%;
    }
  }
`
export const FeatureContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`
export const FeatureImgContainer = styled.div`
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`
