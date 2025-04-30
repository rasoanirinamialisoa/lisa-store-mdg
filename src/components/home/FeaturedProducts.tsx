
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { useCart } from '@/hooks/useCart';

const FeaturedProducts = () => {
  const { addToCart } = useCart();
  
  // Sample featured products data
  const featuredProducts = [
    {
      id: 1,
      name: 'Vase Céramique Élégant',
      category: 'decoration',
      price: 159960,
      image: 'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      isNew: true,
      isSale: false
    },
    {
      id: 2,
      name: 'Sac à Main Tendance',
      category: 'accessories',
      price: 239960,
      originalPrice: 319960,
      image: 'https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1963&q=80',
      isNew: false,
      isSale: true
    },
    {
      id: 3,
      name: 'Housse de Coussin Motif Géométrique',
      category: 'home',
      price: 99960,
      image: 'https://images.unsplash.com/photo-1579656381226-5fc0f0100c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      isNew: true,
      isSale: false
    },
    {
      id: 4,
      name: 'Montre Connectée Moderne',
      category: 'gadgets',
      price: 359960,
      originalPrice: 519960,
      image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80',
      isNew: false,
      isSale: true
    },
    {
      id: 5,
      name: 'Robe Bohème Chic',
      category: 'fashion',
      price: 319960,
      image: 'https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=780&q=80',
      isNew: true,
      isSale: false
    },
    {
      id: 6,
      name: 'Lampe de Table Artisanale',
      category: 'decoration',
      price: 279960,
      originalPrice: 359960,
      image: 'https://images.unsplash.com/photo-1513506212288-9d98a81f3777?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      isNew: false,
      isSale: true
    },
    {
      id: 7,
      name: 'Set de Bijoux Vintage',
      category: 'accessories',
      price: 183960,
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      isNew: true,
      isSale: false
    },
    {
      id: 8,
      name: 'Enceinte Bluetooth Portable',
      category: 'gadgets',
      price: 199960,
      originalPrice: 279960,
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80',
      isNew: false,
      isSale: true
    }
  ];

  // Fonction pour formater les prix en Ariary
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-MG', {
      style: 'decimal',
      maximumFractionDigits: 0,
    }).format(price) + ' Ar';
  };

  return (
    <section className="py-16 bg-lisa-light">
      <div className="container-custom">
        <h2 className="section-title">Produits Populaires</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="relative overflow-hidden">
                <Link to={`/product/${product.id}`}>
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </Link>
                {product.isNew && (
                  <Badge className="absolute top-2 left-2 bg-lisa-accent">Nouveau</Badge>
                )}
                {product.isSale && (
                  <Badge className="absolute top-2 right-2 bg-red-500">Solde</Badge>
                )}
                <button
                  className="absolute bottom-0 left-0 right-0 bg-lisa-primary text-white py-2 flex items-center justify-center gap-2 transform translate-y-full group-hover:translate-y-0 transition-transform opacity-0 group-hover:opacity-100"
                  onClick={() => addToCart({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    quantity: 1
                  })}
                >
                  <ShoppingBag size={16} />
                  Ajouter au panier
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-medium mb-1">
                  <Link to={`/product/${product.id}`} className="hover:text-lisa-primary">
                    {product.name}
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">{formatPrice(product.price)}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/products" className="btn-primary">
            Voir tous les produits
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
