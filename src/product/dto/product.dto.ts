export class CreateProductDTO {
    readonly id:string;
    readonly name:string;
    readonly price:number;
    readonly categories: string[];
    readonly stars: number;
    readonly imageUrl: string;
    readonly createdAt: Date;
}