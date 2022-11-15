import styled from 'styled-components'

export const PaymentMethodsOptionsContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;

  > p {
    grid-column: span 3;
    color: ${({ theme }) => theme['purple-regular']};
  }

  > span {
    position: absolute;
    color: red;
    font-style: italic;
    font-size: 0.85rem;
  }
  @media (max-width: 1000px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
