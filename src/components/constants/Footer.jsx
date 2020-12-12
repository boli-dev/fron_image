import React from 'react';
import Facebook from '../icons/Facebook';

function Footer() {
  return (
    <footer className="relative p-6 bg-indigo-600 text-white md:flex md:justify-center md:p-16 md:mx-auto">
      <div className="md:w-1/3">
        <span className="text-md text-white">
          Partager vos voyages avec nous
        </span>
        <div className="flex mt-4 items-center justify-around md:justify-start">
          <button className="font-bold uppercase px-2 py-2 md:px-1 md:py-1 md:mr-3 rounded-full border border-green-300">
            <Facebook />
          </button>
          <button className="font-bold uppercase px-2 py-2 md:px-1 md:py-1 md:mr-3 rounded-full border border-green-300">
            <Facebook />
          </button>
          <button className="font-bold uppercase px-2 py-2 md:px-1 md:py-1 md:mr-3 rounded-full border border-green-300">
            <Facebook />
          </button>
          <button className="font-bold uppercase px-2 py-2 md:px-1 md:py-1 md:mr-3 rounded-full border border-green-300">
            <Facebook />
          </button>
          <button className="font-bold uppercase px-2 py-2 md:px-1 md:py-1 md:mr-3 rounded-full border border-green-300">
            <Facebook />
          </button>
          <button className="font-bold uppercase px-2 py-2 md:px-1 md:py-1 md:mr-3 rounded-full border border-green-300">
            <Facebook />
          </button>
        </div>
      </div>

      <div className="mt-5 md:mt-0 md:w-1/3">
        <span className="text-sm font-semibold text-white">
          Dreaming Get Away
        </span>
        <div className="mt-4">
          <a href="#" className="block text-white font-normal rounded">
            A propos
          </a>
          <a href="#" className="mt-2 block text-white font-normal  rounded">
            Louer un hébergement
          </a>
          <a href="#" className="mt-2 block text-white font-normal rounded">
            Voyages
          </a>
          <a href="#" className="mt-2 block text-white font-normal rounded">
            Connexion
          </a>
          <a href="#" className="mt-2 block text-white font-normal rounded">
            Inspiration
          </a>
        </div>
      </div>

      <div className="mt-5 md:mt-0">
        <span className="text-sm font-semibold text-white">Nous joindre</span>
        <div className="mt-4">
          <div className="flex items-center">
            <button className="font-bold uppercase -m-1 pr-2 rounded-full">
              <Facebook />
            </button>
            <div className="ml-2">
              <span className="block text-sm font-semibold">sans-frais</span>
              <span className="-mt-1 block text-md font-semibold">
                1 800 555-2834
              </span>
            </div>
          </div>

          <div className="flex items-center mt-2">
            <button className="font-bold uppercase -m-1 pr-2 rounded-full">
              <Facebook />
            </button>
            <div className="ml-2">
              <span className="text-green-300 block text-sm font-semibold">
                dreaminggetaway.com
              </span>
            </div>
          </div>

          <div className="flex items-center mt-3">
            <button className="font-bold uppercase -m-1 pr-2 rounded-full">
              <Facebook />
            </button>
            <div className="ml-2">
              <span className="block text-sm font-semibold">
                2092 Blvd St-jeseph, Montréal
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
