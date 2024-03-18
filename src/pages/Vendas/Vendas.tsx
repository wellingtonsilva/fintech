import React from 'react'
import * as C from './style'
import { useData } from '../../Context/DataContext'
import { SaleItem } from '../../components/SaleItem';
export const Vendas = () => {
  const {data} = useData();
  if(data === null) return null;
  return (
    <>
     <ul>  
      {data?.map((sale) => {
      return(
        <li key={sale.id}>
          <SaleItem sale={sale} />
        </li>
      )
    })}
    </ul>
    </>
  )
}
