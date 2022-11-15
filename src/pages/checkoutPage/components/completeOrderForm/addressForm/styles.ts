import styled from 'styled-components'

export const AddressFormContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  .zipContainer {
    .zipElement {
      width: 12.5rem;
    }
  }

  .streetContainer {
    .streetElement {
      width: 100%;
    }
  }

  .numberAddInfoContainer {
    display: flex;
    gap: 1rem;

    .aditionalInfoContainer {
      position: relative;
      flex: 1;

      .aditionalInfoElement {
        width: 100%;
      }
    }
  }

  .districtCityUfContainer {
    display: flex;
    gap: 1rem;

    .cityContainer {
      .cityElement {
        width: 30rem;
      }
    }

    .ufContainer {
      width: 6.5rem;
      .ufElement {
        width: 6.5rem;
      }
    }
  }

  @media (max-width: 84rem) {
    .zipContainer {
      .zipElement {
        width: 6.5rem;
      }
    }
    .numberAddInfoContainer {
      flex-direction: column;

      .numberContainer {
        margin-bottom: -0.825rem;
        .numberElement {
          width: 100%;
        }
      }
    }
    .districtCityUfContainer {
      flex-direction: column;

      .districtContainer {
        .districtElement {
          width: 100%;
        }
      }
      .cityContainer {
        .cityElement {
          width: 100%;
        }
      }
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
  top: 1.2rem;
  right: 0.5rem;
  font-size: 0.75rem;
  margin-right: 0.75rem;
  font-style: italic;
  color: ${({ theme }) => theme['base-label']};
`
export const ErrorText = styled.span`
  margin: -1rem 0 0 1rem;
  color: red;
  font-style: italic;
  font-size: small;
`
