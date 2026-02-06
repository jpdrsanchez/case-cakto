import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel
} from '../../ui/field'
import { RadioGroupItem } from '../../ui/radio-group'

interface RadioButtonProps extends React.ComponentProps<typeof RadioGroupItem> {
  id: string
  description: string
  invalid: boolean
}

export const RadioButton = (props: RadioButtonProps) => {
  const { description, invalid, ...rest } = props

  return (
    <FieldLabel htmlFor={rest.id}>
      <Field orientation="horizontal" data-invalid={invalid}>
        <FieldContent>
          <FieldDescription>{description}</FieldDescription>
        </FieldContent>
        <RadioGroupItem {...rest} />
      </Field>
    </FieldLabel>
  )
}
