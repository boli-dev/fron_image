import React from 'react';
import Dollar from '../icons/Dollar';

function Main() {
  return (
    <main>
      <div className="h-64 md:h-screen relative overflow-hidden">
        <img
          className="absolute object-cover top-0 left-0 w-full h-full"
          src="https://images.unsplash.com/photo-1507671280192-5900ae887d3d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHRyYXZlbGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="random image name"
        />
        <div class="absolute inset-0 bg-black opacity-50 h-full flex flex-col" />
        <div className="flex items-center justify-center h-full relative">
          <h3 className="block text-white text-md font-medium leading-tight uppercase md:text-4xl">
            découvrire le monde par les voyages!
            <div className="flex items-center justify-center mt-3">
              <button class="md:mt-10 text-xs font-medium space-y-2 bg-green-500 text-white px-8 py-2 rounded-full uppercase">
                inscrivez-vous!
              </button>
            </div>
          </h3>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2">
        <div className="h-96 relative">
          <img
            src="https://images.unsplash.com/photo-1468078809804-4c7b3e60a478?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fHRyYXZlbGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            className="absolute object-cover top-0 left-0 w-full h-full"
          />
        </div>

        <div className="m-10 h-72">
          <div className="md:ml-16">
            <div className="flex items-center">
              <div className="p-2 mr-2 bg-indigo-700 rounded-full">
                <Dollar />
              </div>
              <div className="text-xl uppercase font-extrabold text-indigo-700 md:text-3xl">
                gagnez un revenu additionnel
              </div>
            </div>
            <p className="mt-2 text-sm text-gray-500 font-normal">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Blanditiis est, voluptas maxime, quaerat pariatur obcaecati ut
              nulla porro repudiandae nam expedita natus consectetur aliquam
              soluta molestias eaque officia, nemo illum.
            </p>
          </div>

          <div className="md:ml-16 mt-6">
            <div className="flex items-center">
              <div className="p-2 mr-2 bg-red-400 rounded-full">
                <Dollar />
              </div>
              <div className="text-xl uppercase font-extrabold text-red-400 md:text-3xl">
                faites du voyage un expérience
              </div>
            </div>
            <p className="mt-2 text-sm text-gray-500 font-normal">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Blanditiis est, voluptas maxime, quaerat pariatur obcaecati ut
              nulla porro repudiandae nam expedita natus consectetur aliquam
              soluta molestias eaque officia, nemo illum.
            </p>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 mt-14 md:mt-0">
        <div className="h-96 relative md:order-last">
          <img
            src="https://images.unsplash.com/photo-1523225918988-00624e6d8fee?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fHRyYXZlbGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            className="absolute object-cover top-0 left-0 w-full h-full"
          />
        </div>

        <div className="m-10 h-96 ">
          <div className="md:ml-16">
            <div className="flex items-center">
              <div className="p-2 mr-2 bg-yellow-500 rounded-full">
                <Dollar />
              </div>
              <div className="text-xl w-48 uppercase font-extrabold text-yellow-500 md:text-3xl">
                partager votre ville
              </div>
            </div>
            <p className="mt-2 text-sm text-gray-500 font-normal">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Blanditiis est, voluptas maxime, quaerat pariatur obcaecati ut
              nulla porro repudiandae nam expedita natus consectetur aliquam
              soluta molestias eaque officia, nemo illum.
            </p>
          </div>

          <div className="md:ml-16 mt-6">
            <div className="flex items-center">
              <div className="p-2 mr-2 bg-green-500  rounded-full">
                <Dollar />
              </div>
              <div className="text-xl w-48 uppercase font-extrabold text-green-700 md:text-3xl">
                humanisez votre ville
              </div>
            </div>
            <p className="mt-2 text-sm text-gray-500 font-normal">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Blanditiis est, voluptas maxime, quaerat pariatur obcaecati ut
              nulla porro repudiandae nam expedita natus consectetur aliquam
              soluta molestias eaque officia, nemo illum.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
