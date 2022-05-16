import React from "react";

const Container = () => {
  return (
    //  <div className="container max-w-7xl mx-auto bg-black-900 grid grid-cols-4 gap-4 text-red-900 overflow-hidden mt-8 mb-8">
    //   <div className="bg-light px-4 text-2xl">
    //     <p className="text-red-900">Boostez votre santé financière grâce aux <span className=" text-yellow-500">services de Afrimothep</span></p>
    //     <a href=""></a>
    //   </div>
    //   <div className="bg-green-900">Services aux particuliers</div>
    //   <div className="bg-indigo-900">Services aux entreprises</div>
    //   <div className="bg-indigo-900">Service immobilier</div>
    // </div>



    // <div class="w-full py-10">
    //         <div aria-label="group of cards" class="container mx-auto px-6 flex items-start justify-center">
    //             <div class="w-full">

    //                 <div class="flex flex-col lg:flex-row mx-auto w-full bg-white dark:bg-gray-800 shadow rounded">
    //                     <div class="w-full lg:w-1/3 p-6">
    //                         <div class="flex items-center">
    //                             <div class="w-12 h-12 rounded shadow">
    //                                 <img class="w-full h-full overflow-hidden object-cover rounded" src="https://tuk-cdn.s3.amazonaws.com/assets/components/grid_cards/gc_24.png" alt="logo" />
    //                             </div>
    //                             <div class="ml-3">
    //                                 <a tabindex="0" class="focus:underline focus:opacity-75 focus:outline-none cursor-pointer hover:opacity-75 text-gray-800 dark:text-gray-100 font-medium text-base">Fitbit Incorporation</a>
    //                                 <p class="text-gray-600 dark:text-gray-400 text-xs font-normal">San Diego, California</p>
    //                             </div>
    //                         </div>
    //                         <h3 class="text-lg text-gray-800 dark:text-gray-100 font-bold mt-5 mb-1">User Experience Revamp</h3>
    //                         <p class="text-gray-600 dark:text-gray-400 text-sm font-normal">To many naive users of the platform, a redesign may look just like a facelift. No more, no less. However, for a User Experience designer, the entire redesign process means much more than a lot of research, meticulous planning, iterating, and gallons of coffee!</p>
    //                         <div class="flex items-center mt-6 w-full">
    //                             <div class="shadow border-2 border-white rounded-full w-8 h-8">
    //                                 <img tabindex="0" role="link"  class="focus:outline-none cursor-pointer focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 rounder-full w-full h-full overflow-hidden object-cover rounded-full" src="https://dh-ui.s3.amazonaws.com/assets/photo-1564061170517-d3907caa96ea.jfif" alt="avatar" />
    //                             </div>
    //                             <div class="-ml-2 shadow border-2 border-white rounded-full w-8 h-8">
    //                                 <img tabindex="0" role="link" class="focus:outline-none cursor-pointer focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 rounder-full w-full h-full overflow-hidden object-cover rounded-full" src="https://dh-ui.s3.amazonaws.com/assets/photo-1548958921-c5c0fe1b307d.jfif" alt="avatar" />
    //                             </div>
    //                             <div class="-ml-2 shadow border-2 border-white rounded-full w-8 h-8">
    //                                 <img tabindex="0" role="link" class="focus:outline-none cursor-pointer focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 rounder-full w-full h-full overflow-hidden object-cover rounded-full" src="https://dh-ui.s3.amazonaws.com/assets/photo-1566753323558-f4e0952af115.jfif" alt="avatar" />
    //                             </div>
    //                             <div class="-ml-2 shadow border-2 border-white rounded-full w-8 h-8">
    //                                 <img tabindex="0" role="link" class="focus:outline-none cursor-pointer focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 rounder-full w-full h-full overflow-hidden object-cover rounded-full" src="https://dh-ui.s3.amazonaws.com/assets/beautiful-woman-medium-shot-with-pink-background_23-2148316670.jpg" alt="avatar" />
    //                             </div>
    //                             <div class="-ml-2 shadow border-2 border-white rounded-full w-8 h-8">
    //                                 <img tabindex="0" role="link" class="focus:outline-none cursor-pointer focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 rounder-full w-full h-full overflow-hidden object-cover rounded-full" src="https://dh-ui.s3.amazonaws.com/assets/excited-happy-young-pretty-woman_171337-2006.jpg" alt="avatar" />
    //                             </div>
    //                             <a tabindex="0" class="focus:outline-none focus:underline focus:opacity-75 hover:opacity-75 cursor-pointer text-gray-600 dark:text-gray-400 ml-2"><p class=" text-sm font-normal ">+2 more participants</p></a>
    //                         </div>
    //                     </div>
    //                     <div class="w-full lg:w-1/3 p-6 border-t border-b lg:border-t-0 lg:border-b-0 sm:border-l sm:border-r border-gray-300">
    //                         <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between">
    //                             <div class="text-xs text-center w-full bg-indigo-100 text-indigo-700 dark:text-indigo-600 rounded font-medium p-3 lg:mr-3">Start Date: 22 Jun, 2020</div>
    //                             <div class="mt-4 text-center w-full lg:mt-0 text-xs bg-red-100 text-red-700 rounded font-medium p-3">End Date: 03 Dec, 2020</div>
    //                         </div>
    //                         <div class="mt-6 mb-8 w-full bg-gray-100 dark:bg-gray-700 rounded p-4 relative">
    //                             <ul>
    //                                 <li class="text-xs text-gray-600 dark:text-gray-400 font-normal tracking-normal">- Visual QA for all design components</li>
    //                                 <li class="text-xs text-gray-600 dark:text-gray-400 font-normal tracking-normal my-4">- UX overview of new product launch</li>
    //                                 <li class="text-xs text-gray-600 dark:text-gray-400 font-normal tracking-normal">- Visual QA for all design components</li>
    //                             </ul>
    //                         </div>
    //                         <div class="flex items-center justify-between">
    //                             <div>
    //                                 <h2 class="text-gray-600 dark:text-gray-400 font-bold text-lg leading-6 mb-1 text-center">24</h2>
    //                                 <a tabindex="0" class="focus:text-gray-400 hover:text-gray-400 focus:underline cursor-pointer focus:outline-none text-gray-800 dark:text-gray-100 "><p class="text-sm leading-5 text-center">Milestones</p></a>
    //                             </div>
    //                             <div>
    //                                 <h2 class="text-gray-600 dark:text-gray-400 font-bold text-lg leading-6 mb-1 text-center">03</h2>
    //                                 <a tabindex="0" class="focus:text-gray-400 hover:text-gray-400 focus:underline cursor-pointer focus:outline-none text-gray-800 dark:text-gray-100"><p class=" text-sm leading-5 text-center">Teams Assigned</p></a>
    //                             </div>
    //                             <div>
    //                                 <h2 class="text-gray-600 dark:text-gray-400 font-bold text-lg leading-6 mb-1 text-center">14</h2>
    //                                 <a tabindex="0" class="focus:text-gray-400 hover:text-gray-400 focus:underline cursor-pointer focus:outline-none text-gray-800 dark:text-gray-100"><p class=" text-sm leading-5 text-center">Tasks Pending</p></a>
    //                             </div>
    //                         </div>
    //                     </div>
    //                     <div class="w-full lg:w-1/3 p-6">
    //                         <div class="mb-4 flex items-center justify-between">
    //                             <p class="text-gray-600 dark:text-gray-400 text-sm font-normal leading-3 tracking-normal">User Experience Research</p>
    //                             <p class="text-xs text-indigo-700 dark:text-indigo-600 font-normal leading-3 tracking-normal">7/12</p>
    //                         </div>
    //                         <div class="relative mb-8">
    //                             <hr class="h-1 rounded-sm bg-gray-200" />
    //                             <hr class="absolute top-0 h-1 w-7/12 rounded-sm bg-indigo-400" />
    //                         </div>
    //                         <div class="mb-4 flex items-center justify-between">
    //                             <p class="text-gray-600 dark:text-gray-400 text-sm font-normal leading-3 tracking-normal">Component Wireframing</p>
    //                             <p class="text-xs text-indigo-700 dark:text-indigo-600 font-normal leading-3 tracking-normal">3/12</p>
    //                         </div>
    //                         <div class="relative mb-8">
    //                             <hr class="h-1 rounded-sm bg-gray-200" />
    //                             <hr class="absolute top-0 h-1 w-3/12 rounded-sm bg-indigo-400" />
    //                         </div>
    //                         <div class="mb-4 flex items-center justify-between">
    //                             <p class="text-gray-600 dark:text-gray-400 text-sm font-normal leading-3 tracking-normal">Quality Assurance</p>
    //                             <p class="text-xs text-indigo-700 dark:text-indigo-600 font-normal leading-3 tracking-normal">9/12</p>
    //                         </div>
    //                         <div class="relative mb-6 sm:mb-12">
    //                             <hr class="h-1 rounded-sm bg-gray-200" />
    //                             <hr class="absolute top-0 h-1 w-9/12 rounded-sm bg-indigo-400" />
    //                         </div>
    //                         <div class="flex items-center justify-between">
    //                             <div>
    //                                 <p class="text-sm text-gray-800 dark:text-gray-100 font-normal mb-1 tracking-normal">Earnings</p>
    //                                 <h2 class="text-sm xl:text-lg text-gray-600 dark:text-gray-400 font-bold tracking-normal">$357,655</h2>
    //                             </div>
    //                             <div>
    //                                 <p class="text-sm text-gray-800 dark:text-gray-100 font-normal mb-1 tracking-normal">Expenses</p>
    //                                 <h2 class="text-sm xl:text-lg text-gray-600 dark:text-gray-400 font-bold tracking-normal">$189,955</h2>
    //                             </div>
    //                             <div>
    //                                 <p class="text-sm text-gray-800 dark:text-gray-100 font-normal mb-1 tracking-normal">Net Cash</p>
    //                                 <h2 class="text-sm xl:text-lg text-gray-600 dark:text-gray-400 font-bold tracking-normal">$888,546</h2>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>

    //             </div>
    //         </div>
    //     </div>

    ///************************************************************ */

        // <div tabindex="0" class="focus:outline-none">
        //     <div class="mx-auto container py-8">
        //         <div class="flex flex-wrap items-center lg:justify-between justify-center">
        //             <div tabindex="0" class="focus:outline-none mx-2 w-72 xl:mb-0 mb-8">
        //                 <div>
        //                     <img alt="person capturing an image" src="https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png" tabindex="0" class="focus:outline-none w-full h-44" />
        //                 </div>
        //                 <div class="bg-white dark:bg-gray-800">
        //                     <div class="flex items-center justify-between px-4 pt-4">
        //                         <div>
        //                             <img class="dark:bg-white focus:outline-none" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-2-col-grid-svg1.svg" alt="bookmark" />
        //                         </div>
        //                         <div class="bg-yellow-200 py-1.5 px-6 rounded-full">
        //                             <p tabindex="0" class="focus:outline-none text-xs text-yellow-700">Featured</p>
        //                         </div>
        //                     </div>
        //                     <div class="p-4">
        //                         <div class="flex items-center">
        //                             <h2 tabindex="0" class="focus:outline-none text-lg dark:text-white font-semibold">iphone XS</h2>
        //                             <p tabindex="0" class="focus:outline-none text-xs text-gray-600 dark:text-gray-200 pl-5">4 days ago</p>
        //                         </div>
        //                         <p tabindex="0" class="focus:outline-none text-xs text-gray-600 dark:text-gray-200 mt-2">The Apple iPhone XS is available in 3 colors with 64GB memory. Shoot amazing videos</p>
        //                         <div class="flex mt-4">
        //                             <div>
        //                                 <p tabindex="0" class="focus:outline-none text-xs text-gray-600 dark:text-gray-200 px-2 bg-gray-200 dark:bg-gray-700 py-1">12 months warranty</p>
        //                             </div>
        //                             <div class="pl-2">
        //                                 <p tabindex="0" class="focus:outline-none text-xs text-gray-600 dark:text-gray-200 px-2 bg-gray-200 dark:bg-gray-700 py-1">Complete box</p>
        //                             </div>
        //                         </div>
        //                         <div class="flex items-center justify-between py-4">
        //                             <h2 tabindex="0" class="focus:outline-none text-indigo-700 text-xs font-semibold">Bay Area, San Francisco</h2>
        //                             <h3 tabindex="0" class="focus:outline-none text-indigo-700 text-xl font-semibold">$350</h3>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div tabindex="0" class="focus:outline-none mx-2 w-72 xl:mb-0 mb-8">
        //                 <div>
        //                     <img alt="person capturing an image" src="https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png" tabindex="0" class="focus:outline-none w-full h-44" />
        //                 </div>
        //                 <div class="bg-white dark:bg-gray-800">
        //                     <div class="flex items-center justify-between px-4 pt-4">
        //                         <div>
        //                             <img class="dark:bg-white focus:outline-none" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-2-col-grid-svg1.svg" alt="bookmark" />
        //                         </div>
        //                         <div class="bg-yellow-200 py-1.5 px-6 rounded-full">
        //                             <p tabindex="0" class="focus:outline-none text-xs text-yellow-700">Featured</p>
        //                         </div>
        //                     </div>
        //                     <div class="p-4">
        //                         <div class="flex items-center">
        //                             <h2 tabindex="0" class="focus:outline-none text-lg dark:text-white font-semibold">iphone XS</h2>
        //                             <p tabindex="0" class="focus:outline-none text-xs text-gray-600 dark:text-gray-200 pl-5">4 days ago</p>
        //                         </div>
        //                         <p tabindex="0" class="focus:outline-none text-xs text-gray-600 dark:text-gray-200 mt-2">The Apple iPhone XS is available in 3 colors with 64GB memory. Shoot amazing videos</p>
        //                         <div class="flex mt-4">
        //                             <div>
        //                                 <p tabindex="0" class="focus:outline-none text-xs text-gray-600 dark:text-gray-200 px-2 bg-gray-200 dark:bg-gray-700 py-1">12 months warranty</p>
        //                             </div>
        //                             <div class="pl-2">
        //                                 <p tabindex="0" class="focus:outline-none text-xs text-gray-600 dark:text-gray-200 px-2 bg-gray-200 dark:bg-gray-700 py-1">Complete box</p>
        //                             </div>
        //                         </div>
        //                         <div class="flex items-center justify-between py-4">
        //                             <h2 tabindex="0" class="focus:outline-none text-indigo-700 text-xs font-semibold">Bay Area, San Francisco</h2>
        //                             <h3 tabindex="0" class="focus:outline-none text-indigo-700 text-xl font-semibold">$350</h3>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div tabindex="0" class="focus:outline-none mx-2 w-72 xl:mb-0 mb-8">
        //                 <div>
        //                     <img alt="person capturing an image" src="https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png" tabindex="0" class="focus:outline-none w-full h-44" />
        //                 </div>
        //                 <div class="bg-white dark:bg-gray-800">
        //                     <div class="flex items-center justify-between px-4 pt-4">
        //                         <div>
        //                             <img class="dark:bg-white focus:outline-none" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-2-col-grid-svg1.svg" alt="bookmark" />
        //                         </div>
        //                         <div class="bg-yellow-200 py-1.5 px-6 rounded-full">
        //                             <p tabindex="0" class="focus:outline-none text-xs text-yellow-700">Featured</p>
        //                         </div>
        //                     </div>
        //                     <div class="p-4">
        //                         <div class="flex items-center">
        //                             <h2 tabindex="0" class="focus:outline-none text-lg dark:text-white font-semibold">iphone XS</h2>
        //                             <p tabindex="0" class="focus:outline-none text-xs text-gray-600 dark:text-gray-200 pl-5">4 days ago</p>
        //                         </div>
        //                         <p tabindex="0" class="focus:outline-none text-xs text-gray-600 dark:text-gray-200 mt-2">The Apple iPhone XS is available in 3 colors with 64GB memory. Shoot amazing videos</p>
        //                         <div class="flex mt-4">
        //                             <div>
        //                                 <p tabindex="0" class="focus:outline-none text-xs text-gray-600 dark:text-gray-200 px-2 bg-gray-200 dark:bg-gray-700 py-1">12 months warranty</p>
        //                             </div>
        //                             <div class="pl-2">
        //                                 <p tabindex="0" class="focus:outline-none text-xs text-gray-600 dark:text-gray-200 px-2 bg-gray-200 dark:bg-gray-700 py-1">Complete box</p>
        //                             </div>
        //                         </div>
        //                         <div class="flex items-center justify-between py-4">
        //                             <h2 tabindex="0" class="focus:outline-none text-indigo-700 text-xs font-semibold">Bay Area, San Francisco</h2>
        //                             <h3 tabindex="0" class="focus:outline-none text-indigo-700 text-xl font-semibold">$350</h3>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //             {/* <!-- Card 3 Ends -->
        //             <!-- Card 4  --> */}
        //             <div tabindex="0" class="focus:outline-none mx-2 w-72 xl:mb-0 mb-8">
        //                 <div>
        //                     <img alt="person capturing an image" src="https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png" tabindex="0" class="focus:outline-none w-full h-44" />
        //                 </div>
        //                 <div class="bg-white dark:bg-gray-800">
        //                     <div class="flex items-center justify-between px-4 pt-4">
        //                         <div>
        //                             <img class="dark:bg-white focus:outline-none" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-2-col-grid-svg1.svg" alt="bookmark" />
        //                         </div>
        //                         <div class="bg-yellow-200 py-1.5 px-6 rounded-full">
        //                             <p tabindex="0" class="focus:outline-none text-xs text-yellow-700">Featured</p>
        //                         </div>
        //                     </div>
        //                     <div class="p-4">
        //                         <div class="flex items-center">
        //                             <h2 tabindex="0" class="focus:outline-none text-lg dark:text-white font-semibold">iphone XS</h2>
        //                             <p tabindex="0" class="focus:outline-none text-xs text-gray-600 dark:text-gray-200 pl-5">4 days ago</p>
        //                         </div>
        //                         <p tabindex="0" class="focus:outline-none text-xs text-gray-600 dark:text-gray-200 mt-2">The Apple iPhone XS is available in 3 colors with 64GB memory. Shoot amazing videos</p>
        //                         <div class="flex mt-4">
        //                             <div>
        //                                 <p tabindex="0" class="focus:outline-none text-xs text-gray-600 dark:text-gray-200 px-2 bg-gray-200 dark:bg-gray-700 py-1">12 months warranty</p>
        //                             </div>
        //                             <div class="pl-2">
        //                                 <p tabindex="0" class="focus:outline-none text-xs text-gray-600 dark:text-gray-200 px-2 bg-gray-200 dark:bg-gray-700 py-1">Complete box</p>
        //                             </div>
        //                         </div>
        //                         <div class="flex items-center justify-between py-4">
        //                             <h2 tabindex="0" class="focus:outline-none text-indigo-700 text-xs font-semibold">Bay Area, San Francisco</h2>
        //                             <h3 tabindex="0" class="focus:outline-none text-indigo-700 text-xl font-semibold">$350</h3>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //             {/* <!-- Card 4 Ends --> */}
        //         </div>

        //     </div>
        // </div>

        // *******************************************************************************************//
        <div class="dark:bg-gray-900">
      <section class="mx-auto container py-20">
        <div class="flex justify-center items-center flex-col">
          <div class="lg:text-6xl md:text-5xl text-4xl font-black leading-10 text-center dark:text-white">
            <h1 className="text-gray-500">Boostez votre santé financières <span className="block text-red-800">grâce aux services de Afrimothep</span></h1>
          </div>
          <div class="pt-24 grid lg:grid-cols-3 md:grid-cols-2 justify-center items-center xl:gap-y-16 gap-y-20 gap-x-16 lg:gap-x-20 xl:gap-x-0 lg:px-10 xl:px-0">
            <div class="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
              <div class="mb-6">
               <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_7-svg1.svg" alt="arrow-1" />
              </div>
              <div class="text-gray-800 dark:text-white text-2xl font-semibold text-center">
                <h2>Services aux particuliers</h2>
              </div>
              <div class="text-gray-600 dark:text-gray-300 mt-2 text-lg text-center">
                <p>Workflows can help streamline and automate repeatable business tasks.</p>
              </div>
            </div>
            <div class="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
              <div class="mb-6">
               <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_7-svg2.svg" alt="3 bars" />
              </div>
              <div class="text-gray-800 dark:text-white text-2xl font-semibold text-center">
                <h2>Services aux entreprises</h2>
              </div>
              <div class="text-gray-600 dark:text-gray-300 mt-2 text-lg text-center">
                <p>A flexible software architecture is able to changes in usability requirements</p>
              </div>
            </div>
            <div class="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
              <div class="mb-6">
               <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_7-svg3.svg" alt="bars" />
              </div>
              <div class="text-gray-800 dark:text-white text-2xl font-semibold text-center">
                <h2>Investissement</h2>
              </div>
              <div class="text-gray-600 dark:text-gray-300 mt-2 text-lg text-center">
                <p>Good usability can improve a new software chances of successful adoption.</p>
              </div>
            </div>
            <div class="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
              <div class="mb-6">
               <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_7-svg4.svg" alt="bars" />
              </div>
              <div class="text-gray-800 dark:text-white text-2xl font-semibold text-center">
                <h2>Service immobilier</h2>
              </div>
              <div class="text-gray-600 dark:text-gray-300 mt-2 text-lg text-center">
                <p>Smaller components are easier to maintain. Program can be divided</p>
              </div>
            </div>
            <div class="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
              <div class="mb-6">
                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_7-svg5.svg" alt="bars" />
              </div>
              <div class="text-gray-800 dark:text-white text-2xl font-semibold text-center">
                <h2>Better components</h2>
              </div>
              <div class="text-gray-600 dark:text-gray-300 mt-2 text-lg text-center">
                <p>Component-based design makes front-end web development faster.</p>
              </div>
            </div>
            <div class="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
              <div class="mb-6">
              <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_7-svg6.svg" alt="" />
              </div>
              <div class="text-gray-800 dark:text-white text-2xl font-semibold text-center">
                <h2>Well organised</h2>
              </div>
              <div class="text-gray-600 dark:text-gray-300 mt-2 text-lg text-center">
                <p>No more running around looking for things.When you write things and plan.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Container;
