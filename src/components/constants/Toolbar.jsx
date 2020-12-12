import React, { useState } from 'react';
import Menu from '../icons/Menu';
import Close from '../icons/Close';

function Toolbar() {
  const [state, setState] = useState({
    isOpen: false,
  });

  const showMenu = () => {
    setState((state) => ({
      isOpen: !state.isOpen,
    }));
  };

  return (
    <header className="bg-white shadow">
      <div className="px-4 md:px-4 py-3 flex items-center justify-between">
        <div>
          <img
            className="w-52 object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXjYX_411xXW3LLqfLRNTYhdOhksy-A2T6Xg&usqp=CAU"
            alt=""
          />
        </div>

        <div className="hidden md:block">
          <div className="md:flex md:justify-end">
            <a
              href="#"
              className="text-sm font-bold leading-sm px-4 leading-relaxed text-gray-900 uppercase bg-yellow-400"
            >
              aide
            </a>
            <a
              href="#"
              className="text-sm font-bold leading-sm px-4 leading-relaxed text-gray-900 uppercase bg-yellow-400"
            >
              nous joindre
            </a>
            <a
              href="#"
              className="text-sm font-bold leading-sm px-4 leading-relaxed text-blue-600 uppercase bg-green-400"
            >
              eng
            </a>
          </div>
          <div className="mt-3 pb-3">
            <a
              href="#"
              className="uppercase px-7 font-semibold text-md text-yellow-500"
            >
              annoncer
            </a>
            <a href="#" className="uppercase px-7 font-semibold text-md">
              planifier un voyage
            </a>
            <a href="#" className="uppercase px-7 font-semibold text-md">
              mes voyages
            </a>
            <a href="#" className="uppercase pl-7 font-semibold text-md">
              connexion
            </a>
          </div>
        </div>

        <div className="flex md:hidden">
          <button onClick={showMenu} className="h-8 w-8">
            {state.isOpen ? <Close /> : <Menu />}
          </button>
        </div>
      </div>

      <div
        className={`pl-3 pr-4 pt-1 pb-3 block md:hidden ${
          state.isOpen ? 'block' : 'hidden'
        }`}
      >
        <h2 className="px-2 mb-2 text-xs font-semibold text-gray-600 uppercase tracking-wide">
          {' '}
          info{' '}
        </h2>
        <a
          href="#"
          className="px-2 py-1 block uppercase text-black font-medium hover:bg-gray-100 rounded"
        >
          {' '}
          annoncer{' '}
        </a>
        <a
          href="#"
          className="mt-1 px-2 py-1 block uppercase text-black font-medium hover:bg-gray-100 rounded"
        >
          {' '}
          planifier un voyage{' '}
        </a>
        <a
          href="#"
          className="mt-1 px-2 py-1 block uppercase text-black font-medium hover:bg-gray-100 rounded"
        >
          {' '}
          mes voyages{' '}
        </a>
        <a
          href="#"
          className="mt-1 px-2 py-1 block uppercase text-black font-medium hover:bg-gray-100 rounded"
        >
          {' '}
          connexion{' '}
        </a>

        <h2 className="px-2 pt-3 mb-2 text-xs font-semibold text-gray-600 uppercase tracking-wide">
          {' '}
          contact{' '}
        </h2>
        <a
          href="#"
          className="mt-1 px-2 py-1 block uppercase text-black font-medium hover:bg-gray-100 rounded"
        >
          {' '}
          nous joinder{' '}
        </a>
        <a
          href="#"
          className="mt-1 px-2 py-1 block uppercase text-black font-medium hover:bg-gray-100 rounded"
        >
          {' '}
          eng{' '}
        </a>
        <a
          href="#"
          className="mt-1 px-2 py-1 block uppercase text-black font-medium hover:bg-gray-100 rounded"
        >
          {' '}
          Aide{' '}
        </a>
      </div>
    </header>
  );
}

export default Toolbar;
