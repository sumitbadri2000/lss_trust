import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import contact from "../Assests/contact_logo.png";
import "./epilo.css";
import "./header.css";
const YourSupport = () => {
  return (
    <Flex
      width={"100%"}
      marginRight={0} // Right margin set to 0
      border={"1px solid red"}
      justifyContent={"right"}
    >
      <Flex
        background={"#6B195A"}
        width={"70%"}
        border={"1px solid blue"}
        // flexDirection={"column"}
        justifyContent={"space-between"}
      >
        <Box width={"40%"}>
          <Image height={"80%"} width={"50%"} src={contact} alt="contact" />
        </Box>
        <Flex flexDirection={"column"} width={"70%"} alignItems={"center"} border={"1px solid red"}>
          <Text
            color={"#FFA800"}
            className="epilogue-bold"
            fontWeight={800}
            fontSize={"2.1rem"}
            textAlign={"center"}
          >
            "Your Support Matters – Get Involved!"
          </Text>
          <Text
            color={"#FFFFFF"}
            textAlign={"center"}

            fontFamily={"EkMukta"}
            fontWeight={400}
            fontSize={"1.5rem"}
          >
            Your support can change the course of a woman's life. Help us
            provide the education they deserve and the future they dream of.
          </Text>
          <Button
            width={"18%"}
            p={8}
            fontWeight={700}
            fontSize={"1.4rem"}
            fontFamily={"EkMukta"}
            margin={"auto"}
            color={"#FFFFFF"}
            textAlign={"center"}

            background={"#F56A02"}
            borderRadius={"full"}
          >
            Contact Now
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default YourSupport;
