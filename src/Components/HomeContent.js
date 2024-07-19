import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import "./epilo.css";
import "./header.css";
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
import "./epilo.css";
import Water from "./DrinkingWater";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiper.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import img1 from "../Assests/Certificates/c1.jpg";
import img2 from "../Assests/Certificates/c2.jpeg";
import img3 from "../Assests/Certificates/c3.jpeg";
import img4 from "../Assests/Certificates/c4.jpeg";
import img5 from "../Assests/Certificates/c5.jpeg";
import img6 from "../Assests/Certificates/c6.jpeg";
import img7 from "../Assests/Certificates/c7.jpeg";
import img8 from "../Assests/Certificates/c8.jpeg";
import img9 from "../Assests/Certificates/c9.jpeg";
import img10 from "../Assests/Certificates/c10.jpeg";
import img11 from "../Assests/Certificates/c11.jpeg";
import img12 from "../Assests/Certificates/c12.jpeg";
import img13 from "../Assests/Certificates/c13.jpeg";
import img14 from "../Assests/Certificates/c14.jpeg";
import img15 from "../Assests/Certificates/c15.jpeg";
import img16 from "../Assests/Certificates/c16.jpeg";
import event1 from "../Assests/event/img1.JPG";
import event2 from "../Assests/event/img2.JPG";
import event3 from "../Assests/event/img3.JPG";
import event4 from "../Assests/event/img4.JPG";
import event5 from "../Assests/event/img5.JPG";
import event6 from "../Assests/event/img6.JPG";
import event7 from "../Assests/event/img7.JPG";
import event8 from "../Assests/event/img8.JPG";
import event9 from "../Assests/event/img9.JPG";
import event10 from "../Assests/event/img10.JPG";
import event11 from "../Assests/event/img11.JPG";
import event12 from "../Assests/event/img12.JPG";
import event13 from "../Assests/event/img13.JPG";
import event14 from "../Assests/event/img14.JPG";
import event15 from "../Assests/event/img15.JPG";
import event16 from "../Assests/event/img16.JPG";
import Latest from "../Assests/latest.png";
const imagesCertificate = [
  [img1, img2, img3, img4],
  [img5, img6, img7, img8],
  [img9, img10, img11, img12],
  [img13, img14, img15, img16],
];
const imagesEvent = [
  [event1, event2, event3, event4],
  [event5, event6, event7, event8],
  [event9, event10, event11, event12],
  [event13, event14, event15, event16],
];
const FlexItem = ({ bg, image, text }) => (
  <Flex
    background={bg}
    height={{ base: "280px", lg: "280px" }}
    borderRadius={"md"}
    flexDirection={"column"}
    alignItems={"center"}
    justifyContent={"center"}
    overflow={"hidden"}>
    <Box>
      <Image height={32} src={image} alt={text} />
    </Box>
    <Box>
      <Text
        width={"100%"}
        px={1}
        textAlign={"center"}
        margin={"auto"}
        fontFamily={"EkMukta"}
        fontWeight={600}
        color={"#FFFFFF"}
        fontSize={"1.3rem"}>
        {text}
      </Text>
    </Box>
  </Flex>
);

