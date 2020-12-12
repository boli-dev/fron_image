import Footer from './components/constants/Footer';
import Main from './components/constants/Main';
import Toolbar from './components/constants/Toolbar';

function App() {
  return (
    <div className="antialiased">
      <Toolbar />
      <Main />
      <section className="md:-mt-20 -mt-10 p-6 md:p-5 bg-yellow-400 md:flex md:items-center md:justify-center">
        <div className="mb-2 md:mb-0 text-md md:text-2xl md:w-1/2">
          <span className="md:text-2xl text-lg text-green-500 font-bold">
            Inscrivez-vous
          </span>{' '}
          pour recevoir les nouveaux hébergements
        </div>
        <div className="md:w-1/3">
          <div className="flex flex-wrap items-stretch w-full mb-4 md:mb-0 relative font-sans">
            <input
              type="text"
              class="flex-shrink flex-grow flex-auto leading-normal w-px border h-10 border-grey-light rounded rounded-r-none px-3 relative border-r-0 focus:border-gray focus:shadow focus:outline-none text-sm text-grey-darker font-semibold"
              placeholder="Votre adresse courriel"
            />
            <div className="flex -mr-px">
              <button class="flex uppercase items-center leading-normal bg-green-500 rounded rounded-l-none border border-l-0 border-green-500 px-3 whitespace-no-wrap text-white focus:outline-none font-normal text-sm">
                souscrire
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
