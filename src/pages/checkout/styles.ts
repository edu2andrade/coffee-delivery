import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  max-width: 84rem;
  margin-top: 2.5rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`
