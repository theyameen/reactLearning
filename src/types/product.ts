export interface Product {
    id: number;
    title: string;
    images: string[];
    description: string;
    brand: string;
    availabilityStatus: string;
    category: string;
    price: number;
    stock: number;
    rating: number;
    sku: string;
    tags: string[];
    [key: string]: any;
}