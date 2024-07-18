import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import water_line from "../Assests/water_line.png";
import water from "../Assests/water.png";
import "./epilo.css";
import "./header.css";

const Water = () => {
  return (
    <Flex flexDirection={{ base: "column", lg: "row" }}>
      <Box width={"100%"} display={{ base: "block", lg: "none" }}>
        <Image width={"100%"} height={"100%"} src={water} alt="water" />
      </Box>
      <Flex width={{ base: "100%", lg: "60%" }}>
        <Box display={{ base: "none", lg: "block" }}>
          <Image src={water_line} alt="dringk" />
        </Box>
        <Flex
          px={{ base: 4, lg: 0 }}
          marginTop={{ base: 0, lg: 28 }}
          width={{ base: "90%", lg: "60%" }}
          flexDirection={"column"}
          gap={5}
        >
          <Heading
            color={"#F56A02"}
            className="epilogue-bold"
            fontWeight={700}
            fontSize={{ base: "1.6rem", lg: "3.4rem" }}
          >
            Clean drinking water is the basic necessity
          </Heading>
          <Text
            fontFamily={"EkMukta"}
            fontSize={{ base: "0.9rem", lg: "1.5rem" }}
            textAlign={"left"}
            color={"#000000"}
            fontWeight={400}
          >
            Clean drinking water is essential for health, preventing diseases
            and supporting overall well-being. Access to safe water enhances
            community productivity and reduces healthcare costs, making it a
            fundamental necessity for sustainable development and future
            generations.
          </Text>
          <Button
            width={{ base: "60%", lg: "40%" }}
            fontFamily={"EkMukta"}
            bg={"#F56A02"}
            borderRadius={"full"}
            color={"white"}
            fontWeight={700}
            fontSize={{ base: 20, lg: 30 }}
            py={{ base: 4, lg: 8 }}
            px={{ base: 4, lg: 8 }}
          >
            Donation Now
          </Button>
        </Flex>
      </Flex>

      <Box width={"40%"} display={{ base: "none", lg: "block" }}>
        <Image width={"100%"} height={"100%"} src={water} alt="water" />
      </Box>
    </Flex>
  );
};

export default Water;
