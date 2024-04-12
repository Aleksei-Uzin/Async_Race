import { ICar } from '../api'
import { CAR_MODELS } from './constants'
import { getRandomColor } from './getRandomColor'

export const getHundredRandomCars = (amount: number) => {
  const len = CAR_MODELS.length
  const set: Omit<ICar, 'id'>[] = []

  while (amount > 0) {
    const index = Math.floor(Math.random() * len)
    const color = getRandomColor()

    set.push({
      name: CAR_MODELS[index],
      color,
    })
    amount -= 1
  }

  return set
}
