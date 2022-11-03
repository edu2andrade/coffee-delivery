import american from '../assets/coffee-images/american.svg'
import arab from '../assets/coffee-images/arab.svg'
import capuccino from '../assets/coffee-images/capuccino.svg'
import coldCoffee from '../assets/coffee-images/cold-coffee.svg'
import creamExpresso from '../assets/coffee-images/cream-expresso.svg'
import cuban from '../assets/coffee-images/cuban.svg'
import expresso from '../assets/coffee-images/expresso.svg'
import hawaiian from '../assets/coffee-images/hawaiian.svg'
import hotChocolate from '../assets/coffee-images/hot-chocolate.svg'
import irish from '../assets/coffee-images/irish.svg'
import latte from '../assets/coffee-images/latte.svg'
import macchiato from '../assets/coffee-images/macchiato.svg'
import milkCoffee from '../assets/coffee-images/milk-coffee.svg'
import mochaccino from '../assets/coffee-images/mochaccino.svg'

export type CoffeeType = {
  id: number
  name: string
  description: string
  image: string
  price: number
  tags: string[]
}

export const coffeeTypes: CoffeeType[] = [
  {
    id: 1,
    name: 'Traditional Expresso',
    description:
      'Traditional coffee made just with boiling water and best coffee',
    price: 9.9,
    tags: ['Traditional'],
    image: expresso,
  },
  {
    id: 2,
    name: 'American Expresso',
    description: 'Diluted expresso, less intense than traditional',
    price: 9.9,
    tags: ['Traditional'],
    image: american,
  },
  {
    id: 3,
    name: 'Cream Expresso',
    description: 'Traditional expresso with creamy foam',
    price: 9.9,
    tags: ['Traditional'],
    image: creamExpresso,
  },
  {
    id: 4,
    name: 'Cold Expresso',
    description: 'Coffee prepared with expresso and ice cubes',
    price: 9.9,
    tags: ['Traditional', 'Cold'],
    image: coldCoffee,
  },
  {
    id: 5,
    name: 'Milk Expresso',
    description: 'Traditional expresso with steamed milk',
    price: 9.9,
    tags: ['Traditional', 'Milk'],
    image: milkCoffee,
  },
  {
    id: 6,
    name: 'Latte',
    description: 'Expresso with double milk and creamy foam',
    price: 9.9,
    tags: ['Traditional', 'Milk'],
    image: latte,
  },
  {
    id: 7,
    name: 'Capuccino',
    description: 'Cinnamon drink made of equal doses of coffee, milk and foam',
    price: 9.9,
    tags: ['Traditional', 'Milk'],
    image: capuccino,
  },
  {
    id: 8,
    name: 'Macchiato',
    description: 'Expresso blended with some hot milk and foam',
    price: 9.9,
    tags: ['Traditional', 'Milk'],
    image: macchiato,
  },
  {
    id: 9,
    name: 'Mochaccino',
    description: 'Expresso with chocolate, milk and foam',
    price: 9.9,
    tags: ['Traditional', 'Milk'],
    image: mochaccino,
  },
  {
    id: 10,
    name: 'Hot Chocolate',
    description: 'Drink made with dissolved chocolate in hot milk and coffee',
    price: 9.9,
    tags: ['Especial', 'Milk'],
    image: hotChocolate,
  },
  {
    id: 11,
    name: 'Cuban Coffee',
    description: 'Cold drink made with expresso, rum, cream and mint',
    price: 9.9,
    tags: ['Especial', 'Alcoholic', 'Cold'],
    image: cuban,
  },
  {
    id: 12,
    name: 'Hawaiian Coffee',
    description: 'Sweetened drink prepared with coffee and coconut milk',
    price: 9.9,
    tags: ['Especial'],
    image: hawaiian,
  },
  {
    id: 13,
    name: 'Arab Coffee',
    description: 'Drink prepared with Arabic coffee beans and spices',
    price: 9.9,
    tags: ['Especial'],
    image: arab,
  },
  {
    id: 14,
    name: 'Irish Coffee',
    description: 'Coffee-based drink, Irish whiskey, sugar and whipped cream',
    price: 9.9,
    tags: ['Especial', 'Alcoholic'],
    image: irish,
  },
]
