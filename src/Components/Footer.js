import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Image,
  Input,
  List,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  UnorderedList,
  useDisclosure,
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

  const {
    isOpen: isOpenpnp,
    onOpen: onOpenpnp,
    onClose: onClosepnp,
  } = useDisclosure();

  const {
    isOpen: isOpenTnC,
    onOpen: onOpenTnC,
    onClose: onCloseTnC,
  } = useDisclosure();
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

            <Box>
              <Text
                textDecorationLine={"underline"}
                fontFamily={"EkMukta"}
                fontWeight={600}
                fontSize={"0.9rem"}
                onClick={onOpenTnC}
                cursor={"pointer"}
              >
                Terms & Conditions
              </Text>

              <Modal
                size={"4xl"}
                onClose={onCloseTnC}
                // style={{ width: "50vw" }}
                isOpen={isOpenTnC}
                isCentered
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader
                    textAlign={"center"}
                    fontSize={"1.6rem"}
                    color={"#F56A01"}
                  >
                    Terms & Conditions for LSSF TRUST
                  </ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Box
                      padding="4"
                      margin="6"
                      backgroundColor="gray.50"
                      borderRadius="md"
                      boxShadow="sm"
                    >
                      <Box
                        marginTop="4"
                        marginBottom="4"
                        borderColor="gray.200"
                      />
                      <Text
                        fontSize="md"
                        lineHeight="1.5"
                        color="gray.600"
                        marginBottom="4"
                      >
                        Welcome to{" "}
                        <span style={{ color: "blue", cursor: "pointer" }}>
                          www.lssftrust.org
                        </span>{" "}
                        By using our website, you agree to comply with and be
                        bound by the following terms and conditions:
                      </Text>

                      {/* Services Section */}
                      <Box>
                        <Heading
                          as="h3"
                          size="md"
                          marginTop="10"
                          marginBottom="2"
                          color="gray.700"
                          fontWeight="bold"
                        >
                          1. Use of the Website
                        </Heading>
                        <Text
                          fontSize="md"
                          lineHeight="1.5"
                          color="gray.600"
                          marginBottom="4"
                        >
                          The content on this Site is for general information
                          and use only. It is subject to change without notice.
                          You agree to use the Site for lawful purposes only.
                        </Text>
                      </Box>
                      <Box>
                        <Heading
                          as="h3"
                          size="md"
                          marginTop="10"
                          marginBottom="2"
                          color="gray.700"
                          fontWeight="bold"
                        >
                          2. Intellectual Property
                        </Heading>
                        <Text
                          fontSize="md"
                          lineHeight="1.5"
                          color="gray.600"
                          marginBottom="4"
                        >
                          All materials on this Site, including text, images,
                          and software, are the property of LSSF TRUST.
                          Unauthorized use or reproduction is prohibited.
                        </Text>
                      </Box>

                      <Box>
                        <Heading
                          as="h3"
                          size="md"
                          marginTop="10"
                          marginBottom="2"
                          color="gray.700"
                          fontWeight="bold"
                        >
                          3. Limitation of Liability
                        </Heading>
                        <Text
                          fontSize="md"
                          lineHeight="1.5"
                          color="gray.600"
                          marginBottom="4"
                        >
                          LSSF TRUST does not warrant the accuracy,
                          completeness, or suitability of the information on
                          this Site for any particular purpose. Your use of the
                          Site is at your own risk. We are not liable for any
                          damages arising from your use of the Site.
                        </Text>
                      </Box>

                      <Box>
                        <Heading
                          as="h3"
                          size="md"
                          marginTop="4"
                          marginBottom="2"
                          color="gray.700"
                          fontWeight="bold"
                        >
                          4. External Links
                        </Heading>
                        <Text
                          fontSize="md"
                          lineHeight="1.5"
                          color="gray.600"
                          marginBottom="4"
                        >
                          The Site may contain links to other websites. LSSF
                          TRUST is not responsible for the content or privacy
                          practices of these external sites.
                        </Text>
                      </Box>

                      <Box>
                        <Heading
                          as="h3"
                          size="md"
                          marginTop="4"
                          marginBottom="2"
                          color="gray.700"
                          fontWeight="bold"
                        >
                          5. Governing Law
                        </Heading>
                        <Text
                          fontSize="md"
                          lineHeight="1.5"
                          color="gray.600"
                          marginBottom="4"
                        >
                          These terms and conditions are governed by the laws of
                          India. Any disputes arising from the use of the Site
                          will be subject to the jurisdiction of the courts in
                          India.
                        </Text>
                      </Box>

                      <Box>
                        <Heading
                          as="h3"
                          size="md"
                          marginTop="4"
                          marginBottom="2"
                          color="gray.700"
                          fontWeight="bold"
                        >
                          6. Changes to Terms & Conditions
                        </Heading>
                        <Text
                          fontSize="md"
                          lineHeight="1.5"
                          color="gray.600"
                          marginBottom="4"
                        >
                          LSSF TRUST reserves the right to modify these terms
                          and conditions at any time. Changes will be posted on
                          this page with an updated effective date.
                        </Text>
                      </Box>

                      <Text
                        fontSize="md"
                        lineHeight="1.5"
                        color="gray.600"
                        marginBottom="4"
                      >
                        By using our Site, you agree to these terms and
                        conditions. If you do not agree, please do not use our
                        Site.
                      </Text>
                      <Text
                        fontSize="md"
                        lineHeight="1.5"
                        color="gray.600"
                        marginBottom="4"
                      >
                        For any questions or concerns, please contact us at{" "}
                        <span style={{ color: "blue", cursor: "pointer" }}>
                          www.lssftrust.org
                        </span>{" "}
                      </Text>

                      {/* ... Add other sections with similar styling ... */}
                    </Box>
                  </ModalBody>
                </ModalContent>
              </Modal>
            </Box>
          </Flex>

          <Flex
            width={{ base: "100%", lg: "30%" }}
            flexDirection={"column"}
            gap={5}
            alignItems={"start"}
            justifyContent={"start"}
            pt={{ base: 0, lg: 9 }}
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

            <Box>
              <Text
                textDecorationLine={"underline"}
                fontFamily={"EkMukta"}
                fontWeight={600}
                fontSize={"0.9rem"}
                onClick={onOpenpnp}
                cursor={"pointer"}
              >
                privacy & Policy
              </Text>

              <Modal
                size={"4xl"}
                onClose={onClosepnp}
                // style={{ width: "50vw" }}
                isOpen={isOpenpnp}
                isCentered
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader
                    textAlign={"center"}
                    fontSize={"1.6rem"}
                    color={"#F56A01"}
                  >
                    Privacy Policy for LSSF TRUST
                  </ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Box
                      padding="4"
                      margin="6"
                      backgroundColor="gray.50"
                      borderRadius="md"
                      boxShadow="sm"
                    >
                      <Box
                        marginTop="4"
                        marginBottom="4"
                        borderColor="gray.200"
                      />
                      <Text
                        fontSize="md"
                        lineHeight="1.5"
                        color="gray.600"
                        marginBottom="4"
                      >
                        LSSF TRUST is committed to the ethical collection,
                        retention, and use of information provided by you on our
                        website{" "}
                        <span style={{ color: "blue", cursor: "pointer" }}>
                          www.lssftrust.org
                        </span>{" "}
                        ('Site'). This Privacy Policy outlines how we collect,
                        use, and protect your personal information.
                      </Text>

                      {/* Services Section */}
                      <Box>
                        <Heading
                          as="h3"
                          size="md"
                          marginTop="10"
                          marginBottom="2"
                          color="gray.700"
                          fontWeight="bold"
                        >
                          1. Collection of Personal Information
                        </Heading>
                        <Text
                          fontSize="md"
                          lineHeight="1.5"
                          color="gray.600"
                          marginBottom="4"
                        >
                          We may collect the following personal information:
                        </Text>

                        <UnorderedList>
                          <ListItem>Name</ListItem>
                          <ListItem>Age</ListItem>
                          <ListItem>Occupation</ListItem>
                          <ListItem>Email and postal address</ListItem>
                          <ListItem>Telephone number</ListItem>
                          <ListItem>Payment processing details</ListItem>
                          <ListItem>Limited personal details</ListItem>
                          <ListItem>
                            Any other data the website may require
                          </ListItem>
                        </UnorderedList>
                      </Box>
                      <Box>
                        <Heading
                          as="h3"
                          size="md"
                          marginTop="10"
                          marginBottom="2"
                          color="gray.700"
                          fontWeight="bold"
                        >
                          2. Use of Personal Information
                        </Heading>
                        <Text
                          fontSize="md"
                          lineHeight="1.5"
                          color="gray.600"
                          marginBottom="4"
                        >
                          LSSF TRUST uses personal information for the following
                          purposes:
                        </Text>

                        <UnorderedList>
                          <ListItem>
                            Sending newsletters, updates, and promotional
                            materials related to our activities.
                          </ListItem>
                          <ListItem>
                            Processing donations and providing receipts.
                          </ListItem>
                          <ListItem>
                            Maintaining an internal confidential database of all
                            personal information collected from visitors to the
                            Site.
                          </ListItem>
                          <ListItem>
                            Evaluating and administering the Site's activities,
                            responding to concerns, and assessing visitor
                            trends.
                          </ListItem>
                        </UnorderedList>
                      </Box>

                      <Box>
                        <Heading
                          as="h3"
                          size="md"
                          marginTop="10"
                          marginBottom="2"
                          color="gray.700"
                          fontWeight="bold"
                        >
                          3. Disclosure of Personal Information
                        </Heading>
                        <Text
                          fontSize="md"
                          lineHeight="1.5"
                          color="gray.600"
                          marginBottom="4"
                        >
                          Access to personal information is limited to
                          authorized personnel within LSSF TRUST. We may share
                          personal information with third parties involved in
                          the operation of our Site, such as payment processors
                          or email service providers. LSSF TRUST may also
                          disclose personal information if required by law or to
                          protect the rights and property of LSSF TRUST and its
                          stakeholders.
                        </Text>
                      </Box>

                      <Box>
                        <Heading
                          as="h3"
                          size="md"
                          marginTop="4"
                          marginBottom="2"
                          color="gray.700"
                          fontWeight="bold"
                        >
                          4. Security
                        </Heading>
                        <Text
                          fontSize="md"
                          lineHeight="1.5"
                          color="gray.600"
                          marginBottom="4"
                        >
                          LSSF TRUST uses appropriate security measures to
                          protect your personal information. However, we cannot
                          guarantee the absolute security of your data.
                        </Text>
                      </Box>

                      <Box>
                        <Heading
                          as="h3"
                          size="md"
                          marginTop="4"
                          marginBottom="2"
                          color="gray.700"
                          fontWeight="bold"
                        >
                          5. Copyright Protection
                        </Heading>
                        <Text
                          fontSize="md"
                          lineHeight="1.5"
                          color="gray.600"
                          marginBottom="4"
                        >
                          All content on this Site, including graphics, text,
                          logos, and software, is the property of LSSF TRUST and
                          protected by copyright laws. Unauthorized reproduction
                          or use of the content is prohibited.
                        </Text>
                      </Box>

                      <Box>
                        <Heading
                          as="h3"
                          size="md"
                          marginTop="4"
                          marginBottom="2"
                          color="gray.700"
                          fontWeight="bold"
                        >
                          6. Disclaimer
                        </Heading>
                        <Text
                          fontSize="md"
                          lineHeight="1.5"
                          color="gray.600"
                          marginBottom="4"
                        >
                          LSSF TRUST does not guarantee the accuracy or
                          completeness of the information on the Site. Use of
                          the Site and its content is at your own risk.
                        </Text>
                      </Box>
                      <Box>
                        <Heading
                          as="h3"
                          size="md"
                          marginTop="4"
                          marginBottom="2"
                          color="gray.700"
                          fontWeight="bold"
                        >
                          7. Changes to this Privacy Policy
                        </Heading>
                        <Text
                          fontSize="md"
                          lineHeight="1.5"
                          color="gray.600"
                          marginBottom="4"
                        >
                          LSSF TRUST reserves the right to update this Privacy
                          Policy at any time. Changes will be posted on this
                          page with an updated effective date.
                        </Text>
                      </Box>

                      {/* ... Add other sections with similar styling ... */}
                    </Box>
                  </ModalBody>
                </ModalContent>
              </Modal>
            </Box>
            <Box>
              <Text
                textDecorationLine={"underline"}
                fontFamily={"EkMukta"}
                fontWeight={600}
                fontSize={"0.9rem"}
                onClick={onOpenpnp}
                cursor={"pointer"}
              >
              FAQ
              </Text>

              <Modal
                size={"4xl"}
                onClose={onClosepnp}
                // style={{ width: "50vw" }}
                isOpen={isOpenpnp}
                isCentered
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader
                    textAlign={"center"}
                    fontSize={"1.6rem"}
                    color={"#F56A01"}
                  >
                    LSSF TRUST: Online Donations and Fundraising FAQs
                  </ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Box
                      padding="4"
                      margin="6"
                      backgroundColor="gray.50"
                      borderRadius="md"
                      boxShadow="sm"
                    >
                      <Box
                        marginTop="4"
                        marginBottom="4"
                        borderColor="gray.200"
                      />
                      <Text
                        fontSize="md"
                        lineHeight="1.5"
                        color="gray.600"
                        marginBottom="4"
                      >
                        LSSF TRUST is committed to the ethical collection,
                        retention, and use of information provided by you on our
                        website{" "}
                        <span style={{ color: "blue", cursor: "pointer" }}>
                          www.lssftrust.org
                        </span>{" "}
                        ('Site'). This Privacy Policy outlines how we collect,
                        use, and protect your personal information.
                      </Text>

                      {/* Services Section */}
                      <Box>
                        <Heading
                          as="h3"
                          size="md"
                          marginTop="10"
                          marginBottom="2"
                          color="gray.700"
                          fontWeight="bold"
                        >
                          1. Collection of Personal Information
                        </Heading>
                        <Text
                          fontSize="md"
                          lineHeight="1.5"
                          color="gray.600"
                          marginBottom="4"
                        >
                          We may collect the following personal information:
                        </Text>

                        <UnorderedList>
                          <ListItem>Name</ListItem>
                          <ListItem>Age</ListItem>
                          <ListItem>Occupation</ListItem>
                          <ListItem>Email and postal address</ListItem>
                          <ListItem>Telephone number</ListItem>
                          <ListItem>Payment processing details</ListItem>
                          <ListItem>Limited personal details</ListItem>
                          <ListItem>
                            Any other data the website may require
                          </ListItem>
                        </UnorderedList>
                      </Box>
                      <Box>
                        <Heading
                          as="h3"
                          size="md"
                          marginTop="10"
                          marginBottom="2"
                          color="gray.700"
                          fontWeight="bold"
                        >
                          2. Use of Personal Information
                        </Heading>
                        <Text
                          fontSize="md"
                          lineHeight="1.5"
                          color="gray.600"
                          marginBottom="4"
                        >
                          LSSF TRUST uses personal information for the following
                          purposes:
                        </Text>

                        <UnorderedList>
                          <ListItem>
                            Sending newsletters, updates, and promotional
                            materials related to our activities.
                          </ListItem>
                          <ListItem>
                            Processing donations and providing receipts.
                          </ListItem>
                          <ListItem>
                            Maintaining an internal confidential database of all
                            personal information collected from visitors to the
                            Site.
                          </ListItem>
                          <ListItem>
                            Evaluating and administering the Site's activities,
                            responding to concerns, and assessing visitor
                            trends.
                          </ListItem>
                        </UnorderedList>
                      </Box>

                      <Box>
                        <Heading
                          as="h3"
                          size="md"
                          marginTop="10"
                          marginBottom="2"
                          color="gray.700"
                          fontWeight="bold"
                        >
                          3. Disclosure of Personal Information
                        </Heading>
                        <Text
                          fontSize="md"
                          lineHeight="1.5"
                          color="gray.600"
                          marginBottom="4"
                        >
                          Access to personal information is limited to
                          authorized personnel within LSSF TRUST. We may share
                          personal information with third parties involved in
                          the operation of our Site, such as payment processors
                          or email service providers. LSSF TRUST may also
                          disclose personal information if required by law or to
                          protect the rights and property of LSSF TRUST and its
                          stakeholders.
                        </Text>
                      </Box>

                      <Box>
                        <Heading
                          as="h3"
                          size="md"
                          marginTop="4"
                          marginBottom="2"
                          color="gray.700"
                          fontWeight="bold"
                        >
                          4. Security
                        </Heading>
                        <Text
                          fontSize="md"
                          lineHeight="1.5"
                          color="gray.600"
                          marginBottom="4"
                        >
                          LSSF TRUST uses appropriate security measures to
                          protect your personal information. However, we cannot
                          guarantee the absolute security of your data.
                        </Text>
                      </Box>

                      <Box>
                        <Heading
                          as="h3"
                          size="md"
                          marginTop="4"
                          marginBottom="2"
                          color="gray.700"
                          fontWeight="bold"
                        >
                          5. Copyright Protection
                        </Heading>
                        <Text
                          fontSize="md"
                          lineHeight="1.5"
                          color="gray.600"
                          marginBottom="4"
                        >
                          All content on this Site, including graphics, text,
                          logos, and software, is the property of LSSF TRUST and
                          protected by copyright laws. Unauthorized reproduction
                          or use of the content is prohibited.
                        </Text>
                      </Box>

                      <Box>
                        <Heading
                          as="h3"
                          size="md"
                          marginTop="4"
                          marginBottom="2"
                          color="gray.700"
                          fontWeight="bold"
                        >
                          6. Disclaimer
                        </Heading>
                        <Text
                          fontSize="md"
                          lineHeight="1.5"
                          color="gray.600"
                          marginBottom="4"
                        >
                          LSSF TRUST does not guarantee the accuracy or
                          completeness of the information on the Site. Use of
                          the Site and its content is at your own risk.
                        </Text>
                      </Box>
                      <Box>
                        <Heading
                          as="h3"
                          size="md"
                          marginTop="4"
                          marginBottom="2"
                          color="gray.700"
                          fontWeight="bold"
                        >
                          7. Changes to this Privacy Policy
                        </Heading>
                        <Text
                          fontSize="md"
                          lineHeight="1.5"
                          color="gray.600"
                          marginBottom="4"
                        >
                          LSSF TRUST reserves the right to update this Privacy
                          Policy at any time. Changes will be posted on this
                          page with an updated effective date.
                        </Text>
                      </Box>

                      {/* ... Add other sections with similar styling ... */}
                    </Box>
                  </ModalBody>
                </ModalContent>
              </Modal>
            </Box>
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
