import { getFullUrl, prepareQueryParams } from '../utils'
import { IDriveMode, IStartEngine } from './types'

export const changeEngineMode = async ({
  id,
  status,
}: {
  id: number
  status: 'started' | 'stopped' | 'drive'
}): Promise<IStartEngine | IDriveMode> => {
  const queryParams = prepareQueryParams({
    id,
    status,
  })
  const urlWithParams = getFullUrl('/engine', queryParams)
  const response = await fetch(urlWithParams, {
    method: 'PATCH',
  })
  const content = await response.json()

  return content
}
