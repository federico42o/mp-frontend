import { BackUrls } from "./back-urls";
import { Payer } from "./payer";
import { Product } from "./product";

export interface Preference {
    items: Product[];
    payer: Payer;
    backUrls: BackUrls;
    autoReturn: string;
    notificationUrl: string;
    externalReference: string;
    expires: boolean;
    expirationDateFrom: string;
    expirationDateTo: string;


}
