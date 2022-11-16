import styled from 'styled-components'

export const NoPageContainer = styled.section`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h1 {
    font-size: 6rem;
    font-weight: 800;
  }

  p {
    margin-top: 2rem;
  }

  .link {
    margin-top: 2rem;
    padding: 0.75rem;
    background: ${(props) => props.theme['yellow-regular']};
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: 700;
    text-decoration: none;
    line-height: 1.6;
    text-transform: uppercase;
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme['yellow-regular']};
    transition: background-color 0.2s ease-in-out;
    &:hover {
      background: ${(props) => props.theme['yellow-dark']};
    }
  }
`
