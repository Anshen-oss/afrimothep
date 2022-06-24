import { client, urlFor } from '../lib/client';

const Services = ({servicesData}) => {
  console.log('services: ', servicesData);

 return (
    <section class="mx-auto container py-20">
      <div class="flex justify-center items-center flex-col">
        <div class="lg:text-6xl md:text-5xl text-4xl font-black leading-10 text-center dark:text-white">
          <h1 className="text-gray-500">
            Boostez votre santé financières
            <span className="block text-red-800">
              grâce aux services de Afrimothep
            </span>
          </h1>
        </div>
          <>
            <div class="pt-24 grid lg:grid-cols-3 md:grid-cols-2 justify-center items-center xl:gap-y-16 gap-y-20 gap-x-16 lg:gap-x-20 xl:gap-x-0 lg:px-10 xl:px-0">
                      {servicesData.map((item) => (

              <div class="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
                <div class="mb-6">
                  <img src={urlFor(item.image)} alt="arrow-1" />
                </div>
                <div class="text-gray-800 dark:text-white text-2xl font-semibold text-center">
                  <h1>{item.title}</h1>
                </div>
                <div class="text-gray-600 dark:text-gray-300 mt-2 text-lg text-center">
                  <p>{item.description}</p>
                </div>
              </div>
                 ))}
            </div>
          </>

      </div>
    </section>
  );
}


export default Services;
