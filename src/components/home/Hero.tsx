
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-lisa-secondary py-16 md:py-24">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-lisa-dark mb-4">
              Découvrez Notre Nouvelle Collection
            </h1>
            <p className="text-lg md:text-xl text-lisa-accent mb-8">
              Des articles uniques pour embellir votre quotidien et votre intérieur
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/category/new" className="btn-primary">
                Voir la collection
              </Link>
              <Link to="/category/bestsellers" className="btn-outline">
                Meilleures ventes
              </Link>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-lisa-primary/20 rounded-full absolute -top-4 -left-4"></div>
              <img 
                src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                alt="Lisa Store Featured Product" 
                className="w-full max-w-md rounded-lg relative z-10 shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
