import { changeEngineMode } from './changeEngineMode'

export const stopEngine = async (id: number) => {
  const response = await changeEngineMode({ id, status: 'started' })

  return response
}
