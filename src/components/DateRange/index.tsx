import { useState } from 'react'
import { Input } from '../Input'

export const DateRange = () => {
  const [inicio, setInicio] = useState('')
  const [final, setFinal] = useState('')

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Input label="Início" value={inicio} onChange={({target}) => setInicio(target.value)} />
      <Input label='Final' value={final} onChange={({target}) => setFinal(target.value) }  />
    </form>
  )
}
