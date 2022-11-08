import { useForm } from 'react-hook-form'
import { AddressFormContainer, Input, RightText } from './styles'

type ErrorsType = {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

export function AddressForm() {
  const { register, formState } = useForm()
  const { errors } = formState as ErrorsType

  return (
    <AddressFormContainer>
      <Input
        type="number"
        className="zip"
        placeholder="ZIP Code"
        {...register('zip', { required: true })}
      />
      {errors.zip && 'Zip code is required'}
      <Input
        className="street"
        placeholder="Street"
        {...register('street', { required: true })}
      />
      {errors.street && 'Street name is required'}
      <Input
        type="number"
        className="number"
        placeholder="Number"
        {...register('number', { required: true })}
      />
      {errors.zip && 'Number is required'}
      <Input
        className="aditionalInfo"
        placeholder="Aditional Info"
        {...register('adInfo')}
      />
      <RightText>Optional</RightText>
      <Input
        className="district"
        placeholder="District"
        {...register('district', { required: true })}
      />
      {errors.street && 'District name is required'}
      <Input
        className="city"
        placeholder="City"
        {...register('city', { required: true })}
      />
      {errors.street && 'City name is required'}
      <Input
        className="uf"
        placeholder="UF"
        {...register('uf', { required: true })}
      />
      {errors.uf && 'UF name is required'}
    </AddressFormContainer>
  )
}
