import { changeEngineMode } from './changeEngineMode'
import { IStartEngine } from './types'

export const startEngine = async (id: number): Promise<IStartEngine> => {
  const response = await changeEngineMode({ id, status: 'started' })

  return response as IStartEngine
}
