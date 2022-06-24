import { client, urlFor } from '../../lib/client'

import Services from '../../components/Services';

const Index = ({servicesData}) => {
  return (
   <Services servicesData={servicesData} />
  )
}

export const getStaticProps = async () => {
  const servicesQuery = '*[_type == "services"]';
  const servicesData = await client.fetch(servicesQuery);

  return {
    props: { servicesData },
  };
};
export default Index;


