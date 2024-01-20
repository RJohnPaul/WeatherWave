'use client'
import Image from "next/image";
import { Github } from '@styled-icons/bootstrap/Github';
import { Nextdotjs } from '@styled-icons/simple-icons/Nextdotjs';
import { ReactLogo } from '@styled-icons/boxicons-logos/ReactLogo';
import { Link2Outline } from "styled-icons/evaicons-outline";
import { TailwindCss } from "styled-icons/boxicons-logos";
import { SearchAlt } from "styled-icons/boxicons-regular";
import { useEffect } from 'react';

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold gradient-text">
            WeatherWave
          </h1>
          <p className="mt-3 text-black">
            Type the country you want to know the weather of.
          </p>
          <div className="mt-7 sm:mt-12 mx-auto max-w-xl relative">
            <form>
              <div className="relative z-10 flex space-x-3 p-3 bg-white border rounded-2xl shadow-xl">
                <div className="flex-[1_0_0%]">
                  <label
                    htmlFor="hs-search-article-1"
                    className="block text-sm text-gray-700 font-medium"
                  >
                    <span className="sr-only">Type Country</span>
                  </label>
                  <input
                    name="hs-search-article-1"
                    id="hs-search-article-1"
                    className="transition-all py-2.5 px-4 block w-full border-transparent rounded-lg focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Type Country" />
                </div>
                <div className="flex-[0_0_auto]">
                  <a
                    className="w-[46px] h-[44px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent  text-white bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 to-gray-600 bg-gradient-to-r transition-all disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
                    href="#"
                  >
                    <SearchAlt size="25" />
                  </a>
                </div>
              </div>
            </form>
            <div className="hidden md:block absolute top-0 end-0 -translate-y-12 translate-x-20">
              <svg
                className="w-16 h-auto text-orange-500"
                width={121}
                height={135}
                viewBox="0 0 121 135"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                  stroke="currentColor"
                  strokeWidth={10}
                  strokeLinecap="round" />
                <path
                  d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                  stroke="currentColor"
                  strokeWidth={10}
                  strokeLinecap="round" />
                <path
                  d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                  stroke="currentColor"
                  strokeWidth={10}
                  strokeLinecap="round" />
              </svg>
            </div>
            <div className="hidden md:block absolute bottom-0 start-0 translate-y-10 -translate-x-32">
              <svg
                className="w-40 h-auto text-cyan-500"
                width={347}
                height={188}
                viewBox="0 0 347 188"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
                  stroke="currentColor"
                  strokeWidth={7}
                  strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <div className="mt-10 sm:mt-20">
            <a
              target="_blank"
              href="https://github.com/RJohnPaul/WeatherWave"
              className="shadow-sm hover:shadow-xl transition-all m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm rounded-lg border border-gray-200 bg-white text-gray-800 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
            >
              <Github size="20" />
              Source Code
            </a>
            <a
              className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:shadow-xl transition-all hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
              target="_blank"
              href="https://reactjs.org/"
            >
              <ReactLogo size="20" />
              React
            </a>
            <a
              className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:shadow-xl transition-all hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
              target="_blank"
              href="https://nextjs.org/"
            >
              <Nextdotjs size="20" />
              Next.js
            </a>
            <a
              className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:shadow-xl transition-all hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
              target="_blank"
              href="https://rapidapi.com/"
            >
              <Link2Outline size="20" />
              RapidAPI
            </a>
            <a
              className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:shadow-xl transition-all hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
              target="_blank"
              href="https://tailwindcss.com/"
            >
              <TailwindCss size="20" />
              TailwindCSS
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
