import {
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import { LuPhoneCall } from "react-icons/lu";
import { FiMail } from "react-icons/fi";
import { TfiWorld } from "react-icons/tfi";
import "./header.css";
import "./epilo.css";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <Box background={"#EAEAEA"} paddingTop={6} paddingBottom={2} width={"100%"}>
      <Flex
        width={"80%"}
        marginX={"auto"}
        borderBottom={"1px solid grey"}
        borderTop={"1px solid grey"}
        py={14}
        gap={{ base: 10, lg: 0 }}
        flexDirection={{ base: "column", lg: "row" }}
      >
        <Flex
          width={{ base: "100%",md:"70%", lg: "65%" }}
          flexDirection={{ base: "column", lg: "row" }}
          gap={{ base: 10, lg: 1 }}
        >
          <Flex
            width={{ base: "100%", lg: "30%" }}
            flexDirection={"column"}
            gap={5}
            alignItems={"start"}
            justifyContent={"start"}
          >
            <Box>
              <Text
                className="epilogue-bold"
                fontSize={"1.2rem"}
                fontWeight={900}
                color={"#F56A02"}
              >
                Quick Links
              </Text>
              <Box height="2px" backgroundColor="black" width={"100%"} />
            </Box>

            <Text fontFamily={"EkMukta"} fontWeight={600} fontSize={"1rem"}>
              Home
            </Text>
            <Text fontFamily={"EkMukta"} fontWeight={600} fontSize={"1rem"}>
              About us
            </Text>
            <Text fontFamily={"EkMukta"} fontWeight={600} fontSize={"1rem"}>
              Our Certificates
            </Text>
            <Text fontFamily={"EkMukta"} fontWeight={600} fontSize={"1rem"}>
              Events
            </Text>
          </Flex>

          <Flex
            width={{ base: "100%", lg: "30%" }}
            flexDirection={"column"}
            gap={5}
            alignItems={"start"}
            justifyContent={"start"}
          >
            <Box>
              <Text
                className="epilogue-bold"
                fontSize={"1.2rem"}
                fontWeight={900}
                color={"#F56A02"}
              >
                Contact
              </Text>
              <Box height="2px" backgroundColor="black" width={"100%"} />
            </Box>
            <Flex flexDirection={"row"} gap={2} alignItems={"center"}>
              <Box borderRadius={"50%"} background={"#F56A02"} p={1}>
                {" "}
                <LuPhoneCall color="white" size={10} />
              </Box>
              <Text fontFamily={"EkMukta"} fontWeight={600} fontSize={"1rem"}>
                +91-9910174777
              </Text>
            </Flex>

            <Flex flexDirection={"row"} gap={2} alignItems={"center"}>
              <Box borderRadius={"50%"} background={"#F56A02"} p={1}>
                <FiMail color="white" size={10} />
              </Box>
              <Text fontFamily={"EkMukta"} fontWeight={600} fontSize={"1rem"}>
                support@lsstrust.org.in
              </Text>
            </Flex>

            <Flex flexDirection={"row"} gap={2} alignItems={"center"}>
              <Box borderRadius={"50%"} background={"#F56A02"} p={1}>
                <TfiWorld color="white" size={10} />
              </Box>
              <Text fontFamily={"EkMukta"} fontWeight={600} fontSize={"1rem"}>
                www.lssftrust.com
              </Text>
            </Flex>
          </Flex>

          <Flex
            width={{ base: "100%", lg: "30%" }}
            flexDirection={"column"}
            gap={5}
            alignItems={"start"}
            justifyContent={"start"}
          >
            <Box>
              <Text
                className="epilogue-bold"
                fontSize={"1.2rem"}
                fontWeight={900}
                color={"#F56A02"}
              >
                About LSSF Trust
              </Text>
              <Box height="2px" backgroundColor="black" width={"100%"} />
            </Box>

            <Text fontFamily={"EkMukta"} fontWeight={600} fontSize={"1rem"}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </Text>
          </Flex>
        </Flex>

        <Flex
          width={{ base: "100%", lg: "35%" }}
          flexDirection={"column"}
          gap={5}
          alignItems={"start"}
          justifyContent={"start"}
        >
          <Text
            className="epilogue-bold"
            fontSize={"1.2rem"}
            fontWeight={900}
            color={"black"}
          >
            Subscribe to our email newsletter
          </Text>

          <Flex
            flexDirection={{ base: "column", lg: "row" }}
            width={"100%"}
            gap={6}
          >
            <Input
              border={"1px solid #000000"}
              placeholder="Subscribe Now"
              borderRadius={"full"}
              width={{ base: "100%", lg: "70%" }}
              p={6}
            />
            <Button
              background={"#F56A02"}
              color={"white"}
              borderRadius={"full"}
              p={6}
            >
              Subscribe
            </Button>
          </Flex>

          <Box>
            <Text
              className="epilogue-bold"
              fontSize={"1rem"}
              fontWeight={600}
              color={"black"}
              mb={2}
            >
              Follow Us
            </Text>
            <Flex gap={4}>
              <FaYoutube size={28} color="#F56A02" />
              <FaFacebookF size={28} color="#F56A02" />
              <FaInstagram size={28} color="#F56A02" />
            </Flex>
          </Box>
        </Flex>
      </Flex>

      <Text
        fontFamily={"EkMukta"}
        textAlign={"center"}
        fontWeight={600}
        fontSize={"1rem"}
      >
        @2024 All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
