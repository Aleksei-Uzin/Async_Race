import { BASE_URL } from './constants'

export const prepareQueryParams = (params: Record<string, string | number>) => {
  const queryParams = new URLSearchParams()

  for (let [name, value] of Object.entries(params)) {
    queryParams.set(name, value.toString())
  }

  return queryParams.toString()
}

export const getFullUrl = (url: string, params?: string) => {
  return params ? `${BASE_URL}${url}?${params}` : `${BASE_URL}${url}`
}
