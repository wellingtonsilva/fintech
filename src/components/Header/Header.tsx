
import { DateRange } from '../DateRange'
import { Month } from '../Month'
import * as C from './styles'
export const Header = () => {
  return (
    <C.Header>
      <C.ContainerDateRange>
        <DateRange />
      </C.ContainerDateRange>
      <Month />
    </C.Header>
  )
}
