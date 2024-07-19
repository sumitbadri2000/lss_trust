import { Box, Text } from "@chakra-ui/react";
import "./header.css";
import Navbar from "./Navbar";
import SmallNavbar from "./SmallNav";
function CommonBanner({image}) {
  return (
    <>
      <SmallNavbar />
      <Box
        display={{ base: "flex", lg: "flex" }}
        position="relative"
        width="100%"
        height={{ base: "400px", lg: "600px" }}
        bgImage={image}
        bgSize="cover"
        bgPosition="center"
        alignItems="center"
        flexDirection={"column"}
        justifyContent="center"
      >
        <Navbar />
      </Box>
    </>
  );
}

export default CommonBanner;
