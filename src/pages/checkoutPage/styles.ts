import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  width: 100%;
  padding: 0 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  .formContainer {
    width: 100%;
    max-width: 84rem;
    margin-top: 2.5rem;
    display: flex;
    justify-content: space-between;
    gap: 2rem;

    @media (max-width: 84rem) {
      flex-direction: column;
    }
  }
`
