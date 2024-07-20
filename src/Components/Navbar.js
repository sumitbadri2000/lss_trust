import { Box, Flex, HStack, Text, Button, Image, Img } from "@chakra-ui/react";

import logo from "../Assests/lss_logo.png";
import "./header.css";
import donate from "../Assests/donation.png";
import { Link, useLocation } from "react-router-dom";
import { DragHandleIcon } from "@chakra-ui/icons";
import { useState } from "react";
import "./Navbar.css";
export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <Box
      display={{ base: "none", lg: "block" }}
      bg="#FFFFFF"
      px={2}
      width={{ base: "100%", lg: "80%" }}
      margin={"auto"}
      boxShadow={"md"}
      mt={-6}
      py={4}
    >
      <Flex h={14} alignItems={"center"} justifyContent={"space-between"}>
        <HStack spacing={8} alignItems={"center"} px={{ lg: 10 }}>
          <Box>
            <Image height={"70%"} width={"70%"} src={logo} alt="logo" />
          </Box>{" "}
          <HStack
            as={"nav"}
            spacing={10}
            display={{ base: "none", lg: "flex" }}
          >
            <Link to={"/"}>
              <Text
                fontFamily={"EkMukta"}
                fontWeight={700}
                fontSize={{ lg: "1rem" }}
                className={isActive("/")}
              >
                Home
              </Text>
            </Link>

            <Link to={"/about"}>
              <Text
                fontFamily={"EkMukta"}
                fontWeight={700}
                fontSize={{ lg: "1rem" }}
                className={isActive("/about")}
              >
                About us
              </Text>
            </Link>
            <Link to={"/certificate"}>
              <Text
                fontFamily={"EkMukta"}
                fontWeight={700}
                fontSize={{ lg: "1rem" }}
                className={isActive("/certificate")}
              >
                Our Certificates
              </Text>
            </Link>

            <Link to={"/gallery"}>
              <Text
                fontFamily={"EkMukta"}
                fontWeight={700}
                fontSize={{ lg: "1rem" }}
                className={isActive("/gallery")}
              >
                Gallary
              </Text>
            </Link>
            <Link to={"/event"}>
              <Text
                fontFamily={"EkMukta"}
                fontWeight={700}
                fontSize={{ lg: "1rem" }}
                className={isActive("/event")}
              >
                Events
              </Text>
            </Link>

            <Link to={"/contact"}>
              <Text
                fontFamily={"EkMukta"}
                fontWeight={700}
                fontSize={{ lg: "1rem" }}
                className={isActive("/contact")}
              >
                Contact
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
            mr={4}
            leftIcon={<Img src={donate} alt="donate" />}
            fontFamily={"EkMukta"}
            fontWeight={700}
            fontSize={"1rem"}
          >
            Donation
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}
