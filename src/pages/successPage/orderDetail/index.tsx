import { ReactNode } from 'react'
import { OrderDetailContainer, IconContainer } from './styles'

interface OrderDetailProps {
  icon: ReactNode
  title: ReactNode
  subtitle: ReactNode
  iconBG: string
}

export function OrderDetail({
  icon,
  title,
  subtitle,
  iconBG,
}: OrderDetailProps) {
  return (
    <OrderDetailContainer>
      <IconContainer iconBG={iconBG}>{icon}</IconContainer>
      <div>
        <span>{title}</span>
        <span className="sub">{subtitle}</span>
      </div>
    </OrderDetailContainer>
  )
}
