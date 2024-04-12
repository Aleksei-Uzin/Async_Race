import { useContext, useEffect, useState } from 'react'
import { Car, PaginationContext } from '../../../components'
import { getCar } from '../../../api'
import { COLUMNS } from './constatns'
import styles from './winnersTable.module.css'

export const WinnersTableBody = () => {
  const [winners, setWimmers] = useState([])
  const { pagination } = useContext(PaginationContext)
  const { content } = pagination
  const columnsKeys = Object.keys(COLUMNS)

  useEffect(() => {
    Promise.all(content.map(winner => getCar(winner.id))).then(resp => {
      const res = resp.map((val, i) => Object.assign({}, val, content[i]))
      setWimmers(res)
    })
  }, [content])

  return (
    <tbody>
      {winners.map(winner => (
        <tr key={winner.id}>
          {columnsKeys.map(key => (
            <td key={key} className={styles.bodyItem}>
              {key === 'color' ? (
                <Car color={winner[key]} className={styles.icon} />
              ) : (
                winner[key]
              )}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  )
}
