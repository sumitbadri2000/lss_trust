import { Box, Flex, Text } from "@chakra-ui/react";
import { LuPhoneCall } from "react-icons/lu";
import { FiMail } from "react-icons/fi";
import { TfiWorld } from "react-icons/tfi";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import "./header.css";

const HeaderNav = () => {
  return (
    <Box background={"#F56A01"} height={{ base: 20, lg: 20 }}>
      <Flex
        flexDirection={"row"}
        width={{ base: "100%", lg: "80%" }}
        px={{ base: 2, lg: 0 }}
        py={{ base: 2, lg: 1 }}
        margin={"auto"}
        justifyContent={"space-between"}
        alignItems={"center"} >
        <Flex
          flexDirection={{ base: "column", lg: "row" }}
          justifyContent={"start"}
          alignItems={{ base: "start", lg: "center" }}
          gap={{ base: 2, lg: 8 }}>
          <Flex
            flexDirection={"row"}
            gap={3}
            color={"#FFFFFF"}
            alignItems={"center"}>
            <LuPhoneCall color={"#FFFFFF"} size={15} />

            <Text
              fontFamily={"EkMukta"}
              fontWeight={600}
              fontSize={{ base: "0.5rem", lg: "0.9rem" }}>
              7903672260 , 8936007120
            </Text>
          </Flex>
          <Flex
            flexDirection={"row"}
            gap={3}
            color={"#FFFFFF"}
            alignItems={"center"}>
            <TfiWorld color={"#FFFFFF"} size={15} />

            <Text
              fontFamily={"EkMukta"}
              fontWeight={600}
              fontSize={{ base: "0.5rem", lg: "0.9rem" }}>
              www.lsstrust.org.in
            </Text>
          </Flex>
          <Flex
            flexDirection={"row"}
            gap={3}
            color={"#FFFFFF"}
            alignItems={"center"}>
            <FiMail color={"#FFFFFF"} size={15} />

            <Text
              fontFamily={"EkMukta"}
              fontWeight={600}
              fontSize={{ base: "0.5rem", lg: "0.9rem" }}>
              support@lsstrust.org.in
            </Text>
          </Flex>
        </Flex>

        <Flex alignItems="center" gap={4}>
          <Box
            py={{ base: 2, lg: 3 }}
            px={{ base: 2, lg: 3 }}
            background="#F78834">
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer">
              <FaYoutube color="#FFFFFF" size={16} />
            </a>
          </Box>
          <Box
            py={{ base: 2, lg: 3 }}
            px={{ base: 2, lg: 3 }}
            background="#F78834">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer">
              <FaFacebookF color="#FFFFFF" size={16} />
            </a>
          </Box>
          <Box
            py={{ base: 2, lg: 3 }}
            px={{ base: 2, lg: 3 }}
            background="#F78834">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer">
              <FaInstagram color="#FFFFFF" size={16} />
            </a>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default HeaderNav;
