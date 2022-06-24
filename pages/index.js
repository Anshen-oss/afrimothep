import { client } from "../lib/client";

import {
  Footer,
  HeroBanner,
  Container,
  Products,
  Services,
} from "../components";

const Home = ({ bannerData, navigationData, servicesData }) => {
  return (
    <div>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <Products />
      <Footer />
    </div>
  );
};

export const getStaticProps = async () => {
/* export const getServerSideProps = async () => { */
  const bannerQuery = '*[_type == "heroBanner"]';
  const bannerData = await client.fetch(bannerQuery);

  const navigationQuery = '*[_type == "navigation"]';
  const navigationData = await client.fetch(navigationQuery);

  return {
    props: { bannerData, navigationData },
  };
};

export default Home;
