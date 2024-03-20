import * as C from './styles'
import fintech from '../../assets/fintech.svg'
import resumo from './../../assets/icons/resumo.svg'
import vendas from './../../assets/icons/vendas.svg'
import webhooks from './../../assets/icons/webhooks.svg'
import contato from './../../assets/icons/contato.svg'
import config from './../../assets/icons/configuracoes.svg'
import sair from './../../assets/icons/sair.svg'
import FintechSVG from '../../assets/FintechSVG'
import { NavLink } from 'react-router-dom'
export const Sidenav = () => {
  return (
    <C.Nav>
        <FintechSVG title='logo' />
        <ul>
            <li>
                <span>
                    <img src={resumo} alt="" />
                </span>
                <NavLink to="/">Resumo</NavLink>
          
            </li>
            <li>
                <span>
                    <img src={vendas} alt="" />
                </span>
                <NavLink to="/vendas">Vendas</NavLink>
            </li>
            <li>
                <span>
                    <img src={webhooks} alt="" />
                </span>
              <a href="">Webhooks</a>  
            </li>
            <li>
                <span>
                    <img src={config} alt="" />
                </span>
              <a href="">Configurações</a>
            </li>
            <li>
                <span>
                    <img src={contato} alt="" />
                </span>
               <a href=""> Contato</a>
            </li>
            <li>
                <span>
                    <img src={sair} alt="" />
                </span>
                <a href=""> Sair</a>
            </li>
        </ul>  
    </C.Nav>
  )
}
