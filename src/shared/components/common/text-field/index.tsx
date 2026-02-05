import { FieldLabel } from '../../ui/field'
import { Input } from '../../ui/input'

interface TextFieldProps extends React.ComponentProps<'input'> {
  id: string
  label: string
}

export const TextField = (props: TextFieldProps) => {
  const { id, label, ...inputProps } = props

  return (
    <>
      <FieldLabel
        className="bg-card absolute top-0 left-2 w-max! -translate-y-1/2 px-0.5 text-xs"
        htmlFor={id}
      >
        {label}
      </FieldLabel>
      <Input id={id} {...inputProps} />
    </>
  )
}
