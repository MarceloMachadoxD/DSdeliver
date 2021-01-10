export type OrderLocationData = {
    latitude: number;
    longitude: number;
    address: string;
}


export type Products = {

    id: number;
    name: string;
    price: number;
    description: string;
    imageUri: string;

}

type ProductId = {
    id: number;
    
}

export type OrderPayLoad = {
    products: ProductId[];

} & OrderLocationData;

