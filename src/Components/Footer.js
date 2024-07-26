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
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <Box
      background={"#EAEAEA"}
      paddingTop={7}
      paddingBottom={2}
      width={"100%"}
      mt={6}
    >
      <Box
        py={6}
        width={"80%"}
        marginX={"auto"}
        borderBottom={"1px solid grey"}
        borderTop={"1px solid grey"}
      >
        <Text className="epilogue-bold" fontWeight={700} textAlign={"center"}>
          Save lives: Donate to LSSF Trust for education, farmer aid, women's
          empowerment, village support, sports incentives, and marriage
          assistance.
          {/* <span className="responsive-span">
            <Input
              width={"7%"}
              fontSize={14}
              placeholder="₹ 5000"
              border={"1px solid grey"}
              ml={1}
            />
            <Button
              ml={2}
              background={"#F56A02"}
              color={"white"}
              borderRadius={"full"}
              _hover={{ bg: "black" }}
              fontSize={14}
            >
              Donate
            </Button>
          </span> */}
        </Text>
      </Box>
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
          width={{ base: "100%", md: "70%", lg: "65%" }}
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
                fontSize={"0.9rem"}
                fontWeight={900}
                color={"#F56A02"}
              >
                Quick Links
              </Text>
              <Box height="2px" backgroundColor="black" width={"100%"} />
            </Box>
            <Link to={"/"}>
              <Text fontFamily={"EkMukta"} fontWeight={600} fontSize={"0.9rem"}>
                Home
              </Text>
            </Link>
            <Link to={"/about"}>
              <Text fontFamily={"EkMukta"} fontWeight={600} fontSize={"0.9rem"}>
                About us
              </Text>
            </Link>
            <Link to={"/annual"}>
              <Text fontFamily={"EkMukta"} fontWeight={600} fontSize={"0.9rem"}>
                Annual Report
              </Text>
            </Link>
            <Link to={"/certificate"}>
              <Text fontFamily={"EkMukta"} fontWeight={600} fontSize={"0.9rem"}>
                Certification
              </Text>
            </Link>
          </Flex>

          <Flex
            width={{ base: "100%", lg: "30%" }}
            flexDirection={"column"}
            gap={5}
            alignItems={"start"}
            justifyContent={"start"}
            pt={8}
          >
            <Link to={"/gallery"}>
              <Text fontFamily={"EkMukta"} fontWeight={600} fontSize={"0.9rem"}>
                Gallery
              </Text>
            </Link>
            <Link to={"/event"}>
              <Text fontFamily={"EkMukta"} fontWeight={600} fontSize={"0.9rem"}>
                Events
              </Text>
            </Link>
            <Link to={"/media"}>
              <Text fontFamily={"EkMukta"} fontWeight={600} fontSize={"0.9rem"}>
                Media
              </Text>
            </Link>
            <Link to={"/contact"}>
              <Text fontFamily={"EkMukta"} fontWeight={600} fontSize={"0.9rem"}>
                Contact Us
              </Text>
            </Link>
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
                fontSize={"0.9rem"}
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
                <LuPhoneCall color="white" size={12} />
              </Box>
              <Text fontFamily={"EkMukta"} fontWeight={600} fontSize={"0.9rem"}>
                +91-9910174777
              </Text>
            </Flex>

            <Flex flexDirection={"row"} gap={2} alignItems={"center"}>
              <Box borderRadius={"50%"} background={"#F56A02"} p={1}>
                <FiMail color="white" size={12} />
              </Box>
              <Text fontFamily={"EkMukta"} fontWeight={600} fontSize={"0.9rem"}>
                support@lsstrust.org.in
              </Text>
            </Flex>

            <Flex flexDirection={"row"} gap={2} alignItems={"center"}>
              <Box borderRadius={"50%"} background={"#F56A02"} p={1}>
                <TfiWorld color="white" size={12} />
              </Box>
              <Text fontFamily={"EkMukta"} fontWeight={600} fontSize={"0.9rem"}>
                www.lssftrust.com
              </Text>
            </Flex>
          </Flex>

          {/* <Flex
            width={{ base: "100%", lg: "30%" }}
            flexDirection={"column"}
            gap={5}
            alignItems={"start"}
            justifyContent={"start"}>
            <Box>
              <Text
                className="epilogue-bold"
                fontSize={"0.9rem"}
                fontWeight={900}
                color={"#F56A02"}>
                About LSSF Trust
              </Text>
              <Box height="2px" backgroundColor="black" width={"100%"} />
            </Box>

            <Text fontFamily={"EkMukta"} fontWeight={600} fontSize={"0.9rem"}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </Text>
          </Flex> */}
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
            fontSize={"0.9rem"}
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
              p={4}
            />
            <Button
              background={"#F56A02"}
              color={"white"}
              borderRadius={"full"}
              p={4}
              _hover={{ bg: "black" }}
            >
              Subscribe
            </Button>
          </Flex>

          <Box>
            <Text
              className="epilogue-bold"
              fontSize={"0.9rem"}
              fontWeight={600}
              color={"black"}
              mb={1}
            >
              Follow Us
            </Text>
            <Flex gap={4}>
              <a
                href="https://youtube.com/@lssftrust?si=-PjIzvdWyBxeFU6_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube size={18} color="#F56A02" />{" "}
              </a>
              <a
                href="https://www.facebook.com/lssftrust"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <FaFacebookF size={18} color="#F56A02" />{" "}
              </a>
              <a
                href="https://www.instagram.com/lssftrust"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={18} color="#F56A02" />
              </a>
            </Flex>
          </Box>
        </Flex>
      </Flex>

      <Text
        fontFamily={"EkMukta"}
        textAlign={"center"}
        fontWeight={600}
        fontSize={"0.9rem"}
        mt={2}
      >
        @2024 All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
