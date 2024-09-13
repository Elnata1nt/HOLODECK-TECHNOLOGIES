import React from 'react';

const partners = [
  { name: 'freeCodeCamp', logo: 'src/assets/images/PARCEIROS/gradient.png' },
  { name: 'MindsDB', logo: 'src/assets/images/PARCEIROS/logo-parceiro.png' },
  { name: 'RedwoodJS', logo: 'src/assets/images/PARCEIROS/TOV-Black.png' },
  { name: 'Pangea', logo: 'src/assets/images/PARCEIROS/Sebrae-PNG.png' },
  { name: 'Fern', logo: 'src/assets/images/PARCEIROS/Stec.png' },

];

const Partners = () => {
  return (
    <div className="py-16 bg-whitebg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wide">
        Marcas que apoiam e impulsionam nosso sucesso como empresas parceiras e colaboradoras.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {partners.map((partner) => (
            <div key={partner.name} className="col-span-1 flex justify-center">
              <img className="h-12" src={partner.logo} alt={partner.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
