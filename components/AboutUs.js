const AboutUs = () => {
  return (
    <div class="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <p class="font-normal text-sm leading-3 text-indigo-700 dark:text-indigo-500 hover:text-indigo-800 cursor-pointer pb-2">About us</p>
            <div class="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
                <div class="w-full lg:w-6/12">
                    <h2 class="w-full font-bold lg:text-4xl text-3xl lg:leading-10 dark:text-white leading-9">Notre mission est de vous accommpagner dans la modernisation des outils de gestion</h2>
                    <p class="font-normal text-base leading-6 text-gray-600 dark:text-gray-200 mt-6">Nous aidons activement nos clients à améliorer leurs performances avec une méthodologie hautement opérationnelle, avec des résultats prouvés par nos expériences professionnelles. La numérisation permet sans aucun doute aux gestionnaires de mieux comprendre les opérations de leurs entreprises, de tirer parti des avantages de prendre des décisions réfléchies et rapides dans un écosystème en constante évolution.</p>
                </div>
                <div class="w-full lg:w-6/12">
                    <img class="lg:block hidden w-full" src="https://i.ibb.co/RjNH7QB/Rectangle-122-1.png" alt="people discussing on board" />
                    <img class="lg:hidden sm:block hidden w-full" src="https://i.ibb.co/16fPqrg/Rectangle-122-2.png" alt="people discussing on board" />
                    <img class="sm:hidden block w-full" src="https://i.ibb.co/Jxhpxh6/Rectangle-122.png" alt="people discussing on board" />
                </div>
            </div>

            <div class="relative mt-24">
                <div class="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
                    <div class="z-20 w-12 h-12 bg-gray-800 rounded-full flex justify-center items-center">
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg1.svg" alt="flag" />
                    </div>

                  <img class="z-20" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg2.svg" alt="note" />

                   <img class="z-20 sm:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg3.svg" alt="users" />
                </div>
                <hr class="z-10 absolute top-2/4 w-full bg-gray-200" />
            </div>
            <div class="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
                <div>
                    <p class="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 dark:text-white mt-6">Notre vision</p>
                    <p class="font-normal text-base leading-6 text-gray-600 dark:text-gray-200 mt-6">AFRIMOTHEP part d’une idée : Nous souhaitons participer à la révolution numérique en Afrique en accompagnant les entreprises dans leur modernisation et leur transformation digitale (cf. Nos engagements), en conseillant les primo entrepreneurs à travers notamment nos vidéos et en soutenant bénévolement des agents économiques modestes dans le développement de leurs activités via notre fondation. </p>
                </div>
                <div>
                    <p class="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 dark:text-white mt-6">50M montly enrichments</p>
                    <p class="font-normal text-base leading-6 text-gray-600 dark:text-gray-200 mt-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                <div class="sm:block hidden">
                    <p class="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 dark:text-white mt-6">400k User</p>
                    <p class="font-normal text-base leading-6 text-gray-600 dark:text-gray-200 mt-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
            </div>
            <div class="sm:hidden block relative mt-8">
                <div class="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
                   <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg3.svg" alt="user" />
                </div>
                <hr class="z-10 absolute top-2/4 w-full bg-gray-200" />
            </div>
            <div class="sm:hidden grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
                <div>
                    <p class="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 dark:text-white mt-6">400k User</p>
                    <p class="font-normal text-base leading-6 text-gray-600 dark:text-gray-200 mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec purus mi, dignissim a augue eget, porttitor cursus lacus. Cras eu felis nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus..</p>
                </div>
            </div>

            <div class="flex lg:flex-row flex-col md:gap-14 gap-16 justify-between lg:mt-20 mt-16">
                <div class="w-full lg:w-6/12">
                    <h2 class="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 dark:text-white">Nos engagements</h2>
                    <p class="font-normal text-base leading-6 text-gray-600 dark:text-gray-200 mt-6 w-full lg:w-10/12 xl:w-9/12">Participer au développement digital et durable de l’Afrique.</p>
                    <p class="font-normal text-base leading-6 text-gray-600 dark:text-gray-200 w-full lg:w-10/12 xl:w-9/12 mt-5">Le monde change autour de nouvelles technologies avec de nouveaux modèles de management et d’investissement. Les entreprises qui survivront à cette révolution digitale devront leur survie à leur capacité à intégrer les nouvelles technologies et les nouvelles méthodes de travail</p>
                </div>
                <div class="w-full lg:w-6/12">
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:gap-12 gap-10">
                       {/*  <!-- Team Card --> */}
                        <div class="flex p-4 shadow-md">
                            <div class="mr-6">
                               <img class="mr-6"  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg4.svg" alt="team card" />
                            </div>
                            <div class="">
                                <p class="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 dark:text-white">Team</p>
                                <p class="mt-2 font-normal text-base leading-6 text-gray-600 dark:text-gray-200">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            </div>
                        </div>

                       {/*  <!-- Board Card --> */}
                        <div class="flex p-4 shadow-md">
                            <div class="mr-6">
                               <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg5.svg" alt="board card" />
                            </div>
                            <div class="">
                                <p class="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 dark:text-white">Board</p>
                                <p class="mt-2 font-normal text-base leading-6 text-gray-600 dark:text-gray-200">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            </div>
                        </div>

                       {/*  <!-- Press Card --> */}
                        <div class="flex p-4 shadow-md">
                            <div class="mr-6">
                               <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg6.svg" alt="press card" />
                            </div>
                            <div class="">
                                <p class="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 dark:text-white">Press</p>
                                <p class="mt-2 font-normal text-base leading-6 text-gray-600 dark:text-gray-200">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default AboutUs
