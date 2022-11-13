import styled from 'styled-components'

export const SuccessPageContainer = styled.main`
  width: 100%;
  padding: 0 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ContentContainer = styled.section`
  width: 100%;
  max-width: 84rem;
  margin-top: 5rem;
  display: grid;
  grid-template-columns: fr fr;
  grid-template-rows: auto;
  grid-template-areas:
    'title title'
    'orderInfo img';
  gap: 2rem;

  img {
    grid-area: img;
    justify-self: end;
  }

  @media (max-width: 84rem) {
    grid-template-columns: fr;
    grid-template-areas:
      'title'
      'orderInfo'
      'img';
  }
`
export const Title = styled.div`
  grid-area: title;
  h1 {
    font-size: 2.5rem;
    font-weight: 800;
    color: ${(props) => props.theme['yellow-dark']};
  }

  p {
    font-size: 1.25rem;
  }
`
export const OrderInfoContainer = styled.div`
  grid-area: orderInfo;
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 32rem;
  padding: 2.5rem;
  border-radius: 6px 36px;
  background: ${(props) => props.theme['background-bg']};
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    margin: -1px;
    background: linear-gradient(to right, #dbac2c, #8047f8);
    border-radius: inherit;
  }
`
