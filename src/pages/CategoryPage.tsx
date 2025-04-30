
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingBag, Filter, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/hooks/useCart';

// Sample product data - in a real application this would be fetched from an API
const allProducts = [
  {
    id: 1,
    name: 'Vase Céramique Élégant',
    category: 'decoration',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    isNew: true,
    isSale: false
  },
  {
    id: 2,
    name: 'Sac à Main Tendance',
    category: 'accessories',
    price: 59.99,
    originalPrice: 79.99,
    image: 'https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1963&q=80',
    isNew: false,
    isSale: true
  },
  {
    id: 3,
    name: 'Housse de Coussin Motif Géométrique',
    category: 'home',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1579656381226-5fc0f0100c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    isNew: true,
    isSale: false
  },
  {
    id: 4,
    name: 'Montre Connectée Moderne',
    category: 'gadgets',
    price: 89.99,
    originalPrice: 129.99,
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80',
    isNew: false,
    isSale: true
  },
  {
    id: 5,
    name: 'Robe Bohème Chic',
    category: 'fashion',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=780&q=80',
    isNew: true,
    isSale: false
  },
  {
    id: 6,
    name: 'Lampe de Table Artisanale',
    category: 'decoration',
    price: 69.99,
    originalPrice: 89.99,
    image: 'https://images.unsplash.com/photo-1513506212288-9d98a81f3777?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    isNew: false,
    isSale: true
  },
  {
    id: 7,
    name: 'Set de Bijoux Vintage',
    category: 'accessories',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    isNew: true,
    isSale: false
  },
  {
    id: 8,
    name: 'Enceinte Bluetooth Portable',
    category: 'gadgets',
    price: 49.99,
    originalPrice: 69.99,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80',
    isNew: false,
    isSale: true
  },
  {
    id: 9,
    name: 'Écharpe en Cachemire',
    category: 'fashion',
    price: 65.99,
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
    isNew: false,
    isSale: false
  },
  {
    id: 10,
    name: 'Bougeoir Artisanal',
    category: 'decoration',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    isNew: true,
    isSale: false
  },
  {
    id: 11,
    name: 'Lunettes de Soleil Premium',
    category: 'accessories',
    price: 120.00,
    originalPrice: 150.00,
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
    isNew: false,
    isSale: true
  },
  {
    id: 12,
    name: 'Serviteur Café en Bambou',
    category: 'home',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1530018352490-c6eef07fdda8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
    isNew: true,
    isSale: false
  }
];

// Get category name mapping
const categoryNames = {
  'accessories': 'Accessoires',
  'fashion': 'Mode',
  'home': 'Maison',
  'decoration': 'Décoration',
  'gadgets': 'Gadgets',
  'new': 'Nouveautés',
  'bestsellers': 'Meilleures Ventes'
};

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [products, setProducts] = useState(allProducts);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 200 });
  const [selectedFilters, setSelectedFilters] = useState({
    onSale: false,
    newArrivals: false
  });
  const { addToCart } = useCart();

  useEffect(() => {
    // Filter products based on category
    let filtered = [...allProducts];
    
    if (categoryId === 'new') {
      filtered = filtered.filter(product => product.isNew);
    } else if (categoryId === 'bestsellers') {
      // For this example, let's just show some random products as best sellers
      filtered = filtered.filter((_, index) => index % 3 === 0);
    } else if (categoryId) {
      filtered = filtered.filter(product => product.category === categoryId);
    }
    
    // Apply additional filters
    if (selectedFilters.onSale) {
      filtered = filtered.filter(product => product.isSale);
    }
    
    if (selectedFilters.newArrivals) {
      filtered = filtered.filter(product => product.isNew);
    }
    
    // Apply price range filter
    filtered = filtered.filter(
      product => product.price >= priceRange.min && product.price <= priceRange.max
    );
    
    setProducts(filtered);
  }, [categoryId, selectedFilters, priceRange]);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleFilterChange = (filter: keyof typeof selectedFilters) => {
    setSelectedFilters({
      ...selectedFilters,
      [filter]: !selectedFilters[filter]
    });
  };

  const handlePriceChange = (type: 'min' | 'max', value: string) => {
    const numValue = parseFloat(value);
    setPriceRange({
      ...priceRange,
      [type]: isNaN(numValue) ? 0 : numValue
    });
  };

  return (
    <div className="container-custom py-12">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl md:text-4xl font-semibold font-playfair">
          {categoryId && categoryNames[categoryId as keyof typeof categoryNames] || 'Tous les produits'}
        </h1>
        <button
          onClick={toggleFilter}
          className="flex items-center gap-2 font-medium text-lisa-primary"
          aria-label="Filter products"
        >
          {isFilterOpen ? <X size={18} /> : <Filter size={18} />}
          <span className="hidden md:inline">Filtres</span>
        </button>
      </div>
      
      <div className="grid lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        {isFilterOpen && (
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-medium mb-4">Filtres</h2>
              
              <div className="mb-6">
                <h3 className="font-medium mb-2">Prix</h3>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min="0"
                    value={priceRange.min}
                    onChange={(e) => handlePriceChange('min', e.target.value)}
                    className="w-24 p-2 border rounded-md"
                    aria-label="Minimum price"
                  />
                  <span>-</span>
                  <input
                    type="number"
                    min="0"
                    value={priceRange.max}
                    onChange={(e) => handlePriceChange('max', e.target.value)}
                    className="w-24 p-2 border rounded-md"
                    aria-label="Maximum price"
                  />
                  <span>€</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="font-medium mb-2">État</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedFilters.onSale}
                      onChange={() => handleFilterChange('onSale')}
                      className="rounded text-lisa-primary focus:ring-lisa-primary"
                    />
                    <span>En solde</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedFilters.newArrivals}
                      onChange={() => handleFilterChange('newArrivals')}
                      className="rounded text-lisa-primary focus:ring-lisa-primary"
                    />
                    <span>Nouveautés</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Products Grid */}
        <div className={`${isFilterOpen ? 'lg:col-span-3' : 'lg:col-span-4'}`}>
          {products.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-medium mb-2">Aucun produit trouvé</h2>
              <p className="text-muted-foreground mb-6">Essayez de modifier vos filtres ou de consulter une autre catégorie.</p>
              <Link to="/products" className="btn-primary">
                Voir tous les produits
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div key={product.id} className="product-card group">
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
                      className="absolute bottom-0 left-0 right-0 bg-lisa-primary text-white py-2 flex items-center justify-center gap-2 translate-y-full group-hover:translate-y-0 transition-transform opacity-0 group-hover:opacity-100"
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
                    <p className="text-sm text-muted-foreground mb-2">
                      {categoryNames[product.category as keyof typeof categoryNames]}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{product.price.toFixed(2)} €</span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          {product.originalPrice.toFixed(2)} €
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
