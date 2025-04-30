import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingBag, Heart, Share2, ChevronRight, Check } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/useCart';
import { useToast } from '@/hooks/use-toast';
import { formatPrice } from '@/utils/formatters';
import { siteConfig } from '@/config/siteConfig';

// Fonction pour formater les prix en Ariary
const formatPriceOld = (price: number) => {
  return new Intl.NumberFormat('fr-MG', {
    style: 'decimal',
    maximumFractionDigits: 0,
  }).format(price) + ' Ar';
};

// Sample products data - in a real application this would be fetched from an API
const products = [
  {
    id: 1,
    name: 'Vase Céramique Élégant',
    description: 'Ce vase en céramique apporte une touche d\'élégance à votre intérieur avec son design contemporain. Parfait pour mettre en valeur vos fleurs fraîches ou séchées.',
    longDescription: 'Fabriqué à la main par des artisans talentueux, chaque vase est unique avec de légères variations qui ajoutent à son caractère. La céramique de haute qualité est durable et résistante. Ce vase polyvalent peut être utilisé comme pièce maîtresse sur une table, sur une étagère ou comme accent décoratif dans n\'importe quelle pièce.',
    features: [
      'Céramique de haute qualité',
      'Fabrication artisanale',
      'Dimensions: 25cm x 15cm',
      'Disponible en plusieurs coloris',
      'Facile à nettoyer'
    ],
    category: 'decoration',
    price: 159960,
    colors: ['Blanc', 'Terracotta', 'Bleu'],
    sizes: [],
    stock: 15,
    images: [
      'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      'https://images.unsplash.com/photo-1611486212557-88be5ff6f941?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      'https://images.unsplash.com/photo-1603204077779-bed963ea7d0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
    ],
    reviews: [
      { 
        id: 1, 
        user: 'Marie L.',
        date: '12/03/2023',
        rating: 5,
        text: 'J\'adore ce vase ! Il est encore plus beau en vrai que sur les photos.' 
      },
      { 
        id: 2, 
        user: 'Thomas D.',
        date: '28/02/2023',
        rating: 4,
        text: 'Très belle pièce, mais légèrement plus petit que ce à quoi je m\'attendais.' 
      }
    ]
  },
  // Additional product data would be here...
];

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const { addToCart } = useCart();
  const { toast } = useToast();
  
  // Find the product by ID
  const product = products.find(p => p.id === parseInt(productId || '0'));
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || '');
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || '');
  
  if (!product) {
    return (
      <div className="container-custom py-24 text-center">
        <h1 className="text-3xl font-medium mb-4">Produit non trouvé</h1>
        <p className="text-muted-foreground mb-8">Le produit que vous recherchez n'existe pas ou a été retiré.</p>
        <Link to="/products" className="btn-primary">
          Voir tous les produits
        </Link>
      </div>
    );
  }
  
  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity: quantity
    });
    
    toast({
      title: "Produit ajouté au panier",
      description: `${quantity} x ${product.name} ajouté à votre panier.`,
    });
  };
  
  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity > 0 && newQuantity <= product.stock) {
      setQuantity(newQuantity);
    }
  };
  
  return (
    <div className="container-custom py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center text-sm text-muted-foreground mb-8">
        <Link to="/" className="hover:text-lisa-primary">Accueil</Link>
        <ChevronRight size={16} className="mx-2" />
        <Link to="/products" className="hover:text-lisa-primary">Produits</Link>
        <ChevronRight size={16} className="mx-2" />
        <span>{product.name}</span>
      </nav>
      
      {/* Product Details */}
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Product Images */}
        <div>
          <div className="bg-white rounded-lg overflow-hidden mb-4">
            <img 
              src={product.images[selectedImage]} 
              alt={product.name} 
              className="w-full h-[500px] object-cover"
            />
          </div>
          
          {product.images.length > 1 && (
            <div className="flex gap-3">
              {product.images.map((image, index) => (
                <button 
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`border rounded-md overflow-hidden ${selectedImage === index ? 'border-lisa-primary' : 'border-transparent'}`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} - Image ${index + 1}`} 
                    className="w-20 h-20 object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
        
        {/* Product Info */}
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold mb-3 font-playfair">{product.name}</h1>
          <p className="text-xl font-medium mb-4 text-lisa-primary">{formatPrice(product.price)}</p>
          
          <p className="text-muted-foreground mb-6">{product.description}</p>
          
          {/* Color Selection */}
          {product.colors.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-2">Couleur:</h3>
              <RadioGroup value={selectedColor} onValueChange={setSelectedColor} className="flex gap-3">
                {product.colors.map((color) => (
                  <div key={color} className="flex items-center space-x-2">
                    <RadioGroupItem value={color} id={`color-${color}`} />
                    <Label htmlFor={`color-${color}`}>{color}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          )}
          
          {/* Size Selection */}
          {product.sizes.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-2">Taille:</h3>
              <RadioGroup value={selectedSize} onValueChange={setSelectedSize} className="flex gap-3">
                {product.sizes.map((size) => (
                  <div key={size} className="flex items-center space-x-2">
                    <RadioGroupItem value={size} id={`size-${size}`} />
                    <Label htmlFor={`size-${size}`}>{size}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          )}
          
          {/* Quantity Selection */}
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-2">Quantité:</h3>
            <div className="flex items-center border border-gray-200 rounded-md w-min">
              <button
                onClick={() => handleQuantityChange(quantity - 1)}
                className="px-3 py-2 border-r border-gray-200"
                disabled={quantity <= 1}
              >
                -
              </button>
              <span className="px-6 py-2">{quantity}</span>
              <button
                onClick={() => handleQuantityChange(quantity + 1)}
                className="px-3 py-2 border-l border-gray-200"
                disabled={quantity >= product.stock}
              >
                +
              </button>
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              {product.stock > 0 
                ? `${product.stock} unités en stock` 
                : 'Produit épuisé'}
            </p>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <Button 
              onClick={handleAddToCart} 
              className="bg-lisa-primary hover:bg-lisa-accent px-8 py-6 font-medium"
              disabled={product.stock <= 0}
            >
              <ShoppingBag className="mr-2" size={18} />
              Ajouter au panier
            </Button>
            
            <Button variant="outline" className="border-gray-300">
              <Heart className="mr-2" size={18} />
              Favoris
            </Button>
            
            <Button variant="outline" className="border-gray-300">
              <Share2 className="mr-2" size={18} />
              Partager
            </Button>
          </div>
          
          {/* Delivery Info */}
          <div className="bg-lisa-secondary/50 rounded-lg p-4 mb-6">
            <h3 className="font-medium mb-2">Informations de livraison</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Check size={16} className="text-green-600" />
                <span>Livraison gratuite pour les commandes supérieures à {formatPrice(siteConfig.shipping.freeShippingThreshold)}</span>
              </li>
              <li className="flex items-center gap-2">
                <Check size={16} className="text-green-600" />
                <span>Livraison en 2-4 jours ouvrés</span>
              </li>
              <li className="flex items-center gap-2">
                <Check size={16} className="text-green-600" />
                <span>Retours gratuits sous 14 jours</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Product Tabs */}
      <div className="mt-12">
        <Tabs defaultValue="description">
          <TabsList className="grid grid-cols-3">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="features">Caractéristiques</TabsTrigger>
            <TabsTrigger value="reviews">Avis ({product.reviews.length})</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="pt-6">
            <div className="prose max-w-none">
              <p className="mb-4">{product.longDescription}</p>
            </div>
          </TabsContent>
          <TabsContent value="features" className="pt-6">
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check size={16} className="text-lisa-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="reviews" className="pt-6">
            {product.reviews.length > 0 ? (
              <div className="space-y-6">
                {product.reviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-200 pb-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">{review.user}</h4>
                        <p className="text-sm text-muted-foreground">{review.date}</p>
                      </div>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-4 w-4 ${i < review.rating ? 'fill-current' : 'text-gray-300'}`}
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="mt-2">{review.text}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center py-8 text-muted-foreground">
                Ce produit n'a pas encore d'avis. Soyez le premier à donner votre opinion!
              </p>
            )}
            
            <div className="mt-6">
              <Link to="#" className="btn-outline">
                Écrire un avis
              </Link>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProductDetail;
