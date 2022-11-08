import styled from 'styled-components'

export const AddressFormContainer = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  column-gap: 0.75rem;
  row-gap: 1rem;
  grid-auto-flow: dense;

  .zip {
    grid-column: span 3;
    max-width: 12.5rem;
  }
  .street {
    grid-column: span 3;
  }
  .aditionalInfo {
    grid-column: span 2;
  }
  @media (max-width: 1000px) {
    grid-template-columns: repeat(1, 1fr);
    .zip {
      grid-column: 1;
      max-width: 100%;
    }
    .street {
      grid-column: 1;
    }
    .aditionalInfo {
      grid-column: 1;
    }
  }
`

export const Input = styled.input`
  padding: 1rem;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme['base-button']};
  background: ${({ theme }) => theme['base-input']};
  transition: 0.4s;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;

  &:focus {
    border-color: ${({ theme }) => theme['yellow-dark']};
    outline: none;
  }
`
export const RightText = styled.span`
  position: absolute;
  top: 9.25rem;
  right: 1rem;
  font-size: 0.75rem;
  margin-right: 0.75rem;
  font-style: italic;
  color: ${({ theme }) => theme['base-label']};
  @media (max-width: 1000px) {
    top: 13.375rem;
  }
`
