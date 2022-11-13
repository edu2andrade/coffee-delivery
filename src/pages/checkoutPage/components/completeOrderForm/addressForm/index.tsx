import { useFormContext } from 'react-hook-form'
import { AddressFormContainer, Input, RightText } from './styles'

export function AddressForm() {
  const { register } = useFormContext()

  return (
    <AddressFormContainer>
      <Input
        type="number"
        className="zip"
        placeholder="ZIP Code"
        {...register('zip')}
      />
      <Input className="street" placeholder="Street" {...register('street')} />
      <Input
        type="number"
        className="number"
        placeholder="Number"
        {...register('number')}
      />
      <Input
        className="aditionalInfo"
        placeholder="Aditional Info"
        {...register('adInfo')}
      />
      <RightText>Optional</RightText>
      <Input
        className="district"
        placeholder="District"
        {...register('district')}
      />
      <Input className="city" placeholder="City" {...register('city')} />
      <Input className="uf" placeholder="UF" {...register('uf')} />
    </AddressFormContainer>
  )
}
