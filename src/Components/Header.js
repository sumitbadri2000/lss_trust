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
    <Box border={"1px solid red"} background={"#F56A01"} height={24}>
      <Flex
        flexDirection={"row"}
        width={"80%"}
        margin={"auto"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Flex flexDirection={"row"} alignItems={"center"} gap={8}>
          <Flex
            flexDirection={"row"}
            gap={2}
            color={"#FFFFFF"}
            alignItems={"center"}
          >
            <LuPhoneCall color={"#FFFFFF"} size={16} />

            <Text fontFamily={"EkMukta"} fontWeight={600} fontSize={16}>
              7903672260 , 8936007120
            </Text>
          </Flex>
          <Flex
            flexDirection={"row"}
            gap={2}
            color={"#FFFFFF"}
            alignItems={"center"}
          >
            <TfiWorld color={"#FFFFFF"} size={16} />

            <Text fontFamily={"EkMukta"} fontWeight={600} fontSize={16}>
              www.lsstrust.org.in
            </Text>
          </Flex>
          <Flex
            flexDirection={"row"}
            gap={2}
            color={"#FFFFFF"}
            alignItems={"center"}
          >
            <FiMail color={"#FFFFFF"} size={16} />

            <Text fontFamily={"EkMukta"} fontWeight={600} fontSize={16}>
              support@lsstrust.org.in
            </Text>
          </Flex>
        </Flex>

        <Flex alignItems={"center"} gap={4}>
          <Box py={4} px={3} background={"#F78834"}>
            <FaYoutube color="#FFFFFF" size={20} />
          </Box>
          <Box py={4} px={3} background={"#F78834"}>
            <FaFacebookF color="#FFFFFF" size={20} />
          </Box>
          <Box py={4} px={3} background={"#F78834"}>
            <FaInstagram color="#FFFFFF" size={20} />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default HeaderNav;
