import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import support from "../Assests/support.png";
import "./epilo.css";
import "./header.css";
const YourSupport = () => {
  return (
    <Flex
    display={{base:"none",lg:"flex"}}
      width="80%"
      height={"510px"}
      justifyContent="space-between"
      margin="auto"
      backgroundImage={support}
      backgroundSize="cover"
      // backgroundPosition="center"
    >
      <Box
        height="100%"
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Button
          mt={"20%"}
          backgroundColor={"#F56A02"}
          borderRadius={"full"}
          ml={"20%"}
          color={"white"}
          fontFamily={"EKMukta"}
          fontSize="2rem"
          p={10}
          cursor="pointer"
        >
          Contact Now
        </Button>
      </Box>
    </Flex>
  );
};

export default YourSupport;
