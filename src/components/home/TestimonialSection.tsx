
const testimonials = [
  {
    id: 1,
    name: "Sophie Martin",
    role: "Client fidèle",
    content: "J'adore la qualité des produits de Lisa Store MDG. Chaque article que j'ai acheté apporte une touche d'élégance à mon intérieur. Service client impeccable!",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    id: 2,
    name: "Thomas Dubois",
    role: "Client satisfait",
    content: "Les accessoires de mode sont uniques et de très bonne qualité. Les livraisons sont toujours rapides et bien emballées. Je recommande vivement!",
    avatar: "https://randomuser.me/api/portraits/men/54.jpg"
  },
  {
    id: 3,
    name: "Emma Petit",
    role: "Cliente régulière",
    content: "Lisa Store MDG est devenu ma boutique préférée pour les cadeaux. Leurs articles de décoration sont toujours appréciés par mes proches!",
    avatar: "https://randomuser.me/api/portraits/women/33.jpg"
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="section-title">Ce que nos clients disent</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-lisa-light p-6 rounded-lg shadow-sm border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <p className="italic text-gray-700">{testimonial.content}</p>
              <div className="mt-4 flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i}
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 fill-current" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
