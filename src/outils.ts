const formateur = new Intl.NumberFormat("fr-SN", { style: "currency", currency: "XOF" });

export function formatPrix(montant: number): string {
  return formateur.format(montant);
}