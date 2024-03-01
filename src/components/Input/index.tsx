import React from 'react'
import * as C from './styles'
type InputProps = React.ComponentProps<'input'> & {
  label:string;
}

export const Input = ({label, ...props}:InputProps) => {
  return (
    <div>
      <C.Label htmlFor={label}>{label}</C.Label>
      <C.Input type="text" id={label} name={label} {...props} />
    </div>
  )
}
