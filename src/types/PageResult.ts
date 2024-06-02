export type PageResult<T> = {
    totalOfItems: number,
    totalOfPages: number,
    pageNumber: number,
    pageTotal: number,
    items: T[]
}