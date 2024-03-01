import { useState } from 'react'
import { Input } from '../Input'
import { useData } from '../../Context/DataContext'

export const DateRange = () => {

 const {inicio, setInicio, final, setFinal } =  useData()

  return (
    <form className='box flex' onSubmit={(e) => e.preventDefault()}>
      <Input label="Início" type='date' value={inicio} onChange={({target}) => setInicio(target.value)} />
      <Input label='Final' type='date' value={final} onChange={({target}) => setFinal(target.value) }  />
    </form>
  )
}
