import { useEffect, useState } from 'react'
import { IWinner, getCar } from '../../api'
import { IWinnerData } from './types'

export function useWinnerData(content: IWinner[]) {
  const [winnersData, setWinnersData] = useState([] as IWinnerData[])

  const handleWinnerData = (newContent: IWinner[]) => {
    Promise.all(newContent.map(winner => getCar(winner.id))).then(resp => {
      const response = resp.map((val, i) => ({ ...val, ...content[i] }))

      setWinnersData(response)
    })
  }

  useEffect(() => {
    handleWinnerData(content)
  }, [content])

  return { winnersData, handleWinnerData }
}
