import type { Produit } from "./types.ts";

export const catalogue: Produit[] = [
  { id: 1, nom: "Boubou brodé", prix: 25000, categorie: "vetements", stock: 8 },
  { id: 2, nom: "Chemise en wax", prix: 15000, categorie: "vetements", stock: 12 },
  { id: 3, nom: "Sandales en cuir", prix: 12000, categorie: "chaussures", stock: 15 },
  { id: 4, nom: "Babouches", prix: 8000, categorie: "chaussures", stock: 0 },
  { id: 5, nom: "Sac en wax", prix: 9500, categorie: "accessoires", stock: 4 },
  { id: 6, nom: "Panier tressé", prix: 6000, categorie: "maison", stock: 7 },
];