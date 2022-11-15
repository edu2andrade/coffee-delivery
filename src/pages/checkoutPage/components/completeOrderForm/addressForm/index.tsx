import { useFormContext } from 'react-hook-form'
// import { Input } from './input'
import { AddressFormContainer, ErrorText, Input, RightText } from './styles'

type ErrorsType = {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

export function AddressForm() {
  const { register, formState } = useFormContext()

  const { errors } = formState as ErrorsType

  return (
    <AddressFormContainer>
      <div className="zipContainer">
        <Input
          type="number"
          className="zipElement"
          placeholder="ZIP Code"
          {...register('zip', { required: true })}
        />
        {errors.zip ? (
          <ErrorText>Zip Code is required</ErrorText>
        ) : (
          <ErrorText></ErrorText>
        )}
      </div>
      <div className="streetContainer">
        <Input
          className="streetElement"
          placeholder="Street"
          {...register('street', { required: true })}
        />
        {errors.street ? (
          <ErrorText>Street is required</ErrorText>
        ) : (
          <ErrorText></ErrorText>
        )}
      </div>
      <div className="numberAddInfoContainer">
        <div className="numberContainer">
          <Input
            type="number"
            className="numberElement"
            placeholder="Number"
            {...register('number', { required: true })}
          />
          {errors.number ? (
            <ErrorText>Number is required</ErrorText>
          ) : (
            <ErrorText></ErrorText>
          )}
        </div>
        <div className="aditionalInfoContainer">
          <Input
            className="aditionalInfoElement"
            placeholder="Aditional Info"
            {...register('adInfo', { required: false })}
          />
          <RightText>Optional</RightText>
          <ErrorText></ErrorText>
        </div>
      </div>
      <div className="districtCityUfContainer">
        <div className="districtContainer">
          <Input
            className="districtElement"
            placeholder="District"
            {...register('district', { required: true })}
          />
          {errors.district && <ErrorText>District is required</ErrorText>}
        </div>
        <div className="cityContainer">
          <Input
            className="cityElement"
            placeholder="City"
            {...register('city', { required: true })}
          />
          {errors.city && <ErrorText>City is required</ErrorText>}
        </div>
        <div className="ufContainer">
          <Input
            className="ufElement"
            placeholder="UF"
            {...register('uf', { required: true })}
          />
          {errors.uf && <ErrorText>UF is required</ErrorText>}
        </div>
      </div>
    </AddressFormContainer>
  )
}
