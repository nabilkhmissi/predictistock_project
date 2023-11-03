import { Company } from "./company.model";
import { SubscriptionType } from "./subscription-type.model";

export interface Subscription {
    id: string;
    date: Date;
    endDate: Date;
    subscriptionType: SubscriptionType;
    company: Company;
    active: boolean;
}