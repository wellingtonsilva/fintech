import React from 'react'
import { Sidenav } from './components/Sidenav'
import { Resumo } from './pages/Resumo'
import { Header } from './components/Header'

export const App = () => {
  return (
    <div>
      <Sidenav />
      <main>
        <Header />
        <Resumo />
      </main>
    </div>
  )
}