const HomeContent = () => {
  return (
    <>
      <Flex flexDirection={"column"} mt={-1} mb={20}>
        <Flex width={"100%"} bgGradient="linear(to-r, #ffda91, white)">
          <Grid
            templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(6, 1fr)" }}
            gap={{ base: 10, lg: 5 }}
            width={{ base: "60%", lg: "80%" }}
            margin={"auto"}
            alignItems={"center"}
            justifyContent={"space-between"}>
            <FlexItem
              bg={"#207FB7"}
              image={doctor}
              text="निःशुल्क स्वास्थ्य जांच"
            />
            <FlexItem
              bg={"#DB0C22"}
              image={eye}
              text="निःशुल्क मोतियाबिंद ऑपरेशन"
            />
            <FlexItem
              bg={"#08B749"}
              image={cycles}
              text="तिपहिया साइकिल वितरण"
            />
            <FlexItem
              bg={"#FFA800"}
              image={mach}
              text="किसान भाइयों को तकनीकी यंत्र वितरण"
            />
            <FlexItem
              bg={"#3F00C0"}
              image={machine}
              text="महिला को सिलाई मशीन वितरण"
            />
            <FlexItem
              bg={"#FF5800"}
              image={marathon}
              text="छात्र-छात्राओं की दौड़ स्पर्धा"
            />
          </Grid>
        </Flex>

        <Flex
          width={"100%"}
          boxShadow="2xl"
          background={"#F0F0F0"}
          alignItems={"center"}
          py={4}>
          <Image width={{ base: "30%", lg: "12%" }} src={Latest} alt="latest" />
        </Flex>
        <Water />

        {/* text */}
        <Flex
          width={{ base: "90%", lg: "80%" }}
          margin={"auto"}
          flexDirection={"column"}
          gap={10}
          mt={20}>
          <Flex
            width={{ base: "100%", lg: "80%" }}
            margin={"auto"}
            flexDirection={"row"}
            alignItems={"center"}
            mb={6}>
            <Text
              textAlign={"center"}
              className="epilogue-bold"
              color={"#F56A02"}
              fontSize={{ base: "1rem", lg: "2.8rem" }}>
              स्वर्गीय सुरेश सिंह फाउंडेशन ट्रस्ट बिहार राज्य के बिहटा क्षेत्र
              के लई ग्राम में स्थित एक गैर-लाभकारी संगठन है।{" "}
            </Text>
            <Box
              width={"15%"}
              mt={12}
              ml={-24}
              display={{ base: "none", lg: "flex" }}>
              <Image width={"100%"} height={"100%"} src={line} alt="line" />
            </Box>
          </Flex>

          <Flex
            display={{ base: "none", lg: "flex" }}
            width={"100%"}
            margin={"auto"}
            flexDirection={"row"}
            justifyContent={"center"}>
            <Flex flexDirection={"column"} width={"50%"}>
              <Box>
                <Image width={"100%"} height={"100%"} src={cycle} alt="cycle" />
              </Box>
              <Box background={"#F56A02"} py={12} px={12} borderRadius={"md"}>
                <Text
                  color={"white"}
                  fontSize={"1.2rem"}
                  fontFamily={"EkMukta"}
                  fontWeight={400}>
                  महिलाओ को आत्मनिर्भर बनाने हेतु सिलाई मशीन का वितरण, ग्रामीण
                  महिलाओं को आत्मनिर्भर बनाने हेतु आर्थिक सहायता राशि एवं
                  ग्रामीण बहन-बेटियों को विवाहोत्सव पर आत्मनिर्भर एवं सशक्त बनने
                  हेतु जरुरत स्वरूप सामग्री भेंट।
                </Text>
              </Box>
              <Box mt={4}>
                <Image width={"100%"} height={"100%"} src={run} alt="run" />
              </Box>
              <Box
                background={"#207FB7"}
                py={12}
                px={12}
                borderRadius={"md"}
                mt={5}>
                <Text
                  color={"white"}
                  fontSize={"1.2rem"}
                  fontFamily={"EkMukta"}
                  fontWeight={400}>
                  प्रदूषण की समस्या को दूर करने हेतु वृक्षारोपण, फोफिंग मशीन
                  वितरण, सुगम आवागमन हेतु चौक-चौराहों पर LED की व्यवस्था, किसान
                  भाइयों को उनके फसलों एवं पौधों को बिमारियों से सुरक्षा हेतु
                  स्वचालित कृषि यंत्रों का वितरण, धार्मिक कार्य हेतु ग्रामीणों
                  को मिले शुद्ध इसके लिए बोरवेल की व्यवस्था की गई, कोरोना
                  महामारी के समय सैनिटाइजर मशीन व स्टैण्ड वितरण एवं स्वo सुरेश
                  सिंह ग्रामीण रात्रि क्रिकेट टूर्नामेंट का आयोजन।
                </Text>
              </Box>
            </Flex>
            <Flex flexDirection={"column"} width={"50%"}>
              <Box
                background={"#08B749"}
                py={8}
                px={10}
                borderRadius={"md"}
                mt={20}>
                <Text
                  color={"white"}
                  fontSize={"1.2rem"}
                  fontFamily={"EkMukta"}
                  fontWeight={400}>
                  यह संगठन छात्रों, युवाओं और महिलाओं को सशक्त बनाकर समृद्ध समाज
                  बनाने हेतु कार्य करता है। इसके लिए ट्रस्ट समाज से जुड़े कई
                  कार्य कर रहा है। जैसे – दिव्यांग्जनों को आवागमन हेतु तिपहिया
                  साईकिल का वितरण, जरुरतमंदों को अंग वस्त्र और कम्बल वितरण,
                  निःशुल्क स्वास्थ्य जांच शिविर का आयोजन जिसमें कई तरह के जांच
                  किये जाते है, दवा वितरण, निःशुल्क नेत्र जांच, चश्मा वितरण,
                  अस्पताल में निःशुल्क मोतियाबिन्द ऑपरेशन।
                </Text>
              </Box>
              <Box>
                <Image width={"100%"} height={"100%"} src={cloth} alt="cloth" />
              </Box>
              <Box background={"#FFA800"} py={8} px={10} borderRadius={"md"}>
                <Text
                  color={"black"}
                  fontSize={"1.2rem"}
                  fontFamily={"EkMukta"}
                  fontWeight={400}>
                  जरूरतमन्द विद्यार्थियों (कक्षा 10th व 14th) को पंजीकरण हेतु
                  सहायता राशि, लेखन सामग्री, ग्रामीण विद्यालय में प्यूरीफायर
                  संयंत्र / आर० ओ०, पटना एथलेटिक्स संघ की निगरानी में
                  छात्र-छात्राओं की दौड़-स्पर्धा एवं स्वo सुरेश सिंह ग्रामीण
                  रात्रि क्रिकेट टूर्नामेंट का आयोजन, ग्रामीण मेधावी
                  छात्र-छात्राओं को गुणवत्तापूर्ण तकनीकी शिक्षा अध्ययन हेतु
                  लैपटॉप (कंप्यूटर) वितरण, आजीविका अर्जित कर परिवार का भरण-पोषण
                  करने हेतु व्यावसायिक वाहन (ऑटो रिक्शा) वितरण।
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
            width={"100%"}
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
                यह संगठन छात्रों, युवाओं और महिलाओं को सशक्त बनाकर समृद्ध समाज
                बनाने हेतु कार्य करता है। इसके लिए ट्रस्ट समाज से जुड़े कई कार्य
                कर रहा है। जैसे – दिव्यांग्जनों को आवागमन हेतु तिपहिया साईकिल का
                वितरण, जरुरतमंदों को अंग वस्त्र और कम्बल वितरण, निःशुल्क
                स्वास्थ्य जांच शिविर का आयोजन जिसमें कई तरह के जांच किये जाते
                है, दवा वितरण, निःशुल्क नेत्र जांच, चश्मा वितरण, अस्पताल में
                निःशुल्क मोतियाबिन्द ऑपरेशन।
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
                महिलाओ को आत्मनिर्भर बनाने हेतु सिलाई मशीन का वितरण, ग्रामीण
                महिलाओं को आत्मनिर्भर बनाने हेतु आर्थिक सहायता राशि एवं ग्रामीण
                बहन-बेटियों को विवाहोत्सव पर आत्मनिर्भर एवं सशक्त बनने हेतु
                जरुरत स्वरूप सामग्री भेंट।
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
                जरूरतमन्द विद्यार्थियों (कक्षा 10th व 14th) को पंजीकरण हेतु
                सहायता राशि, लेखन सामग्री, ग्रामीण विद्यालय में प्यूरीफायर
                संयंत्र / आर० ओ०, पटना एथलेटिक्स संघ की निगरानी में
                छात्र-छात्राओं की दौड़-स्पर्धा एवं स्वo सुरेश सिंह ग्रामीण
                रात्रि क्रिकेट टूर्नामेंट का आयोजन, ग्रामीण मेधावी
                छात्र-छात्राओं को गुणवत्तापूर्ण तकनीकी शिक्षा अध्ययन हेतु लैपटॉप
                (कंप्यूटर) वितरण, आजीविका अर्जित कर परिवार का भरण-पोषण करने हेतु
                व्यावसायिक वाहन (ऑटो रिक्शा) वितरण।
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
                प्रदूषण की समस्या को दूर करने हेतु वृक्षारोपण, फोफिंग मशीन
                वितरण, सुगम आवागमन हेतु चौक-चौराहों पर LED की व्यवस्था, किसान
                भाइयों को उनके फसलों एवं पौधों को बिमारियों से सुरक्षा हेतु
                स्वचालित कृषि यंत्रों का वितरण, धार्मिक कार्य हेतु ग्रामीणों को
                मिले शुद्ध इसके लिए बोरवेल की व्यवस्था की गई, कोरोना महामारी के
                समय सैनिटाइजर मशीन व स्टैण्ड वितरण एवं स्वo सुरेश सिंह ग्रामीण
                रात्रि क्रिकेट टूर्नामेंट का आयोजन।
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Flex>

      {/* <Flex
        bgGradient="linear(to-r, #b2ebcb, #ebfafa,#edfafc,#edf9fa)"
        flexDirection={"column"}
        py={6}
        mb={20}
      >
        <Box width={"80%"} margin={"auto"} mb={10}>
          <Flex justifyContent={"space-between"} padding={4}>
            <Flex
              alignItems={"center"}
              justifyContent={"center"}
              width={{ base: "100%", lg: "90%" }}
              paddingLeft={{ base: 0, lg: 20 }}
            >
              <Text
                color={"#F56A02"}
                className="epilogue-bold"
                fontSize={{ base: "1.8rem", lg: "3rem" }}
                fontWeight={800}
              >
                Event Gallery
              </Text>
              <Box display={{ base: "none", lg: "flex" }} mt={2}>
                <Image width={"100%"} height={"100%"} src={line} alt="line" />
              </Box>
            </Flex>
            <Flex
              width={"10%"}
              alignItems={"center"}
              justifyContent={"flex-end"}
              display={{ base: "none", lg: "flex" }}
            >
              <Box className="swiper-pagination" />
            </Flex>
          </Flex>

          <Swiper
            spaceBetween={50}
            centeredSlides={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
              type: "bullets",
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {imagesEvent.map((slideImages, index) => (
              <SwiperSlide key={index} style={{ background: "transparent" }}>
                <Flex
                  flexDirection={{ base: "column", lg: "row" }}
                  gap={6}
                  width="100%"
                >
                  {slideImages.map((img, imgIndex) => (
                    <Box
                      key={imgIndex}
                      width={{ base: "100%", lg: "25%" }}
                      background="#FFFFFF"
                      border="1px solid #d9dcde"
                      rounded="md"
                      py={2}
                      px={2}
                      boxShadow="md"
                      height={330}
                    >
                      <Image
                        src={img}
                        alt={`img${imgIndex + 1}`}
                        width="100%"
                        height="auto"
                      />
                    </Box>
                  ))}
                </Flex>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Flex>

      <Flex background={"#FFFAE1"} flexDirection={"column"} py={6} mb={20}>
        <Box width={"80%"} margin={"auto"} mb={10}>
          <Flex justifyContent={"space-between"} padding={4}>
            <Flex
              alignItems={"center"}
              justifyContent={"center"}
              width={{ base: "100%", lg: "90%" }}
              paddingLeft={{ base: 0, lg: 20 }}
            >
              <Text
                color={"#F56A02"}
                className="epilogue-bold"
                fontSize={{ base: "1.8rem", lg: "3rem" }}
                fontWeight={800}
              >
                Our Certificates
              </Text>
              <Box display={{ base: "none", lg: "flex" }} mt={2}>
                <Image width={"100%"} height={"100%"} src={line} alt="line" />
              </Box>
            </Flex>
            <Flex
              width={"10%"}
              alignItems={"center"}
              justifyContent={"flex-end"}
              display={{ base: "none", lg: "flex" }}
            >
              <Box className="swiper-pagination" />
            </Flex>
          </Flex>

          <Swiper
            spaceBetween={50}
            centeredSlides={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
              type: "bullets",
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {imagesCertificate.map((slideImages, index) => (
              <SwiperSlide key={index} style={{ background: "transparent" }}>
                <Flex
                  flexDirection={{ base: "column", lg: "row" }}
                  gap={6}
                  width="100%"
                >
                  {slideImages.map((img, imgIndex) => (
                    <Box
                      key={imgIndex}
                      width={{ base: "100%", lg: "25%" }}
                      background="#FFFFFF"
                      border="1px solid #d9dcde"
                      rounded="md"
                      py={2}
                      px={2}
                      boxShadow="md"
                      height={330}
                    >
                      <Image
                        src={img}
                        alt={`img${imgIndex + 1}`}
                        width="100%"
                        height="auto"
                      />
                    </Box>
                  ))}
                </Flex>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Flex> */}
    </>
  );
};

export default HomeContent;
