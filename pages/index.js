import { client } from "../lib/client";

import { Footer, HeroBanner, Container } from '../components';

const Home = ({ bannerData, navigationData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} navigationData={navigationData}  />
      {/* {console.log(bannerData)} */}
      <Container />
       { console.log(navigationData[0].navItems)}
      <Footer />
    </>
  );
};

export const getServerSideProps = async () => {
  const bannerQuery = '*[_type == "heroBanner"]';
  const bannerData = await client.fetch(bannerQuery);

  const navigationQuery = '*[_type == "navigation"]';
  const navigationData = await client.fetch(navigationQuery);

  return {
    props: { bannerData, navigationData }
  };
};


export default Home;
