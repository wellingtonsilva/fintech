import { useState, useEffect } from 'react'
import { DateRange } from '../DateRange'
import { Month } from '../Month'
import * as C from './styles'
import { useLocation } from 'react-router-dom'
export const Header = () => {
  const [title, setTitle] = useState('Resumo')
  const location = useLocation();
  
  useEffect(() => {
    if(location.pathname === '/' ) {
      setTitle('Resumo')
      document.title = "Fintech | Resumo"
    } else if(location.pathname === '/vendas') {
      setTitle('Vendas')
      document.title = "Fintech | Vendas"
    }
  },[location])


  return (
    <C.Header>
      <C.ContainerDateRange>
        <DateRange />
        <C.Title>{title}</C.Title>
      </C.ContainerDateRange>
      <Month />
    </C.Header>
  )
}
