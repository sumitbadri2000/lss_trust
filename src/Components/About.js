import CommonBanner from "./Common";
import about from "../Assests/about.png";
import about1 from "../Assests/about1.png";
import about2 from "../Assests/about2.png";
import slide1 from "../Assests/slide1.png";
import about_banner2 from "../Assests/about_banner2.png";
import about_banner3 from "../Assests/about_banner3.png";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import "./header.css";
import "./epilo.css";
const About = () => {
  return (
    <>
      <CommonBanner image={about} />
      <Flex
        flexDirection={{ base: "column", lg: "row" }}
        width={{ base: "90%", lg: "80%" }}
        margin={"auto"}
        py={32}
        justifyContent={"space-between"}
        alignItems={"center"}>
        <Flex
          width={{ base: "100%", lg: "50%" }}
          flexDirection={"column"}
          gap={4}>
          <Text
            width={{ base: "100%", lg: "60%" }}
            className="epilogue-bold"
            fontWeight={"bold"}
            color={"#F56A02"}
            textAlign={{ base: "center", lg: "start" }}
            fontSize={{ base: "2rem", lg: "2.4rem" }}>
            निःशुल्क स्वास्थ्य जांच शिविर :-
          </Text>
          <Text
            width={"100%"}
            fontFamily={"EkMukta"}
            fontWeight={400}
            textAlign={{ base: "center", lg: "start" }}
            color={"black"}
            fontSize={{ base: "1rem", lg: "1.2rem" }}>
            स्वर्गीय सुरेश सिंह फाउंडेशन ट्रस्ट द्वारा आयोजित निःशुल्क स्वास्थ्य
            जांच शिविर सामुदायिक कल्याण और सशक्तिकरण का प्रतीक
            है।विशेषज्ञडॉक्टरों की टीमके सहयोग से, शिविर में आने वाले जरूरतमंदों
            को चिकित्सा जांच एवं परामर्श प्रदान किया जाता है।इस कारण शिविर में
            बड़ी संख्या में लोग आते हैं, और विभिन्न सामाजिक-आर्थिक पृष्ठभूमि के
            लोग स्वास्थ्य सेवाओं का लाभ उठाते हैं।
          </Text>
          <Text
            width={"100%"}
            fontFamily={"EkMukta"}
            fontWeight={400}
            textAlign={{ base: "center", lg: "start" }}
            color={"black"}
            fontSize={{ base: "1rem", lg: "1.2rem" }}>
            ट्रस्टस्वास्थ्य जांच पर ध्यान केंद्रित करके ग्रामीणों को बीमारियों
            से राहत दिलाने की पहल करता है क्योंकि बेहतर स्वास्थ्य के लिए
            जागरूकता और नियमित स्वास्थ्य जांच महत्वपूर्ण भूमिका निभाती है। यहाँ
            रक्तचाप की जाँच से लेकर मधुमेह की जाँच तककिया जाता है।स्वास्थ्य जांच
            में दाँतों एवं हड्डियों की जांच और उपचार किए जाते हैं। साथ हीग्रामीण
            लोगों को बुनियादी चिकित्सा सुविधाएं और आवश्यक उपकरण प्रदान करके
            ट्रस्टस्वस्थ गांव बनाने की पहल कर रहा है।
          </Text>
          <Button
            borderRadius={"full"}
            p={6}
            color={"white"}
            background={"#F56A02"}
            width={{ base: "50%", lg: "26%" }}
            margin={{ base: "auto", lg: 0 }}
            fontSize={"1rem"}>
            Donation Now
          </Button>
        </Flex>
        <Box
          width={{ base: "100%", lg: "50%" }}
          display={{ base: "none", lg: "block" }}>
          <Image height={"100%"} width={"100%"} src={about1} alt="about1" />
        </Box>
      </Flex>

      <Flex
        display={{ base: "flex", lg: "flex" }}
        position="relative"
        width="100%"
        bgImage={about_banner2}
        bgSize="cover"
        bgPosition="center"
        alignItems="center"
        flexDirection={"row"}
        justifyContent="center"
        py={10}
        margin={"auto"}>
        <Flex width={"80%"} margin={"auto"}>
          <Box width={"50%"}>
            <Image height={"100%"} width={"80%"} src={about2} alt="about2" />
          </Box>

          <Flex
            width={"50%"}
            flexDirection={"column"}
            gap={5}
            alignItems={"flex-end"}>
            <Text
              width={{ base: "100%", lg: "60%" }}
              className="epilogue-bold"
              fontWeight={"bold"}
              color={"#F56A02"}
              textAlign={{ base: "center", lg: "end" }}
              fontSize={{ base: "1.6rem", lg: "2rem" }}>
              नेत्र जांच शिविर एवं मोतियाबिंद ऑपरेशन :-
            </Text>
            <Text
              width={"100%"}
              fontFamily={"EkMukta"}
              fontWeight={400}
              textAlign={"end"}
              color={"black"}
              fontSize={{ base: "1rem", lg: "1.2rem" }}>
              जरूरतमंदों को आंखों का इलाज उपलब्ध करवाने हेतु ट्रस्ट की ओर से
              निःशुल्क नेत्र जांच शिविर का आयोजन किया जाता है।यहां नेत्र रोगियों
              की नवीनतम तकनीक से जांच एवं उपचार कर उन्हें निःशुल्क चश्मे वितरित
              किए गए।
            </Text>
            <Text
              width={"100%"}
              fontFamily={"EkMukta"}
              textAlign={"end"}
              fontWeight={400}
              color={"black"}
              fontSize={{ base: "1rem", lg: "1.2rem" }}>
              नेत्र जांच के दौरान मोतियाबिंद से पीड़ित लोगों को ऑपरेशन हेतु उनकी
              सहमति लेकर अत्याधुनिक मशीनों से सुसज्जित अस्पताल भेजा जाता है,
              जहां उनका सफल ऑपरेशन एवं लेंस प्रत्यारोपण किया जाता है। इस दौरान
              ट्रस्ट द्वारा मरीजों को
            </Text>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        display={{ base: "flex", lg: "flex" }}
        position="relative"
        width="100%"
        bgImage={about_banner3}
        bgSize="cover"
        bgPosition="center"
        alignItems="center"
        flexDirection={"row"}
        justifyContent="space-between"
        py={10}
        margin={"auto"}>
        <Flex width={"80%"} margin={"auto"}>
          <Flex width={"50%"} flexDirection={"column"} gap={5}>
            <Text
              width={{ base: "100%", lg: "60%" }}
              className="epilogue-bold"
              fontWeight={"bold"}
              color={"#F56A02"}
              textAlign={{ base: "center", lg: "start" }}
              fontSize={{ base: "1.6rem", lg: "2rem" }}>
              नेत्र जांच शिविर एवं मोतियाबिंद ऑपरेशन :-
            </Text>
            <Text
              width={"100%"}
              fontFamily={"EkMukta"}
              fontWeight={400}
              textAlign={"start"}
              color={"black"}
              fontSize={{ base: "1rem", lg: "1.2rem" }}>
              जरूरतमंदों को आंखों का इलाज उपलब्ध करवाने हेतु ट्रस्ट की ओर से
              निःशुल्क नेत्र जांच शिविर का आयोजन किया जाता है।यहां नेत्र रोगियों
              की नवीनतम तकनीक से जांच एवं उपचार कर उन्हें निःशुल्क चश्मे वितरित
              किए गए।
            </Text>
            <Text
              width={"100%"}
              fontFamily={"EkMukta"}
              textAlign={"start"}
              fontWeight={400}
              color={"black"}
              fontSize={{ base: "1rem", lg: "1.2rem" }}>
              नेत्र जांच के दौरान मोतियाबिंद से पीड़ित लोगों को ऑपरेशन हेतु उनकी
              सहमति लेकर अत्याधुनिक मशीनों से सुसज्जित अस्पताल भेजा जाता है,
              जहां उनका सफल ऑपरेशन एवं लेंस प्रत्यारोपण किया जाता है। इस दौरान
              ट्रस्ट द्वारा मरीजों को
            </Text>
          </Flex>
          <Box width={"50%"}>
            <Image
              height={"100%"}
              width={"70%"}
              margin={"auto"}
              src={slide1}
              alt="about2"
            />
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default About;
