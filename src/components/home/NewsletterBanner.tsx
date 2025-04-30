
import { useState } from 'react';

const NewsletterBanner = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Here you would typically send the email to your backend
      setEmail('');
    }
  };

  return (
    <section className="py-16 bg-lisa-primary">
      <div className="container-custom">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-3">
            Inscrivez-vous à notre Newsletter
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Recevez les dernières tendances, offres exclusives et nouveautés directement dans votre boîte mail.
          </p>
          
          {isSubmitted ? (
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto">
              <p className="text-white text-lg font-medium">
                Merci pour votre inscription!
              </p>
              <p className="text-white/80 mt-2">
                Vous recevrez bientôt nos dernières actualités et offres.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre adresse email"
                className="px-4 py-3 rounded-lg flex-1 focus:outline-none"
                required
              />
              <button 
                type="submit" 
                className="bg-lisa-dark hover:bg-lisa-accent px-6 py-3 text-white font-medium rounded-lg transition-colors"
              >
                S'inscrire
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsletterBanner;
