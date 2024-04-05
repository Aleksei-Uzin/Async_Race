export interface IPagination<TResponse> {
  content: TResponse[]
  currentPage: number
  totalElements: number
  totalPages: number
}
