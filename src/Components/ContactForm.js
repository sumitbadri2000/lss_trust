import {
  Box,
  Button,
  Flex,
  Input,
  Text,
  Textarea,
  Toast,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { RiUserLocationFill } from "react-icons/ri";
import { SiMinutemailer } from "react-icons/si";
import "./epilo.css";
import "./header.css";

const ContactForm = () => {
  const [contact, setContact] = useState({
    first: "",
    last: "",
    phone: "",
    email: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Flex
      justifyContent={"space-between"}
      width={"80%"}
      margin={"auto"}
      gap={10}
      py={3}
      flexDirection={{ base: "column", md: "row" }}
    >
      <Flex
        flexDirection={"column"}
        width={{ base: "100%", md: "60%" }}
        gap={6}
        py={3}
        px={2}
      >
        <Text
          color={"#F56A01"}
          fontSize={{ base: "1.8rem", md: "2.4rem" }}
          textAlign={"center"}
          fontWeight={700}
          className="epilogue-bold"
        >
          Enquiry
        </Text>

        <Flex mt={2} gap={4}>
          <Input
            placeholder="First Name"
            border={"1px solid #F56A01"}
            _placeholder={{ color: "#F56A01" }}
            height={"7vh"}
            name="first"
            value={contact.first}
            onChange={handleChange}
            fontFamily={"EkMukta"}
          />
          <Input
            placeholder="Last Name"
            _placeholder={{ color: "#F56A01" }}
            height={"7vh"}
            border={"1px solid #F56A01"}
            name="last"
            value={contact.last}
            onChange={handleChange}
            fontFamily={"EkMukta"}
          />
        </Flex>

        <Flex gap={4}>
          <Input
            placeholder="Phone No."
            _placeholder={{ color: "#F56A01" }}
            border={"1px solid #F56A01"}
            height={"7vh"}
            name="phone"
            value={contact.phone}
            onChange={handleChange}
            fontFamily={"EkMukta"}
          />
          <Input
            placeholder="Email"
            border={"1px solid #F56A01"}
            _placeholder={{ color: "#F56A01" }}
            height={"7vh"}
            name="email"
            value={contact.email}
            onChange={handleChange}
            fontFamily={"EkMukta"}
          />
        </Flex>

        <Textarea
          _placeholder={{ color: "#F56A01" }}
          border={"1px solid #F56A01"}
          resize={"none"}
          placeholder="Description ..."
          name="description"
          value={contact.description}
          onChange={handleChange}
          height={"20vh"}
        />

        <Button
          _hover={{
            bg: "white",
            color: "#F56A01",
            border: "1px solid #F56A01",
          }}
          color="white"
          bg={"#F56A01"}
          fontSize={"1.2rem"}
          p={6}
          width={{base:"100%",lg:"30%"}}
          margin={"auto"}
          borderRadius={"full"}
        >
          Submit
        </Button>
      </Flex>

      <Flex
        display={{ base: "none", md: "flex" }}
        flexDirection={"column"}
        width={{ base: "100%", md: "24%" }}
        gap={6}
        py={3}
        alignItems={"start"}
        px={2}
      >
        <Text
          color={"#F56A01"}
          fontSize={{ base: "1.8rem", md: "2.4rem" }}
          textAlign={"center"}
          fontWeight={700}
          className="epilogue-bold"
        >
          Contact
        </Text>
        <Flex gap={4} justifyContent={"start"} alignItems={"center"}>
          <Box borderRadius={"50%"} bg={"#F56A01"} p={2}>
            <SiMinutemailer color="white" size={12} />
          </Box>
          <Text fontSize={"1rem"} fontFamily={"EkMukta"} fontWeight={800}>
            support@lsstrust.org.in
          </Text>
        </Flex>

        <Flex
          gap={4}
          justifyContent={"start"}
          fontFamily={"EkMukta"}
          alignItems={"center"}
        >
          <Box borderRadius={"50%"} bg={"#F56A01"} p={2}>
            <BsFillTelephoneOutboundFill color="white" size={12} />
          </Box>
          <Text fontSize={"1rem"} fontFamily={"EkMukta"} fontWeight={800}>
            +91-9910174777
          </Text>
        </Flex>

        <Flex gap={4} justifyContent={"start"} alignItems={"center"}>
          <Box borderRadius={"50%"} bg={"#F56A01"} p={2}>
            <RiUserLocationFill color="white" size={12} />
          </Box>
          <Text fontSize={"1rem"} fontFamily={"EkMukta"} fontWeight={800}>
            ग्राम लई, थाना-बिहटा, पटना
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ContactForm;
