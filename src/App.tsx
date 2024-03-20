import React from 'react'
import { Sidenav } from './components/Sidenav'
import { Resumo } from './pages/Resumo'
import { Header } from './components/Header'
import { DataContextProvider } from './Context/DataContext'
import { Vendas } from './pages/Vendas'
import { Venda } from './pages/Venda'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const App = () => {
  return (
    <BrowserRouter > 
    <DataContextProvider>
    <div className='container'>
      <Sidenav />
      <main>
        <Header />
        <Routes>
          <Route path='/' element={<Resumo />}></Route>
          <Route path='/vendas' element={<Vendas />}></Route>
          <Route path='/vendas/:id' element={<Venda />}></Route>
        </Routes>
      </main>
    </div>
    </DataContextProvider>
    </BrowserRouter>
  )
}
