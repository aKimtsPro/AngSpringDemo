import { Marque } from "./marque.model";

export interface Produit{
    id: number;
    nom: string;
    prix: number;
    marque: Marque;
}