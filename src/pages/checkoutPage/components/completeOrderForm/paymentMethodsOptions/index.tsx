import { Bank, CreditCard, Money } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { PaymentMethodsInput } from '../paymentMethodsInput'
import { PaymentMethodsOptionsContainer } from './styles'
// import { ErrorText } from '../addressForm/styles'

export const paymentMethods = {
  credit: {
    label: 'Credit Card',
    icon: <CreditCard size={16} />,
  },
  debit: {
    label: 'Debit Card',
    icon: <Bank size={16} />,
  },
  cash: {
    label: 'Cash',
    icon: <Money size={16} />,
  },
}

export function PaymentMethodsOptions() {
  const {
    register,
    // formState: { errors },
  } = useFormContext()

  // const paymentMethodError = errors?.paymentMethod?.message as string
  // const paymentMethodError = errors.paymentMethod?.message as string

  return (
    <PaymentMethodsOptionsContainer>
      {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
        <PaymentMethodsInput
          key={label}
          id={key}
          icon={icon}
          label={label}
          value={key}
          {...register('paymentMethods' /*, { required: true } */)}
        />
      ))}
      {/* {errors.paymentMethods && (
        <ErrorText>Please select your Payment Method...</ErrorText>
      )} */}
    </PaymentMethodsOptionsContainer>
  )
}
