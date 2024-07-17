import { Box, Flex, Image, Text } from "@chakra-ui/react";
import "./epilo.css";
import line from "../Assests/line.png";
import cycle from "../Assests/cycle.png";
import run from "../Assests/run.png";
import cloth from "../Assests/cloth.png";
import led from "../Assests/led.png";
import contact from "../Assests/contact_logo.png";
import doctor from "../Assests/doctor.png";
import eye from "../Assests/eye.png";
import marathon from "../Assests/marathon.png";
import cycles from "../Assests/cycles.png";
import mach from "../Assests/mach.png";
import machine from "../Assests/machine.png";

import "./header.css";

const HomeFirst = () => {
  return (
    <Flex flexDirection={"column"} gap={10}>
      <Flex
        flexDirection={{ base: "column", lg: "row" }}
        width={"80%"}
        margin={"auto"}
        justifyContent={"space-between"}
        alignItems={"center"}
        gap={4}>
        <Flex
          background={"#207FB7"}
          width={{ base: "150px", lg: "200px" }}
          height={{ base: "180px", lg: "200px" }}
          borderRadius={"md"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          overflow={"hidden"}>
          <Box>
            <Image height={20} src={doctor} alt="doctor" />
          </Box>
          <Box>
            <Text
              width={"90%"}
              textAlign={"center"}
              margin={"auto"}
              fontFamily={"EkMukts"}
              fontWeight={700}
              color={"#FFFFFF"}>
              निःशुल्क स्वास्थ्य जांच
            </Text>
          </Box>
        </Flex>

        <Flex
          background={"#DB0C22"}
          //   py={4}
          width={{ base: "150px", lg: "200px" }}
          height={{ base: "180px", lg: "200px" }}
          borderRadius={"md"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          overflow={"hidden"}>
          <Box>
            <Image height={20} src={eye} alt="eye" />
          </Box>
          <Box>
            <Text
              width={"90%"}
              textAlign={"center"}
              margin={"auto"}
              fontFamily={"EkMukts"}
              fontWeight={700}
              color={"#FFFFFF"}>
              निःशुल्क मोतियाबिंद ऑपरेशन
            </Text>
          </Box>
        </Flex>

        <Flex
          background={"#08B749"}
          //   py={4}
          width={{ base: "150px", lg: "200px" }}
          height={{ base: "180px", lg: "200px" }}
          borderRadius={"md"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          overflow={"hidden"}>
          <Box>
            <Image height={20} src={cycles} alt="cycles" />
          </Box>
          <Box>
            <Text
              width={"90%"}
              textAlign={"center"}
              margin={"auto"}
              fontFamily={"EkMukts"}
              fontWeight={700}
              color={"#FFFFFF"}>
              तिपहिया साइकिल वितरण
            </Text>
          </Box>
        </Flex>

        <Flex
          background={"#FFA800"}
          width={{ base: "150px", lg: "200px" }}
          height={{ base: "180px", lg: "200px" }}
          borderRadius={"md"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          overflow={"hidden"}>
          <Box>
            <Image height={20} src={mach} alt="mach" />
          </Box>
          <Box>
            <Text
              width={"90%"}
              textAlign={"center"}
              margin={"auto"}
              fontFamily={"EkMukts"}
              fontWeight={700}
              color={"#FFFFFF"}>
              किसान भाइयों को तकनीकी यंत्र वितरण
            </Text>
          </Box>
        </Flex>

        <Flex
          background={"#3F00C0"}
          width={{ base: "150px", lg: "200px" }}
          height={{ base: "180px", lg: "200px" }}
          borderRadius={"md"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          overflow={"hidden"}>
          <Box>
            <Image height={20} src={machine} alt="machine" />
          </Box>
          <Box>
            <Text
              width={"90%"}
              textAlign={"center"}
              margin={"auto"}
              fontFamily={"EkMukts"}
              fontWeight={700}
              color={"#FFFFFF"}>
              महिला को सिलाई मशीन वितरण
            </Text>
          </Box>
        </Flex>

        <Flex
          background={"#FF5800"}
          width={{ base: "150px", lg: "200px" }}
          height={{ base: "180px", lg: "200px" }}
          borderRadius={"md"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          overflow={"hidden"}>
          <Box>
            <Image height={20} src={marathon} alt="marathon" />
          </Box>
          <Box>
            <Text
              width={"90%"}
              textAlign={"center"}
              margin={"auto"}
              fontFamily={"EkMukts"}
              fontWeight={700}
              color={"#FFFFFF"}>
              छात्र-छात्राओं  की दौड़ स्पर्धा
            </Text>
          </Box>
        </Flex>
      </Flex>

      {/* text */}
      <Flex
        width={{ base: "90%", lg: "60%" }}
        margin={"auto"}
        flexDirection={"row"}
        alignItems={"center"}>
        <Text
          textAlign={"center"}
          className="epilogue-bold"
          color={"#F56A02"}
          fontSize={{ base: "0.9rem", lg: "2rem" }}>
          स्वर्गीय सुरेश सिंह फाउंडेशन ट्रस्ट बिहार राज्य के बिहटा क्षेत्र के लई
          ग्राम में स्थित एक गैर-लाभकारी संगठन है।{" "}
        </Text>
        <Box
          width={"15%"}
          mt={10}
          ml={-6}
          display={{ base: "none", lg: "flex" }}>
          <Image width={"100%"} height={"100%"} src={line} alt="line" />
        </Box>
      </Flex>

      {/* big screen */}
      <Flex
        display={{ base: "none", lg: "flex" }}
        width={"80%"}
        margin={"auto"}
        flexDirection={"row"}
        justifyContent={"center"}>
        <Flex flexDirection={"column"} width={"50%"}>
          <Box>
            <Image width={"100%"} height={"100%"} src={cycle} alt="cycle" />
          </Box>
          <Box background={"#F56A02"} py={6} px={8} borderRadius={"md"}>
            <Text
              color={"white"}
              fontSize={15}
              fontFamily={"EkMukta"}
              fontWeight={400}>
              महिलाओ को आत्मनिर्भर बनाने हेतु सिलाई मशीन का वितरण, ग्रामीण
              महिलाओं को आत्मनिर्भर बनाने हेतु आर्थिक सहायता राशि एवं ग्रामीण
              बहन-बेटियों को विवाहोत्सव पर आत्मनिर्भर एवं सशक्त बनने हेतु जरुरत
              स्वरूप सामग्री भेंट।
            </Text>
          </Box>
          <Box>
            <Image width={"100%"} height={"100%"} src={run} alt="run" />
          </Box>
          <Box background={"#207FB7"} py={6} px={8} borderRadius={"md"} mt={5}>
            <Text
              color={"white"}
              fontSize={15}
              fontFamily={"EkMukta"}
              fontWeight={400}>
              प्रदूषण की समस्या को दूर करने हेतु वृक्षारोपण, फोफिंग मशीन वितरण,
              सुगम आवागमन हेतु चौक-चौराहों पर LED की व्यवस्था, किसान भाइयों को
              उनके फसलों एवं पौधों को बिमारियों से सुरक्षा हेतु स्वचालित कृषि
              यंत्रों का वितरण, धार्मिक कार्य हेतु ग्रामीणों को मिले शुद्ध इसके
              लिए बोरवेल की व्यवस्था की गई, कोरोना महामारी के समय सैनिटाइजर मशीन
              व स्टैण्ड वितरण एवं स्वo सुरेश सिंह ग्रामीण रात्रि क्रिकेट
              टूर्नामेंट का आयोजन।
            </Text>
          </Box>
        </Flex>
        <Flex
          flexDirection={"column"}
          width={"40%"}
          alignItems={"center"}
          justifyContent={"center"}>
          <Box background={"#08B749"} py={6} px={7} borderRadius={"md"} mt={14}>
            <Text
              color={"white"}
              fontSize={15}
              fontFamily={"EkMukta"}
              fontWeight={400}>
              यह संगठन छात्रों, युवाओं और महिलाओं को सशक्त बनाकर समृद्ध समाज
              बनाने हेतु कार्य करता है। इसके लिए ट्रस्ट समाज से जुड़े कई कार्य कर
              रहा है। जैसे – दिव्यांग्जनों को आवागमन हेतु तिपहिया साईकिल का
              वितरण, जरुरतमंदों को अंग वस्त्र और कम्बल वितरण, निःशुल्क स्वास्थ्य
              जांच शिविर का आयोजन जिसमें कई तरह के जांच किये जाते है, दवा वितरण,
              निःशुल्क नेत्र जांच, चश्मा वितरण, अस्पताल में निःशुल्क
              मोतियाबिन्द ऑपरेशन।
            </Text>
          </Box>
          <Box>
            <Image width={"100%"} height={"100%"} src={cloth} alt="cloth" />
          </Box>
          <Box background={"#FFA800"} py={6} px={7} borderRadius={"md"}>
            <Text
              color={"black"}
              fontSize={15}
              fontFamily={"EkMukta"}
              fontWeight={400}>
              जरूरतमन्द विद्यार्थियों (कक्षा 10th व 14th) को पंजीकरण हेतु सहायता
              राशि, लेखन सामग्री, ग्रामीण विद्यालय में प्यूरीफायर संयंत्र / आर०
              ओ०, पटना एथलेटिक्स संघ की निगरानी में छात्र-छात्राओं की
              दौड़-स्पर्धा एवं स्वo सुरेश सिंह ग्रामीण रात्रि क्रिकेट टूर्नामेंट
              का आयोजन, ग्रामीण मेधावी छात्र-छात्राओं को गुणवत्तापूर्ण तकनीकी
              शिक्षा अध्ययन हेतु लैपटॉप (कंप्यूटर) वितरण, आजीविका अर्जित कर
              परिवार का भरण-पोषण करने हेतु व्यावसायिक वाहन (ऑटो रिक्शा) वितरण।
            </Text>
          </Box>
          <Box>
            <Image width={"100%"} height={"100%"} src={led} alt="led" />
          </Box>
        </Flex>
      </Flex>

      {/* small screen */}

      <Flex
        display={{ base: "flex", lg: "none" }}
        width={"90%"}
        margin={"auto"}
        flexDirection={"column"}
        justifyContent={"center"}
        gap={2}>
        <Box>
          <Image width={"100%"} height={"100%"} src={cycle} alt="cycle" />
        </Box>
        <Box background={"#08B749"} py={4} px={6} borderRadius={"md"}>
          <Text
            color={"white"}
            fontSize={14}
            fontFamily={"EkMukta"}
            fontWeight={400}>
            यह संगठन छात्रों, युवाओं और महिलाओं को सशक्त बनाकर समृद्ध समाज बनाने
            हेतु कार्य करता है। इसके लिए ट्रस्ट समाज से जुड़े कई कार्य कर रहा है।
            जैसे – दिव्यांग्जनों को आवागमन हेतु तिपहिया साईकिल का वितरण,
            जरुरतमंदों को अंग वस्त्र और कम्बल वितरण, निःशुल्क स्वास्थ्य जांच
            शिविर का आयोजन जिसमें कई तरह के जांच किये जाते है, दवा वितरण,
            निःशुल्क नेत्र जांच, चश्मा वितरण, अस्पताल में निःशुल्क
            मोतियाबिन्द ऑपरेशन।
          </Text>
        </Box>
        <Box height={160}>
          <Image width={"100%"} height={"100%"} src={cloth} alt="cloth" />
        </Box>
        <Box background={"#F56A02"} py={4} px={6} borderRadius={"md"}>
          <Text
            color={"white"}
            fontSize={14}
            fontFamily={"EkMukta"}
            fontWeight={400}>
            महिलाओ को आत्मनिर्भर बनाने हेतु सिलाई मशीन का वितरण, ग्रामीण महिलाओं
            को आत्मनिर्भर बनाने हेतु आर्थिक सहायता राशि एवं ग्रामीण बहन-बेटियों
            को विवाहोत्सव पर आत्मनिर्भर एवं सशक्त बनने हेतु जरुरत
            स्वरूप सामग्री भेंट।
          </Text>
        </Box>
        <Box height={160}>
          <Image width={"100%"} height={"100%"} src={run} alt="run" />
        </Box>
        <Box background={"#FFA800"} py={4} px={6} borderRadius={"md"}>
          <Text
            color={"black"}
            fontSize={14}
            fontFamily={"EkMukta"}
            fontWeight={400}>
            जरूरतमन्द विद्यार्थियों (कक्षा 10th व 14th) को पंजीकरण हेतु सहायता
            राशि, लेखन सामग्री, ग्रामीण विद्यालय में प्यूरीफायर संयंत्र / आर०
            ओ०, पटना एथलेटिक्स संघ की निगरानी में छात्र-छात्राओं की दौड़-स्पर्धा
            एवं स्वo सुरेश सिंह ग्रामीण रात्रि क्रिकेट टूर्नामेंट का आयोजन,
            ग्रामीण मेधावी छात्र-छात्राओं को गुणवत्तापूर्ण तकनीकी शिक्षा अध्ययन
            हेतु लैपटॉप (कंप्यूटर) वितरण, आजीविका अर्जित कर परिवार का भरण-पोषण
            करने हेतु व्यावसायिक वाहन (ऑटो रिक्शा) वितरण।
          </Text>
        </Box>
        <Box height={150}>
          <Image width={"100%"} height={"100%"} src={led} alt="led" />
        </Box>
        <Box background={"#207FB7"} py={4} px={6} borderRadius={"md"}>
          <Text
            color={"white"}
            fontSize={14}
            fontFamily={"EkMukta"}
            fontWeight={400}>
            प्रदूषण की समस्या को दूर करने हेतु वृक्षारोपण, फोफिंग मशीन वितरण,
            सुगम आवागमन हेतु चौक-चौराहों पर LED की व्यवस्था, किसान भाइयों को
            उनके फसलों एवं पौधों को बिमारियों से सुरक्षा हेतु स्वचालित कृषि
            यंत्रों का वितरण, धार्मिक कार्य हेतु ग्रामीणों को मिले शुद्ध इसके
            लिए बोरवेल की व्यवस्था की गई, कोरोना महामारी के समय सैनिटाइजर मशीन व
            स्टैण्ड वितरण एवं स्वo सुरेश सिंह ग्रामीण रात्रि क्रिकेट
            टूर्नामेंट का आयोजन।
          </Text>
        </Box>
      </Flex>

      {/* above footer */}
      {/* <Flex width={"50%"} marginRight={0} border={"1px solid red"}>
        <Box>
          <Image height={"80%"} width={"50%"} src={contact} alt="contack" />
        </Box>
      </Flex> */}
    </Flex>
  );
};

export default HomeFirst;
