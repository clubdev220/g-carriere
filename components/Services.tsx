import Image from "next/image";

const Services = () => {
  return (
    <div className=" p-4 lg:p-8 max-w-screen-xl mx-auto lg:px-8 sm:px-6">
      <h2 className="mb-5 text-3xl font-semibold">Nos Services</h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="block rounded-xl border border-maincolor-1 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
          <Image
            width={300}
            height={300}
            src="/images/agro.jpg"
            alt="Agro-alimentaire"
            className="rounded-lg w-full"
          />

          <h2 className="mt-2 font-bold">Commerce & Agro-business</h2>

          <p className="sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            Stimulez la croissance de vos affaires avec des solutions
            stratégiques et innovantes. Nous sommes convaincus que le commerce
            et l&apos;agro-business sont des piliers essentiels du développement
            économique.
          </p>
        </div>

        <div className="block rounded-xl border border-maincolor-1 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
          <Image
            width={300}
            height={300}
            src="/images/canada.jpg"
            alt="Agro-alimentaire"
            className="rounded-lg w-full"
          />

          <h2 className="mt-2 font-bold">Immigration vers le Canada</h2>

          <p className="sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            Réalisez votre rêve de vivre au Canada avec notre expertise en
            immigration. Nos services spécialisés dans l’immigration vous
            guident tout au long du processus complexe d&apos;installation au
            Canada.
          </p>
        </div>

        <div className="block rounded-xl border border-maincolor-1 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
          <Image
            width={300}
            height={300}
            src="/images/business.jpg"
            alt="Agro-alimentaire"
            className="rounded-lg w-full"
          />

          <h2 className="mt-2 font-bold">Conseil en Gestion Financière</h2>

          <p className="sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            Optimisez les performances de votre entreprise grâce à des solutions
            financières robustes. Nos services de conseil en gestion financière
            sont conçus pour vous aider à atteindre vos objectifs financiers
          </p>
        </div>

        <div className="block rounded-xl border border-maincolor-1 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
          <Image
            width={300}
            height={300}
            src="/images/evens.jpg"
            alt="Agro-alimentaire"
            className="rounded-lg w-full"
          />

          <h2 className="mt-2 font-bold">
            Organisation d’Événements & Showbiz
          </h2>

          <p className="sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            Créez des moments inoubliables grâce à nos services
            d&apos;organisation d&apos;événements et de showbiz. Nous
            transformons vos idées en expériences mémorables. Que vous
            souhaitiez organiser un événement d&apos;entreprise, une célébration
            privée ou un spectacle artistique,
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
