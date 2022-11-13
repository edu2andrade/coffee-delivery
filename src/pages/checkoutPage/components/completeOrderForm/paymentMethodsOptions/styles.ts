import styled from 'styled-components'

export const PaymentMethodsOptionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  > p {
    grid-column: span 3;
    color: ${({ theme }) => theme['purple-regular']};
  }
  @media (max-width: 1000px) {
    grid-template-columns: repeat(1, 1fr);
  }
`