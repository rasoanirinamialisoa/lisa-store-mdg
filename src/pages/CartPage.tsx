
import { Link } from 'react-router-dom';
import { Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

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
                            <p className="text-sm text-muted-foreground">Prix unitaire: {item.price.toFixed(2)} €</p>
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
                        {(item.price * item.quantity).toFixed(2)} €
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
                <span>{getCartTotal().toFixed(2)} €</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Frais de livraison</span>
                <span>Calcul à l'étape suivante</span>
              </div>
              <Separator className="my-4" />
              <div className="flex justify-between font-semibold">
                <span>Total (TTC)</span>
                <span>{getCartTotal().toFixed(2)} €</span>
              </div>
            </div>
            
            <Button className="w-full mt-6 bg-lisa-primary hover:bg-lisa-accent">
              Procéder au paiement
            </Button>
            
            <div className="mt-6 text-sm text-center text-muted-foreground">
              <p>Nous acceptons</p>
              <div className="flex justify-center gap-2 mt-2">
                <span className="px-2 py-1 bg-gray-100 rounded">Visa</span>
                <span className="px-2 py-1 bg-gray-100 rounded">Mastercard</span>
                <span className="px-2 py-1 bg-gray-100 rounded">PayPal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
