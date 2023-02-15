export interface Payer {
    name: string;
    lastName: string;
    email: string;
    phone: {
        number: string;
        areaCode: string;
    };
    address: {
        streetName: string;
        streetNumber: number;
        zipCode: string;
    };

}

