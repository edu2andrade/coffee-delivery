import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.25rem;
  padding: 0 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ContentContainer = styled.div`
  width: 100%;
  max-width: 84rem;
  display: flex;
  justify-content: space-between;
`
export const InfoContainer = styled.div`
  width: 14rem;
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 12px;

  button {
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    border: none;
    border-radius: 6px;
    background: ${(props) => props.theme['purple-light']};
    color: ${(props) => props.theme['purple-regular']};
    font-size: 0.875rem;

    transition: all 0.2s;

    &:hover {
      filter: opacity(0.8);
    }
  }
`
export const CartContainer = styled.div`
  background: ${(props) => props.theme['yellow-light']};
  padding: 0.5rem;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  cursor: pointer;

  transition: all 0.2s;

  &:hover {
    filter: opacity(0.8);
  }
`
export const QuantityContainer = styled.div`
  position: absolute;
  right: -7px;
  top: -7px;
  background: ${(props) => props.theme['yellow-dark']};
  color: ${(props) => props.theme.white};
  font-size: 0.825rem;
  font-weight: bold;
  padding: 2px 6px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`
