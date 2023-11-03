import { Article } from "./article.model";

export interface Order {
    date: Date,
    quantity: number,
    companyId: string,
    articles: Article[]
}