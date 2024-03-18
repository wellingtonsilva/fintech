import * as C from './style'
import { IVenda } from '../../Context/DataContext'

export const SaleItem = ({ sale } : {sale: IVenda}) => {
  return (
    <C.Sale>
      <a href="">{sale.id}</a>
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
