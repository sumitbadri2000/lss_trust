import { Box, Text } from "@chakra-ui/react";
import HomeContent from "../Components/HomeContent";
import Events from "../Components/Event";
import Certificate from "../Components/Certificate";
import Banner from "../Components/Baner";
const Home = () => {
  return (
    <>
      <Banner />
      <HomeContent />
      <Events />
      <Certificate />
    </>
  );
};

export default Home;
