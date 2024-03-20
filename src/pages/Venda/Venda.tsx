import React from 'react'
import * as C from './styles'
import { useParams } from 'react-router-dom'
import useFetch from '../../Hooks/useFetch';
import { IVenda } from '../../Context/DataContext';
import { Loading } from '../../components/Loading';

type ISemData = Omit<IVenda, "data">

export const Venda = () => {
   const {id} = useParams();
   const {data, loading} = useFetch<ISemData>(`https://data.origamid.dev/vendas/${id}`)
   if(loading === true) return <Loading />
   if (data === null) return null
  return (
    <div>
     
        <C.ItemVenda>
           ID: {data.id}
        </C.ItemVenda>
        <C.ItemVenda>
            Nome: {data.nome}
        </C.ItemVenda>
        <C.ItemVenda>
            Preço: {data.preco.toLocaleString('pt-br', {style: 'currency', currency:'BRL'} )}
        </C.ItemVenda>
        <C.ItemVenda>
        Status: {data.status}
        </C.ItemVenda>
        <C.ItemVenda>
        Pagamento: {data.pagamento}
        </C.ItemVenda>

    </div>
  )
}
