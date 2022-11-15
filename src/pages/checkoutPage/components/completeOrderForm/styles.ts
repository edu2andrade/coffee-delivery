import styled from 'styled-components'

export const CompleteOrderFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (max-width: 84rem) {
    h3 {
      text-align: center;
    }
  }
`
export const FormSectionContainer = styled.div`
  width: 100%;
  padding: 2.5rem;
  background-color: ${({ theme }) => theme['base-card']};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`
