import { Box, Flex, HStack, Text, Button, Image, Img } from "@chakra-ui/react";

import logo from "../Assests/lss_logo.png";
import "./header.css";
import donate from "../Assests/donation.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  const navigation =useNavigate()

  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <Box
      display={{ base: "none", lg: "block" }}
      bg="#FFFFFF"
      px={2}
      width={{ base: "100%", lg: "90%" }}
      margin={"auto"}
      boxShadow={"md"}
      mt={-6}
      py={4}
    >
      <Flex h={14} alignItems={"center"} justifyContent={"space-between"}>
        <HStack spacing={8} alignItems={"center"} px={{ lg: 6 }}>
          <Box>
            <Image height={"70%"} width={"70%"} src={logo} alt="logo" />
          </Box>
          <HStack
            as={"nav"}
            spacing={8}
            display={{ base: "none", lg: "flex" }}
          >
            <Link to={"/"}>
              <Text
                fontFamily={"EkMukta"}
                fontWeight={900}
                fontSize={{ lg: "1.1rem" }}
                className={isActive("/")}
              >
                Home
              </Text>
            </Link>

            <Link to={"/about"}>
              <Text
                fontFamily={"EkMukta"}
                fontWeight={900}
                fontSize={{ lg: "1.1rem" }}
                className={isActive("/about")}
              >
                About us
              </Text>
            </Link>
            <Link to={"/annual"}>
              <Text
                fontFamily={"EkMukta"}
                fontWeight={900}
                fontSize={{ lg: "1.1rem" }}
                className={isActive("/annual")}
              >
                Annual Report
              </Text>
            </Link>
            <Link to={"/provision"}>
              <Text
                fontFamily={"EkMukta"}
                fontWeight={900}
                fontSize={{ lg: "1.1rem" }}
                className={isActive("/provision")}
              >
                80G / 12A
              </Text>
            </Link>



            <Link to={"/certificate"}>
              <Text
                fontFamily={"EkMukta"}
                fontWeight={900}
                fontSize={{ lg: "1.1rem" }}
                className={isActive("/certificate")}
              >
                Certification
              </Text>
            </Link>

            <Link to={"/gallery"}>
              <Text
                fontFamily={"EkMukta"}
                fontWeight={900}
                fontSize={{ lg: "1.1rem" }}
                className={isActive("/gallery")}
              >
                Gallary
              </Text>
            </Link>
            <Link to={"/event"}>
              <Text
                fontFamily={"EkMukta"}
                fontWeight={900}
                fontSize={{ lg: "1.1rem" }}
                className={isActive("/event")}
              >
                Events
              </Text>
            </Link>

            <Link to={"/media"}>
              <Text
                fontFamily={"EkMukta"}
                fontWeight={900}
                fontSize={{ lg: "1.1rem" }}
                className={isActive("/media")}
              >
                Media
              </Text>
            </Link>
            <Link to={"/contact"}>
              <Text
                fontFamily={"EkMukta"}
                fontWeight={900}
                fontSize={{ lg: "1.1rem" }}
                className={isActive("/contact")}
              >
                Contact Us
              </Text>
            </Link>
          </HStack>
        </HStack>
        <Flex alignItems={"center"}>
          <Button
            background={"#F56A02"}
            color={"#FFFFFF"}
            borderRadius={"full"}
            p={6}
            mr={2}
            leftIcon={<Img src={donate} alt="donate" />}
            fontFamily={"EkMukta"}
            fontWeight={700}
            fontSize={"1rem"}
            _hover={{
              bg:"black"
  
              }}
              onClick={()=>navigation("/whydonation")}

          >
            Donation
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}
