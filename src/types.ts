export type Categorie = "vetements" | "chaussures" | "accessoires" | "maison";

export type Produit = {
  readonly id: number;
  nom: string;
  prix: number;
  categorie: Categorie;
  stock: number;
  image?: string;
};

export type LignePanier = {
  produit: Produit;
  quantite: number;
};