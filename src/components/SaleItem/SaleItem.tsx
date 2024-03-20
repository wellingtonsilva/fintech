import * as C from './style'
import { IVenda } from '../../Context/DataContext'
import { NavLink } from 'react-router-dom'

export const SaleItem = ({ sale } : {sale: IVenda}) => {
  return (
    <C.Sale>
      <NavLink to={`/vendas/${sale.id}`}>
        {sale.id}
      </NavLink>
      
      <div>{sale.nome}</div>
      <div>{sale.preco.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
      })
        }
      </div>
    </C.Sale>
  )
}
