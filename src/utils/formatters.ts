
/**
 * Formate un prix en Ariary (MGA)
 * @param price - Le prix à formater
 * @returns Le prix formaté avec le symbole Ar
 */
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('fr-MG', {
    style: 'currency',
    currency: 'MGA',
    maximumFractionDigits: 0,
  }).format(price);
};
