import { CoffeeListContainer, List } from './styles'
import { coffeeTypes } from '../../../../data/data'
import { Card } from '../card'

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <h2>Our coffee selection</h2>
      <List>
        {coffeeTypes.map((coffee) => (
          <Card key={coffee.id} coffee={coffee} />
        ))}
      </List>
    </CoffeeListContainer>
  )
}
