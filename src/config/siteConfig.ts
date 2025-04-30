
/**
 * Configuration du site Lisa Store MDG
 */
export const siteConfig = {
  name: "Lisa Store MDG",
  description: "Boutique en ligne d'articles divers - accessoires, mode, article maison, décorations, gadgets",
  contact: {
    phone: "0348133458",
    email: "rasoanirinamialisoa@gmail.com",
    address: "Lot 198 NJO Mahatsinjo Avaradrano",
  },
  social: {
    facebook: "https://facebook.com/lisastoremdg",
    instagram: "https://instagram.com/lisastoremdg",
  },
  shipping: {
    freeShippingThreshold: 200000, // Livraison gratuite à partir de 200 000 Ar
  },
  payment: {
    methods: ["MVola", "Paiement à la livraison"],
  }
};
