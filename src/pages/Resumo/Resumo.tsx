import { useData } from '../../Context/DataContext'
import * as C from './styles'
export const Resumo = () => {
  const {data} = useData();
  return (
    <>
    <C.Section>
    <C.Box>
      <C.Title>Vendas</C.Title>
      {data?.filter((i) => i.status !== 'falha').reduce((acc, item) => acc + item.preco, 0)
      .toLocaleString('pt-br', {style: 'currency', currency: "BRL"})}

    </C.Box>
    <C.Box>
      <C.Title>Recebido</C.Title>
      {data?.filter((i) => i.status === 'pago').reduce((acc, item) => acc + item.preco, 0)
      .toLocaleString('pt-br', {style: 'currency', currency: "BRL"})}

    </C.Box>

    <C.Box>
      <C.Title>Processando</C.Title>
      {data?.filter((i) => i.status === 'processando').reduce((acc, item) => acc + item.preco, 0)
      .toLocaleString('pt-br', {style: 'currency', currency: "BRL"})}

    </C.Box>
    </C.Section>
    <C.Section>
      <C.Title>Gráficos</C.Title>
    </C.Section>
    </>

  )
}
