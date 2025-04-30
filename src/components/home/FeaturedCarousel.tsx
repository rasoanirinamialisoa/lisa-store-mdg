
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

const FeaturedCarousel = () => {
  const slides = [
    {
      id: 1,
      title: "Nouvelle Collection Été",
      description: "Découvrez notre gamme d'articles légers et colorés pour la saison chaude",
      image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      buttonText: "Explorer",
      link: "/category/new",
      bgColor: "bg-amber-50",
    },
    {
      id: 2,
      title: "Articles Maison",
      description: "Transformez votre espace avec notre sélection d'objets déco tendance",
      image: "https://images.unsplash.com/photo-1513506212288-9d98a81f3777?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      buttonText: "Voir la collection",
      link: "/category/home",
      bgColor: "bg-rose-50",
    },
    {
      id: 3,
      title: "Livraison Rapide",
      description: `Livraison gratuite pour toute commande supérieure à ${new Intl.NumberFormat('fr-MG', {style: 'currency', currency: 'MGA', maximumFractionDigits: 0}).format(siteConfig.shipping.freeShippingThreshold)}`,
      image: "https://images.unsplash.com/photo-1601647998485-b240b6dc5c64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      buttonText: "En savoir plus",
      link: "/shipping",
      bgColor: "bg-blue-50",
    },
    {
      id: 4,
      title: "Contactez-nous",
      description: "Notre équipe est à votre disposition pour répondre à vos questions",
      image: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      buttonText: "Contact",
      link: "/contact",
      bgColor: "bg-green-50",
    },
  ];

  return (
    <section className="py-8 md:py-12">
      <div className="container-custom">
        <Carousel className="w-full mb-12" opts={{ loop: true }}>
          <CarouselContent>
            {slides.map((slide) => (
              <CarouselItem key={slide.id}>
                <div className={`h-[400px] md:h-[500px] ${slide.bgColor} rounded-xl overflow-hidden`}>
                  <div className="grid md:grid-cols-2 h-full">
                    <div className="flex flex-col justify-center p-8 md:p-12">
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-lisa-dark">
                        {slide.title}
                      </h2>
                      <p className="text-lg mb-6 text-lisa-accent">
                        {slide.description}
                      </p>
                      <div>
                        <Button asChild className="group">
                          <Link to={slide.link}>
                            {slide.buttonText}
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                    <div className="hidden md:block relative">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="object-cover h-full w-full"
                      />
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-4">
            <CarouselPrevious className="relative static left-auto translate-y-0 mr-2" />
            <CarouselNext className="relative static right-auto translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default FeaturedCarousel;
