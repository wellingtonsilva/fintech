import { ButtonMonth } from '../ButtonMonth'
import * as C from './styles';
export const Month = () => {
  return (
    <C.Container>
      <ButtonMonth n={-2} />
      <ButtonMonth n={-1} />
      <ButtonMonth n={0} />
    </C.Container>
  )
}
