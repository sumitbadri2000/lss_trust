import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import s1 from "../Assests/s1.png";
import "./epilo.css";
import "./header.css";
const YourSupport = () => {
  return (
    <Flex
      display={{ base: "none", lg: "flex" }}
      width="80%"
      height={"500px"}
      margin="0 auto"
      backgroundImage={s1}
      backgroundSize="cover"
      backgroundRepeat={"no-repeat"}
      alignItems="center"
      justifyContent="end"
      px={4}
      mb={2}
    >
      <Flex
        width={"60%"}
        flexDirection={"column"}
        gap={5}
        justifyContent={"center"}
        alignItems={"center"}
        mt={20}
      >
        <Text
          textAlign={"center"}
          color={"#FFA800"}
          className="epilogue-bold"
          fontWeight={900}
          fontSize={{ base: "1rem", lg: "1.6rem" }}
        >
          "Your Support Matters – Get Involved!"
        </Text>
        <Text
          textAlign={"center"}
          color={"white"}
          fontFamily={"EKMukta"}
          fontSize={{ base: "1rem", lg: "1.3rem" }}
          fontWeight={800}
        >
          Your support can change the course of a woman's life. Help us provide
          the education they deserve and the future they dream of.
        </Text>

        <Button
          width={"20%"}
          margin={"auto"}
          backgroundColor={"#F56A02"}
          borderRadius={"full"}
          color={"white"}
          fontFamily={"EKMukta"}
          fontSize="1.2rem"
          cursor="pointer"
          p={6}
          _hover={{background:"black"}}
        >
          Contact Now
        </Button>
      </Flex>
    </Flex>
  );
};

export default YourSupport;
