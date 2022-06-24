import React from "react";

const Products = () => {
  return (
    <section class="px-6 xl:px-0">
      <div class="py-12 px-6 mx-auto container">
        <div class="flex flex-col lg:items-center justify-center w-full">
          <h1 class="font-semibold text-gray-800 dark:text-white text-3xl md:text-4xl">
            ACCOMPAGNEMENT ET GESTION DE
            <span className="block text-green-700 shadow-sm text-center">
              VOS RESSOURCES FINANCIERES
            </span>
          </h1>
          <p class="mt-2.5 lg:w-1/2 lg:text-center text-lg text-gray-800 dark:text-white">
            Notre raisonnement emploie la démarche intellectuelle de résolution
            des problèmes et de trouver les solutions sur mesure durable pour
            vous accompagner dans votre croissance personnelle. Pour cet
            accompagnement, nous reprenons une des méthodes AFRIMOTHEP (ERODA)
            basée sur les théories déductibles. Notre cheminement décisionnel
            est le suivant : Ecoute, Reformulation, Objectifs, Décisions et
            Actions.
          </p>
        </div>
        <div class="flex items-center justify-center w-full">
          <div class="pt-14">
            <div class="container mx-auto">
              <div class="xl:w-4/5 w-11/12 mx-auto mb-14">
                <div
                  class="flex justify-center items-center"
                  aria-label="toggle checkbox"
                >
                  {/* <p class="mr-3 text-lg text-gray-800 dark:text-white font-bold">Bill Monthly</p> */}
                  {/* <div class="cursor-pointer w-12 h-6 rounded-full relative shadow-sm">
                                        <input  checked type="checkbox" name="toggle" id="toggle2" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 checkbox w-4 h-4 rounded-full bg-indigo-700 transition duration-150 ease-in-out absolute m-1 shadow-sm appearance-none cursor-pointer" placeholder="TOGGLECHECKBOX" />
                                        <label for="toggle2" class="toggle-label block w-12 h-6 overflow-hidden rounded-full border border-indigo-700 cursor-pointer"></label>
                                    </div> */}
                  {/* <p class="ml-3 text-lg font-normal text-gray-800 dark:text-white">Bill Anually</p> */}
                </div>
              </div>
              <div class="flex flex-wrap mb-12 justify-between sm:justify-center -mx-6">
                <div class="w-full xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-1/2 mb-4 px-6">
                  <div class="py-5 px-4 bg-white dark:bg-gray-800 border dark:border-gray-700 border-gray-200 shadow rounded-lg text-left">
                    <h2 class="text-2xl text-indigo-700 font-semibold mb-8">
                      Offres tranquilité
                    </h2>
                    <ul class="flex flex-col mb-6">
                      <li class="flex items-center mb-2.5">
                        <img
                          src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                          class="mr-4 dark:hidden"
                          alt="check-mark"
                        />
                        <img
                          src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png"
                          class="mr-4 hidden dark:block"
                          alt="check-mark"
                        />
                        <p class="text-gray-800 dark:text-white text-base font-normal">
                          24/7 access
                        </p>
                      </li>
                      <li class="flex items-center mb-2.5">
                        <img
                          src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                          class="mr-4 dark:hidden"
                          alt="check-mark"
                        />
                        <img
                          src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png"
                          class="mr-4 hidden dark:block"
                          alt="check-mark"
                        />
                        <p class="text-gray-800 dark:text-white text-base font-normal">
                          Order labs + Results
                        </p>
                      </li>
                      <li class="flex items-center mb-2.5">
                        <img
                          src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                          class="mr-4 dark:hidden"
                          alt="check-mark"
                        />
                        <img
                          src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png"
                          class="mr-4 hidden dark:block"
                          alt="check-mark"
                        />
                        <p class="text-gray-800 dark:text-white text-base font-normal">
                          Radiology tests + Results
                        </p>
                      </li>
                      <li class="flex items-center mb-2.5">
                        <img
                          src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                          class="mr-4 dark:hidden"
                          alt="check-mark"
                        />
                        <img
                          src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png"
                          class="mr-4 hidden dark:block"
                          alt="check-mark"
                        />
                        <p class="text-gray-800 dark:text-white text-base font-normal">
                          Partnership + Discounts
                        </p>
                      </li>
                      <li class="flex items-center mb-2.5">
                        <img
                          src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                          class="mr-4 dark:hidden"
                          alt="check-mark"
                        />
                        <img
                          src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png"
                          class="mr-4 hidden dark:block"
                          alt="check-mark"
                        />
                        <p class="text-gray-800 dark:text-white text-base font-normal">
                          Direct doctor phone number
                        </p>
                      </li>
                      <li class="flex items-center mb-2.5">
                        <img
                          src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                          class="mr-4 dark:hidden"
                          alt="check-mark"
                        />
                        <img
                          src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png"
                          class="mr-4 hidden dark:block"
                          alt="check-mark"
                        />
                        <p class="text-gray-800 dark:text-white text-base font-normal">
                          Specialists appoinments
                        </p>
                      </li>
                    </ul>
                    <p class="text-base text-indigo-700 relative pl-3">
                      <span class="font-light text-lg">$</span>
                      <span class="text-2xl font-semibold">20</span>
                      <span class="font-light text-lg">/month</span>
                    </p>
                    <button class="mt-5 w-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out rounded text-indigo-700 px-8 py-3 text-base font-semibold py-3">
                      Choose
                    </button>
                  </div>
                </div>
                <div class="w-full xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-1/2 mb-4 px-6">
                  <div class="py-5 px-4 bg-indigo-700 border border-gray-200 dark:border-gray-700 shadow rounded-lg text-left">
                    <h2 class="text-2xl text-white font-semibold mb-8">Offre Gold</h2>
                    <ul class="flex flex-col mb-6">
                      <li class="flex items-center mb-2.5">
                        <img
                          src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png"
                          class="mr-4"
                          alt="check-mark"
                        />
                        <p class="text-white text-base font-normal">
                          Accompagnement
                        </p>
                      </li>
                      <li class="flex items-center mb-2.5">
                        <img
                          src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png"
                          class="mr-4"
                          alt="check-mark"
                        />
                        <p class="text-white text-base font-normal">
                          1-3 mois (20 hrs): 1 200€ TTC
                        </p>
                      </li>
                      <li class="flex items-center mb-2.5">
                        <img
                          src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png"
                          class="mr-4"
                          alt="check-mark"
                        />
                        <p class="text-white text-base font-normal">
                          Radiologie financière + Results
                        </p>
                      </li>
                      <li class="flex items-center mb-2.5">
                        <img
                          src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png"
                          class="mr-4"
                          alt="check-mark"
                        />
                        <p class="text-white text-base font-normal">
                          Partnership + Discounts
                        </p>
                      </li>
                      <li class="flex items-center mb-2.5">
                        <img
                          src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png"
                          class="mr-4"
                          alt="check-mark"
                        />
                        <p class="text-white text-base font-normal">
                          Direct doctor phone number
                        </p>
                      </li>
                      <li class="flex items-center mb-2.5">
                        <img
                          src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png"
                          class="mr-4"
                          alt="check-mark"
                        />
                        <p class="text-white text-base font-normal">
                          Specialists appoinments
                        </p>
                      </li>
                    </ul>
                    <p class="text-base text-white relative pl-3">
                      <span class="font-light text-lg">400</span>
                      <span class="text-2xl font-semibold">€</span>
                      <span class="font-light text-lg">/month</span>
                    </p>
                    <button class="mt-5 w-full text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white transition duration-150 ease-in-out rounded bg-white hover:bg-gray-100 px-8 py-3 text-base font-semibold py-3">
                      Try
                    </button>
                  </div>
                </div>
                <div class="w-full xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-1/2 mb-4 px-6">
                  <div class="py-5 px-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow rounded-lg text-left">
                    <h2 class="text-2xl text-indigo-700 font-semibold mb-8">
                      Offre Zen
                    </h2>
                    <ul class="flex flex-col mb-6">
                      <li class="flex items-center mb-2.5">
                        <img
                          src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                          class="mr-4 dark:hidden"
                          alt="check-mark"
                        />
                        <img
                          src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png"
                          class="mr-4 hidden dark:block"
                          alt="check-mark"
                        />
                        <p class="text-gray-800 dark:text-white text-base font-normal">
                          24/7 access
                        </p>
                      </li>
                      <li class="flex items-center mb-2.5">
                        <img
                          src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                          class="mr-4 dark:hidden"
                          alt="check-mark"
                        />
                        <img
                          src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png"
                          class="mr-4 hidden dark:block"
                          alt="check-mark"
                        />
                        <p class="text-gray-800 dark:text-white text-base font-normal">
                          Order labs + Results
                        </p>
                      </li>
                      <li class="flex items-center mb-2.5">
                        <img
                          src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                          class="mr-4 dark:hidden"
                          alt="check-mark"
                        />
                        <img
                          src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png"
                          class="mr-4 hidden dark:block"
                          alt="check-mark"
                        />
                        <p class="text-gray-800 dark:text-white text-base font-normal">
                          Radiology tests + Results
                        </p>
                      </li>
                      <li class="flex items-center mb-2.5">
                        <img
                          src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                          class="mr-4 dark:hidden"
                          alt="check-mark"
                        />
                        <img
                          src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png"
                          class="mr-4 hidden dark:block"
                          alt="check-mark"
                        />
                        <p class="text-gray-800 dark:text-white text-base font-normal">
                          Partnership + Discounts
                        </p>
                      </li>
                      <li class="flex items-center mb-2.5">
                        <img
                          src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                          class="mr-4 dark:hidden"
                          alt="check-mark"
                        />
                        <img
                          src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png"
                          class="mr-4 hidden dark:block"
                          alt="check-mark"
                        />
                        <p class="text-gray-800 dark:text-white text-base font-normal">
                          Direct doctor phone number
                        </p>
                      </li>
                      <li class="flex items-center mb-2.5">
                        <img
                          src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                          class="mr-4 dark:hidden"
                          alt="check-mark"
                        />
                        <img
                          src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png"
                          class="mr-4 hidden dark:block"
                          alt="check-mark"
                        />
                        <p class="text-gray-800 dark:text-white text-base font-normal">
                          Specialists appoinments
                        </p>
                      </li>
                    </ul>
                    <p class="text-base text-indigo-700 relative pl-3">
                      <span class="font-light text-lg">$</span>
                      <span class="text-2xl font-semibold">200</span>
                      <span class="font-light text-lg">/month</span>
                    </p>
                    <button class="mt-5 w-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out rounded text-indigo-700 px-8 py-3 text-base font-semibold py-3">
                      Choose
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
