export interface Price {
    currency: string;
    value: number;
}

export interface Calification {
    quantity: number;
}

interface Product {
    id?: string;
    url?: string;
    image?: string;
    name?: string;
    price: Price;
    calification?: Calification;
    source: string;
}

export default Product;
