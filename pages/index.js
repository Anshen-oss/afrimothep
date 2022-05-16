import HeroBanner from "../components/HeroBanner";

import { client } from "../lib/client";
import Footer from "../components/Footer";

const Home = ({ bannerData, navigationData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} navigationData={navigationData}  />
      {/* {console.log(bannerData)} */}

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
