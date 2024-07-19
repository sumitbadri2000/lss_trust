import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  Img,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";
import logo from "../Assests/lss_logo.png";
import "./header.css";
import donate from "../Assests/donation.png";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      display={{ base: "none", lg: "block" }}
      bg="#FFFFFF"
      px={2}
      width={{ base: "100%", lg: "80%" }}
      margin={"auto"}
      boxShadow={"md"}
      mt={-6}
      py={4}>
      <Flex h={14} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ lg: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={"center"} px={{ lg: 10 }}>
          <Box>
            <Image height={"70%"} width={"70%"} src={logo} alt="logo" />
          </Box>{" "}
          <HStack
            as={"nav"}
            spacing={10}
            display={{ base: "none", lg: "flex" }}>
            <Text
              fontFamily={"EkMukta"}
              fontWeight={700}
              fontSize={{ lg: "1rem" }}>
              Home
            </Text>
            <Text
              fontFamily={"EkMukta"}
              fontWeight={700}
              fontSize={{ lg: "1rem" }}>
              About us
            </Text>
            <Text
              fontFamily={"EkMukta"}
              fontWeight={700}
              fontSize={{ lg: "1rem" }}>
              Our Certificates
            </Text>
            <Text
              fontFamily={"EkMukta"}
              fontWeight={700}
              fontSize={{ lg: "1rem" }}>
              Events
            </Text>
            <Text
              fontFamily={"EkMukta"}
              fontWeight={700}
              fontSize={{ lg: "1rem" }}>
              Contact
            </Text>
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
            fontSize={"1rem"}>
            Donation
          </Button>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ lg: "none" }}>
          <Stack as={"nav"} spacing={4}>
            <Text fontFamily={"EkMukta"} fontWeight={700} fontSize={"1.2rem"}>
              Home
            </Text>
            <Text fontFamily={"EkMukta"} fontWeight={700} fontSize={"1.2rem"}>
              About us
            </Text>
            <Text fontFamily={"EkMukta"} fontWeight={700} fontSize={"1.2rem"}>
              Our Certificates
            </Text>
            <Text fontFamily={"EkMukta"} fontWeight={700} fontSize={"1.2rem"}>
              Events
            </Text>
            <Text fontFamily={"EkMukta"} fontWeight={700} fontSize={"1.2rem"}>
              Contact
            </Text>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
