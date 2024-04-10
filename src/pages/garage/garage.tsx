import { GarageMenu } from './garageMenu'
import { GarageContent } from './garageContent'
import { useDataFromLoader } from '../../hooks'
import { getCars } from '../../api'
import { PaginationProvider } from '../../components'

export const Garage = () => {
  const pagination = useDataFromLoader(getCars)

  return (
    <PaginationProvider pagination={pagination}>
      <GarageMenu />
      <GarageContent />
    </PaginationProvider>
  )
}
