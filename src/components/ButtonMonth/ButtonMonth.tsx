import { useData } from '../../Context/DataContext';
import * as C from './style'

const nameMonth = (n:number) => {
  const date = new Date();
  date.setMonth(date.getMonth() + n);
  return  new Intl.DateTimeFormat('pt-BR', {month: "long"}).format(date)
}

const formatDate = (date: Date) => {
  const dd = String(date.getDate()).padStart(2, "0")
  const mm = String(date.getMonth() + 1).padStart(2, "0")
  const yyyy = date.getFullYear()
  return `${yyyy}-${mm}-${dd}`
}

export const ButtonMonth = ({n}: {n:number}) => {

 const {setInicio, setFinal} = useData()

  const setMonth = (n:number) => {
    const date = new Date();
    date.setMonth(date.getMonth() + n);
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1)
    const lasttDay = new Date(date.getFullYear(), date.getMonth() + 1, 0)
    setInicio(formatDate(firstDay))
    setFinal(formatDate(lasttDay))
  }

  return (
    <C.Button onClick={() => setMonth(n)}>{nameMonth(n)}</C.Button>
  )
}
