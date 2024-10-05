import { HeartHandshake, Lightbulb, ShieldCheck, Sparkles } from "lucide-react";
import Image from "next/image";

const Aboutus = () => {
  return (
    <div className=" p-4 lg:p-8 max-w-screen-xl mx-auto lg:px-8 sm:px-6">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="relative h-[500px] overflow-hidden rounded-lg sm:h-[400px] lg:order-last lg:h-full shadow-lg">
          <Image
            alt=""
            src="/images/AboutUslarge.png"
            width={500}
            height={500}
            className="absolute inset-0 h-full w-full object-cover "
          />
        </div>

        <div className="lg:py-24">
          <h2 className="text-3xl font-bold sm:text-4xl">
            À Propos de G. Carrière Groupe SARL
          </h2>

          <p className=" mt-4 text-md font-semibold">Notre Mission</p>

          <p className="mt-4 text-gray-600">
            {`Chez G. Carrière Groupe SARL, notre mission est de contribuer de manière significative au développement de nos clients, de notre communauté et de notre société. Nous nous engageons à offrir des solutions complètes et innovantes qui répondent aux besoins variés des individus et des entreprises, qu'il s'agisse de faciliter le commerce et l'agro-business, d'accompagner les projets d'immigration ou d'organiser des événements mémorables. Notre objectif est de bâtir des ponts vers un avenir meilleur en créant des opportunités, en accompagnant nos clients et en stimulant la croissance économique.`}
          </p>
        </div>
      </div>

      <div className="my-10">
        <h2 className=" mb-20 text-3xl font-semibold">Nos Valeurs</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
          <div className="block rounded-xl border border-maincolor-1 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
            <span className="inline-block rounded-lg bg-maincolor-1 p-3">
              <Lightbulb />
            </span>

            <h2 className="mt-2 font-bold">Innovation</h2>

            <p className="sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
              {`Nous nous efforçons constamment d'innover pour proposer des solutions modernes et pertinentes, adaptées aux besoins évolutifs de nos clients.`}
            </p>
          </div>

          <div className="block rounded-xl border border-maincolor-1 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
            <span className="inline-block rounded-lg bg-maincolor-1 p-3">
              <HeartHandshake />
            </span>

            <h2 className="mt-2 font-bold">Engagement</h2>

            <p className="sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
              {`Nous sommes entièrement dévoués à la réussite de nos clients et à l'amélioration de notre communauté. Leur succès est notre plus grande fierté.`}
            </p>
          </div>

          <div className="block rounded-xl border border-maincolor-1 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
            <span className="inline-block rounded-lg bg-maincolor-1 p-3">
              <ShieldCheck />
            </span>

            <h2 className="mt-2 font-bold">Intégrité</h2>

            <p className="sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
              {`Nous menons toutes nos activités avec honnêteté, transparence et éthique, garantissant ainsi la confiance de nos partenaires.`}
            </p>
          </div>

          <div className="block rounded-xl border border-maincolor-1 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
            <span className="inline-block rounded-lg bg-maincolor-1 p-3">
              <Sparkles />
            </span>

            <h2 className="mt-2 font-bold">Excellence</h2>

            <p className="sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
              {`Nous nous engageons à fournir des services de la plus haute qualité, en cherchant constamment à dépasser les attentes.`}
            </p>
          </div>
        </div>
      </div>

      <div className="my-10">
        <h2 className="mb-5 text-3xl font-semibold">Notre Histoire</h2>
        <div>
          <p className="mb-5">{`G. Carrière Groupe SARL est née d'un rêve profond : celui de soutenir la communauté, tant au sein de la diaspora qu'au pays, et de contribuer au développement économique et social. Fondée par une équipe passionnée, déterminée à faire une différence, l'entreprise a évolué pour devenir un acteur clé dans plusieurs secteurs, notamment le commerce, l'agro-business, l'immigration et la gestion d'événements.`}</p>
          <p className="mb-5">{`Depuis le début, nous avons mis l'humain au centre de notre démarche. Grâce au soutien constant de nos clients, de nos partenaires et de notre équipe, nous avons pu transformer ce rêve en réalité. Aujourd'hui, nous sommes fiers d'accompagner des individus et des entreprises à chaque étape de leur parcours, en créant des opportunités, en favorisant la collaboration et en contribuant à la construction d'une société plus forte et plus prospère.`}</p>
          <p className="mb-5">{`Avec notre slogan "Créer, Collaborer et Conquérir", nous réaffirmons notre engagement à innover, à travailler main dans la main avec nos clients et à atteindre ensemble de nouveaux sommets.`}</p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
