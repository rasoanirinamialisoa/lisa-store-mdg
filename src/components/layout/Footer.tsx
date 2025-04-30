
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-lisa-dark text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Store Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Lisa Store MDG</h3>
            <p className="text-gray-300 mb-2">
              Votre destination pour les accessoires, la mode, les articles de maison,
              les décorations et les gadgets de qualité.
            </p>
            <p className="text-gray-300">
              Antananarivo, Madagascar
            </p>
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Catégories</h3>
            <ul className="space-y-2">
              <li><Link to="/category/accessories" className="text-gray-300 hover:text-white transition-colors">Accessoires</Link></li>
              <li><Link to="/category/fashion" className="text-gray-300 hover:text-white transition-colors">Mode</Link></li>
              <li><Link to="/category/home" className="text-gray-300 hover:text-white transition-colors">Maison</Link></li>
              <li><Link to="/category/decoration" className="text-gray-300 hover:text-white transition-colors">Décoration</Link></li>
              <li><Link to="/category/gadgets" className="text-gray-300 hover:text-white transition-colors">Gadgets</Link></li>
            </ul>
          </div>
          
          {/* Help */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Aide</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/shipping" className="text-gray-300 hover:text-white transition-colors">Livraison</Link></li>
              <li><Link to="/returns" className="text-gray-300 hover:text-white transition-colors">Retours</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-3">
              Inscrivez-vous pour recevoir nos dernières offres et nouveautés.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Votre email" 
                className="px-3 py-2 rounded-l-md flex-1 text-gray-800 focus:outline-none"
                aria-label="Email address"
              />
              <button 
                className="bg-lisa-primary hover:bg-lisa-accent px-4 py-2 rounded-r-md transition-colors"
                aria-label="Subscribe to newsletter"
              >
                OK
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 mt-6 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Lisa Store MDG. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
