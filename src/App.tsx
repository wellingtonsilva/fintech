import React from 'react'
import { Sidenav } from './components/Sidenav'
import { Resumo } from './pages/Resumo'
import { Header } from './components/Header'
import { DataContextProvider } from './Context/DataContext'

export const App = () => {
  return (
    <DataContextProvider>
    <div className='container'>
      <Sidenav />
      <main>
        <Header />
        <Resumo />
      </main>
    </div>
    </DataContextProvider>
  )
}
