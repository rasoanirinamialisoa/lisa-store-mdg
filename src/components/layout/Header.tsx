
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, User, Search, Menu, X } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { useCart } from '@/hooks/useCart';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useCart();
  
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  
  const categories = [
    { name: "Accessoires", path: "/category/accessories" },
    { name: "Mode", path: "/category/fashion" },
    { name: "Maison", path: "/category/home" },
    { name: "Décoration", path: "/category/decoration" },
    { name: "Gadgets", path: "/category/gadgets" }
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Logo */}
          <div className="flex-1 lg:flex-none text-center lg:text-left">
            <Link to="/" className="inline-block">
              <h1 className="text-2xl md:text-3xl font-bold text-lisa-primary">Lisa Store <span className="text-lisa-accent">MDG</span></h1>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center flex-1 space-x-8">
            {categories.map((category) => (
              <Link 
                key={category.path}
                to={category.path}
                className="text-lisa-dark hover:text-lisa-primary font-medium transition-colors"
              >
                {category.name}
              </Link>
            ))}
          </nav>
          
          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button aria-label="Search" className="text-lisa-dark hover:text-lisa-primary">
              <Search size={20} />
            </button>
            <Link to="/account" aria-label="My Account" className="text-lisa-dark hover:text-lisa-primary">
              <User size={20} />
            </Link>
            <Link to="/cart" aria-label="Shopping Cart" className="text-lisa-dark hover:text-lisa-primary relative">
              <ShoppingBag size={20} />
              {cartItemCount > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-lisa-primary h-5 w-5 flex items-center justify-center rounded-full text-[10px]">
                  {cartItemCount}
                </Badge>
              )}
            </Link>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 animate-fade-in">
          <div className="container-custom py-4">
            <nav className="flex flex-col space-y-4">
              {categories.map((category) => (
                <Link 
                  key={category.path}
                  to={category.path}
                  className="text-lisa-dark hover:text-lisa-primary font-medium transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
