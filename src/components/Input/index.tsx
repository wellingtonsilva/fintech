import React from 'react'

type InputProps = React.ComponentProps<'input'> & {
  label:string;
}

export const Input = ({label, ...props}:InputProps) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input type="text" id={label} name={label} {...props} />
    </div>
  )
}
