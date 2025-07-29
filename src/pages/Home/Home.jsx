import Hero from '../Hero/Hero';
import InfoPanel from '../../components/InfoPanel';
import Experience from '../../components/Experience';
import WhyChooseUs from '../../components/WhyChooseUs';
import Services from '../../components/Services';
import TheTeam from '../../components/TheTeam';
import ListaProductos from '../../components/ListaProductos';

function Home() {
  return (
    <>
      <Hero />
      <InfoPanel />
      <Experience />
      <WhyChooseUs />
      <Services />
      <TheTeam />
      <ListaProductos />
    </>
  );
}

export default Home;
