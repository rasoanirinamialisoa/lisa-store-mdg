
import { Link } from 'react-router-dom';
import { Plus, Minus, Trash2, ShoppingBag, CreditCard } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Fonction pour formater les prix en Ariary
const formatPrice = (price: number) => {
  return new Intl.NumberFormat('fr-MG', {
    style: 'decimal',
    maximumFractionDigits: 0,
  }).format(price) + ' Ar';
};

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart();
  
  if (cartItems.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-6 py-16">
        <ShoppingBag size={64} className="text-lisa-accent opacity-50" />
        <h1 className="text-3xl font-medium">Votre panier est vide</h1>
        <p className="text-muted-foreground mb-4">
          Vous n'avez pas encore ajouté d'articles à votre panier.
        </p>
        <Link to="/products" className="btn-primary">
          Continuer mes achats
        </Link>
      </div>
    );
  }
  
  return (
    <div className="container-custom py-12">
      <h1 className="text-3xl md:text-4xl font-semibold mb-8 font-playfair">Votre Panier</h1>
      
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left font-medium py-4">Produit</th>
                    <th className="text-center font-medium py-4">Quantité</th>
                    <th className="text-right font-medium py-4">Prix</th>
                    <th className="text-right font-medium py-4 w-10"></th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id} className="border-b">
                      <td className="py-4">
                        <div className="flex items-center gap-4">
                          <img 
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded"
                          />
                          <div>
                            <h3 className="font-medium">{item.name}</h3>
                            <p className="text-sm text-muted-foreground">Prix unitaire: {formatPrice(item.price)}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4">
                        <div className="flex items-center justify-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100"
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </td>
                      <td className="py-4 text-right font-medium">
                        {formatPrice(item.price * item.quantity)}
                      </td>
                      <td className="py-4 text-right">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700"
                          aria-label="Remove item"
                        >
                          <Trash2 size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="flex justify-between items-center mt-6">
              <Button 
                variant="outline" 
                onClick={clearCart}
                className="text-red-500 border-red-500 hover:bg-red-50"
              >
                Vider le panier
              </Button>
              <Link to="/products" className="btn-outline">
                Continuer mes achats
              </Link>
            </div>
          </div>
        </div>
        
        <div>
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
            <h2 className="text-xl font-semibold mb-4">Résumé de la commande</h2>
            
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>Sous-total</span>
                <span>{formatPrice(getCartTotal())}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Frais de livraison</span>
                <span>Calcul à l'étape suivante</span>
              </div>
              <Separator className="my-4" />
              <div className="flex justify-between font-semibold">
                <span>Total (TTC)</span>
                <span>{formatPrice(getCartTotal())}</span>
              </div>
            </div>
            
            <Tabs defaultValue="mvola" className="mt-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="mvola">MVola</TabsTrigger>
                <TabsTrigger value="cash">Paiement à la livraison</TabsTrigger>
              </TabsList>
              <TabsContent value="mvola" className="mt-4">
                <div className="bg-orange-100 p-4 rounded-md mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CreditCard className="text-orange-600" size={18} />
                    <h3 className="font-medium text-orange-800">Payer avec MVola</h3>
                  </div>
                  <p className="text-sm text-orange-700">
                    Vous serez redirigé vers MVola pour finaliser votre paiement de manière sécurisée.
                  </p>
                </div>
                <Button className="w-full bg-orange-500 hover:bg-orange-600">
                  Payer avec MVola
                </Button>
              </TabsContent>
              <TabsContent value="cash" className="mt-4">
                <div className="bg-blue-100 p-4 rounded-md mb-4">
                  <p className="text-sm text-blue-700">
                    Vous paierez le montant total à la livraison. Veuillez préparer le montant exact.
                  </p>
                </div>
                <Button className="w-full bg-lisa-primary hover:bg-lisa-accent">
                  Commander
                </Button>
              </TabsContent>
            </Tabs>
            
            <div className="mt-6 text-sm text-center text-muted-foreground">
              <p>Informations de contact</p>
              <div className="mt-2 text-left space-y-1">
                <p>Tel: 0348133458</p>
                <p>Email: rasoanirinamialisoa@gmail.com</p>
                <p>Adresse: Lot 198 NJO Mahatsinjo Avaradrano</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
