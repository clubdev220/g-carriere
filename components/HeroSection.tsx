// components/HeroSection.jsx
export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-5 lg:mt-20 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold">
            Réalisez vos rêves avec un <br /> partenaire de confiance
          </h1>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Que vous souhaitiez développer votre activité, immigrer au Canada ou
            organiser des événements exceptionnels, G. Carrière Groupe SARL vous
            offre des solutions sur mesure adaptées à vos besoins. Nous mettons
            notre expertise au service de votre succès pour que vous puissiez
            conquérir de nouveaux sommets.
          </p>

          <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
            <a
              href="#"
              className="inline-block bg-maincolor-1 text-white text-lg px-6 py-3 rounded-md hover:bg-indigo-700 transition"
            >
              Consultation Gratuit
            </a>
            <a
              href="#"
              className="inline-block text-white text-lg px-6 py-3 rounded-md bg-gray-700 hover:bg-gray-600 transition"
            >
              Nous Contacter &rarr;
            </a>
          </div>

          <div className="mt-8 max-w-7xl rounded-lg  h-[500px] mx-auto px-4 sm:px-6 lg:px-8 bg-hero bg-cover bg-no-repeat bg-center shadow border-white"></div>
        </div>
      </div>
    </section>
  );
}
