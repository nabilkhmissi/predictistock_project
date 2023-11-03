import { Category } from "./category.model";

export interface Article {
    name: string,
    companyId: string,
    description: string,
    quantity: number,
    price: number,
    predictedQuantity: number,
    category: Category
}