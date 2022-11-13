import styled from 'styled-components'

export const OrderDetailContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

interface IconContainerProps {
  iconBG: string
}

export const IconContainer = styled.div<IconContainerProps>`
  background: ${({ iconBG }) => iconBG};
  color: ${(props) => props.theme.white};
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`
