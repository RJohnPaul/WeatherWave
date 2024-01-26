'use client'
import Image from "next/image";
import { SetStateAction, useState } from "react";
import { Github } from '@styled-icons/bootstrap/Github';
import { Nextdotjs } from '@styled-icons/simple-icons/Nextdotjs';
import { ReactLogo } from '@styled-icons/boxicons-logos/ReactLogo';
import { Link2Outline } from "styled-icons/evaicons-outline";
import { TailwindCss } from "styled-icons/boxicons-logos";
import { SearchAlt } from "styled-icons/boxicons-regular";
import { WeatherHaze } from "styled-icons/fluentui-system-filled";
import { WeatherHailDay } from "styled-icons/fluentui-system-filled";
import { Styledcomponents } from "styled-icons/simple-icons";

interface WeatherData {
  current: any;
  location: {
    name: string;
    region: string;
  };
  forecast: {
    forecastday: {
      day: {
        maxtemp_c: number;
        mintemp_c: number;
        humidity: number;
        cloud: number;
        feelslike_c: number;
        feelslike_f: number;
        condition: {
          text: string;
          icon: string;
        };
      };
    }[];
  };
}

export default function Home() {

  const [userInput, setUserInput] = useState('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const handleInputChange = (event: { target: { value: SetStateAction<string> } }) => {
    setUserInput(event.target.value);
  };

  const handleGetWeather = () => {
    const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${userInput}`;

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'b11eda8c44msh313e3178cffa4c4p154ec8jsn07b08ec1202c',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
      },
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((data: WeatherData) => {
        console.log(data);
        setWeatherData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <><div className="relative overflow-hidden">
      <div className="bg-gradient-to-r from-purple-600 to-blue-400">
        <div className="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 mx-auto">
          {/* Grid */}
          <div className="grid justify-center md:grid-cols-2 md:justify-between md:items-center gap-2">
            <div className="text-center md:text-start md:order-2 md:flex md:justify-end md:items-center">
              
              <a
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border-2 border-white text-white hover:border-white/70 hover:text-white/70 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="https://github.com/RJohnPaul/WeatherWave"
                target="_blank"
              >
                Source Code
              </a>
            </div>
            {/* End Col */}
            <div className="flex items-center">
              <a
                className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-lg font-medium text-white hover:bg-white/[.1] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-all text-sm"
                href="https://john-porfolio.vercel.app/"
                target="_blank"
              >
               Code By
                John Paul
              </a>
              <span className="inline-block border-e border-white/[.3] w-px h-5 mx-2" />
              <a
                className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-lg font-medium text-white hover:bg-white/[.1] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-all text-sm"
                href="https://github.com/SimonPaul-0"
                target="_blank"
              >
                Idea By
                Simon Paul
              </a>
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
        </div>
      </div>
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">
        <div className="text-center">

          <h1 className="text-4xl sm:text-6xl font-bold gradient-text">
            WeatherWave
          </h1>
          <h2 className="py-5 bg-clip-text text-transparent sm:text-3xl text-xl font-bold bg-gradient-to-r from-gray-700 via-gray-900 to-black">
            Powered by RapidAPI
          </h2>
          <p className="mt-3 text-black">
            Type the city you want to know the weather of.
          </p>
          <div className="mt-7 sm:mt-12 mx-auto max-w-xl relative">
            <form>
              <div className="relative z-10 flex space-x-3 p-3 bg-white border rounded-2xl shadow-xl">
                <div className="flex-[1_0_0%]">
                  <label
                    htmlFor="hs-search-article-1"
                    className="block text-sm text-gray-700 font-medium"
                  >
                    <span className="sr-only">Type City</span>
                  </label>
                  <input
                    name="hs-search-article-1"
                    id="hs-search-article-1"
                    className="transition-all py-2.5 px-4 block w-full border-transparent rounded-lg hover:border-blue-500 hover:ring-blue-500"
                    placeholder="Type City/State Eg:New York"
                    value={userInput}
                    type="text"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex-[0_0_auto]">
                  <button
                    onClick={handleGetWeather}
                    type="button"
                    className="duration-350 hover:cursor-pointer w-[46px] h-[44px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent  text-white bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 to-gray-600 bg-gradient-to-r transition-all disabled:opacity-50 disabled:pointer-events-none hover:outline-none hover:ring-1 hover:ring-gray-600"
                  >
                    <SearchAlt size="25" />
                  </button>
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
              className="shadow-sm hover:shadow-xl transition-all m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm rounded-lg border border-gray-200 bg-white text-gray-800 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none hover:outline-none hover:ring-1 hover:ring-gray-600"
            >
              <Github size="20" />
              Source Code
            </a>
            <a
              className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:shadow-xl transition-all hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none hover:outline-none hover:ring-1 hover:ring-gray-600"
              target="_blank"
              href="https://reactjs.org/"
            >
              <ReactLogo size="20" />
              React
            </a>
            <a
              className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:shadow-xl transition-all hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none hover:outline-none hover:ring-1 hover:ring-gray-600"
              target="_blank"
              href="https://nextjs.org/"
            >
              <Nextdotjs size="20" />
              Next.js
            </a>
            <a
              className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:shadow-xl transition-all hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none hover:outline-none hover:ring-1 hover:ring-gray-600"
              target="_blank"
              href="https://rapidapi.com/"
            >
              <Link2Outline size="20" />
              RapidAPI
            </a>
            <a
              className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:shadow-xl transition-all hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none hover:outline-none hover:ring-1 hover:ring-gray-600"
              target="_blank"
              href="https://tailwindcss.com/"
            >
              <TailwindCss size="20" />
              TailwindCSS
            </a>
            <a
              className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:shadow-xl transition-all hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none hover:outline-none hover:ring-1 hover:ring-gray-600"
              target="_blank"
              href="https://styled-icons.dev/"
            >
              <Styledcomponents size="20" />
              Styled
            </a>
          </div>
          {weatherData && weatherData.current && weatherData.forecast && weatherData.forecast.forecastday.length && (
            <div className="mt-12 p-10 border border-gray-200 bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r text-gray-400 hover:shadow-xl transition-all hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none hover:outline-none ring-1 ring-gray-600  rounded-3xl shadow-2xl text-center">
              <h2 className="text-2xl transition-all md:text-5xl font-extrabold mb-8">Weather Information</h2>
              <div className="grid grid-cols-2 gap-8 mb-12 text-xl">
                <div className="flex flex-col items-center justify-center border-b-2 pb-4 border-white">
                  <strong className="text-gray-300">City:</strong>
                  <span className="text-xl font-semibold">{weatherData.location.name}</span>
                </div>
                <div className="flex flex-col items-center justify-center border-b-2 pb-4 border-white">
                  <strong className="text-gray-300">Region:</strong>
                  <span className="text-xl font-semibold">{weatherData.location.region}</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8 mb-12 md:text-4xl text-2xl">
                <div className="flex flex-col items-center md:gap-5 justify-center">
                  <strong className="text-gray-300">Current</strong>
                  <span className="md:text-4xl text-2xl font-semibold">{weatherData.current.temp_c}°C</span>
                </div>
                <div className="flex flex-col items-center md:gap-5 justify-center">
                  <strong className="text-gray-300">Feels</strong>
                  <span className="md:text-4xl text-2xl font-semibold">{weatherData.current.feelslike_c}°C</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8 mb-12 text-2xl">
                <div className="flex flex-col items-center justify-center">
                  <strong className="text-gray-300">Humidity</strong>
                  <span className="text-2xl font-semibold">{weatherData.current.humidity}%</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <strong className="text-gray-300">Cloud</strong>
                  <span className="text-2xl font-semibold">{weatherData.current.cloud}%</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <strong className="text-gray-300">Min Temp (°C)</strong>
                  <span className="text-2xl font-semibold">{weatherData.forecast.forecastday[0].day.mintemp_c}°C</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <strong className="text-gray-300">Max Temp (°C)</strong>
                  <span className="text-2xl font-semibold">{weatherData.forecast.forecastday[0].day.maxtemp_c}°C</span>
                </div>
              </div>
              <div className="mb-5">
                <strong className="text-gray-300">Condition</strong>{' '}
                {weatherData.forecast.forecastday[0].day &&
                  weatherData.forecast.forecastday[0].day.condition &&
                  weatherData.forecast.forecastday[0].day.condition.text && (
                    <img
                      src={`https:${weatherData.forecast.forecastday[0].day.condition.icon}`}
                      alt="Weather Icon"
                      className="w-15 h-15 mx-auto mt-6 rounded-full shadow-lg"
                    />
                  )}
              </div>

            </div>
          )}

        </div>
      </div>
    </div><div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="relative p-6 md:p-16">
          {/* Grid */}
          <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
            <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
              <h2 className="text-2xl text-gray-800 font-bold sm:text-3xl dark:text-gray-200">
                Few Features that WeatherWave offers
              </h2>

              <nav
                className="grid gap-4 mt-5 md:mt-10"
                aria-label="Tabs"
                role="tablist"
              >
                <button
                  type="button"
                  className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 active"
                  id="tabs-with-card-item-1"
                  data-hs-tab="#tabs-with-card-1"
                  aria-controls="tabs-with-card-1"
                  role="tab"
                >
                  <span className="flex">
                    <svg
                      className="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
                      <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
                      <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
                      <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
                      <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
                    </svg>
                    <span className="grow ms-6">
                      <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">
                        Advanced API Integration
                      </span>
                      <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">
                        WeatherWave uses RapidAPI to fetch the weather data of the city you want along with advanced algorithms.
                      </span>
                    </span>
                  </span>
                </button>
                <button
                  type="button"
                  className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  id="tabs-with-card-item-2"
                  data-hs-tab="#tabs-with-card-2"
                  aria-controls="tabs-with-card-2"
                  role="tab"
                >
                  <span className="flex">
                    <svg
                      className="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m12 14 4-4" />
                      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
                    </svg>
                    <span className="grow ms-6">
                      <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">
                        Smart Image
                      </span>
                      <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">
                        WeatherWave uses smart image algorithm to fetch the image of the city you want to know the weather of.
                      </span>
                    </span>
                  </span>
                </button>
                <button
                  type="button"
                  className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  id="tabs-with-card-item-3"
                  data-hs-tab="#tabs-with-card-3"
                  aria-controls="tabs-with-card-3"
                  role="tab"
                >
                  <span className="flex">
                    <svg
                      className="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                      <path d="M5 3v4" />
                      <path d="M19 17v4" />
                      <path d="M3 5h4" />
                      <path d="M17 19h4" />
                    </svg>
                    <span className="grow ms-6">
                      <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">
                        Deadly Accurate And Quick
                      </span>
                      <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">
                        WeatherWave uses deadly accurate algorithms and minimal time to fetch the weather data of the city you want.
                      </span>
                    </span>
                  </span>
                </button>
              </nav>

            </div>

            <div className="lg:col-span-6">
              <div className="relative">

                <div>
                  <div
                    id="tabs-with-card-1"
                    role="tabpanel"
                    aria-labelledby="tabs-with-card-item-1"
                  >
                    <img
                      className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]"
                      src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Image Description" />
                  </div>
                </div>

                <div className="hidden absolute top-0 end-0 translate-x-20 md:block lg:translate-x-20">
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

              </div>
            </div>

          </div>

          <div className="absolute inset-0 grid grid-cols-12 w-full h-full">
            <div className="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-100 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full dark:bg-white/[.075]" />
          </div>

        </div>
      </div></>

  );
}
