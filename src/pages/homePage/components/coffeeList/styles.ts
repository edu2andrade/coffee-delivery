import styled from 'styled-components'

export const CoffeeListContainer = styled.section`
  max-width: 1156px;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  h2 {
    margin: 2rem 0 3.375rem;
    font-family: 'Baloo 2';
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: 800;
    font-size: 2rem;

    @media (max-width: 84rem) {
      text-align: center;
    }
  }
`

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 84rem) {
    align-items: center;
    justify-content: center;
  }
`
