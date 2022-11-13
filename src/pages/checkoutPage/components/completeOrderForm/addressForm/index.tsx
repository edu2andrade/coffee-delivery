import { useFormContext } from 'react-hook-form'
import { AddressFormContainer, Input, RightText } from './styles'

// type ErrorsType = {
//   errors: {
//     [key: string]: {
//       message: string
//     }
//   }
// }

// Create a Input component with position: relative

export function AddressForm() {
  const {
    register,
    // formState: { errors },
  } = useFormContext()
  // const { errors } = formState as ErrorsType

  return (
    <AddressFormContainer>
      <Input
        type="number"
        className="zip"
        placeholder="ZIP Code"
        {...register('zip' /*, { required: true } */)}
      />
      {/* {errors.zip && <ErrorText>This field is required...</ErrorText>} */}

      <Input
        className="street"
        placeholder="Street"
        {...register('street' /*, { required: true } */)}
      />
      {/* {errors.street && <ErrorText>This field is required...</ErrorText>} */}

      <Input
        type="number"
        className="number"
        placeholder="Number"
        {...register('number' /*, { required: true } */)}
      />
      {/* {errors.number && <ErrorText>This field is required...</ErrorText>} */}
      <Input
        className="aditionalInfo"
        placeholder="Aditional Info"
        {...register('adInfo' /*, { required: false } */)}
      />
      <RightText>Optional</RightText>
      <Input
        className="district"
        placeholder="District"
        {...register('district' /*, { required: true } */)}
      />
      {/* {errors.district && <ErrorText>This field is required...</ErrorText>} */}
      <Input
        className="city"
        placeholder="City"
        {...register('city' /*, { required: true } */)}
      />
      {/* {errors.city && <ErrorText>This field is required...</ErrorText>} */}
      <Input
        className="uf"
        placeholder="UF"
        {...register('uf' /*, { required: true } */)}
      />
      {/* {errors.uf && <ErrorText>This field is required...</ErrorText>} */}
    </AddressFormContainer>
  )
}
