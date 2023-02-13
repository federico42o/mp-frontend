import { BackUrls } from "./back-urls";
import { Payer } from "./payer";
import { PaymentMethods } from "./payment-methods";
import { Product } from "./product";

export interface Preference {
    items: Product[];
    payer?: Payer;
    backUrls?: BackUrls;
    paymentMethods?: PaymentMethods;
    autoReturn?: string;
    notificationUrl?: string;
    externalReference?: string;
}
