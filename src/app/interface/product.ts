export interface Product {
    id: number,
    name: string,
    cost: number,
    stock: number,
    image: string,
    description?: string,
    images?: string[]
}
