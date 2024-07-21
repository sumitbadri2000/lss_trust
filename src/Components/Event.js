import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiper.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import img1 from "../Assests/Final_Events/1.JPG";
import img2 from "../Assests/Final_Events/2.jpeg";
import img3 from "../Assests/Final_Events/3.jpeg";
import img4 from "../Assests/Final_Events/4.JPG";
import img41 from "../Assests/Final_Events/4A.JPG";
import img42 from "../Assests/Final_Events/4B.JPG";
import img5 from "../Assests/Final_Events/5.jpg";
import img6 from "../Assests/Final_Events/6.JPG";
import img61 from "../Assests/Final_Events/6A.JPG";
import img62 from "../Assests/Final_Events/6B.JPG";
import img63 from "../Assests/Final_Events/6C.jpeg";
import img7 from "../Assests/Final_Events/7.jpg";
import img8 from "../Assests/Final_Events/8.jpeg";
import img9 from "../Assests/Final_Events/9.jpeg";
import img10 from "../Assests/Final_Events/10.JPG";
import img11 from "../Assests/Final_Events/11.JPG";
import line from "../Assests/line.png";
import "./epilo.css";
const images = [
  [img1, img2, img3, img4],
  [img41, img42, img5, img6],
  [img61, img62, img63, img7],
  [img8, img9, img10, img11],
];
export default function Events() {
  return (
    <Flex
      bgGradient="linear(to-r, #b2ebcb, #ebfafa,#edfafc,#edf9fa)"
      flexDirection={"column"}
      py={6}
      mb={20}>
      <Box width={"80%"} margin={"auto"} mb={10}>
        <Flex justifyContent={"space-between"} padding={4}>
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            width={{ base: "100%", lg: "90%" }}
            paddingLeft={{ base: 0, lg: 20 }}>
            <Text
              color={"#F56A02"}
              className="epilogue-bold"
              fontSize={{ base: "1.8rem", lg: "3rem" }}
              fontWeight={800}>
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
            display={{ base: "none", lg: "flex" }}>
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
          className="mySwiper">
          {images.map((slideImages, index) => (
            <SwiperSlide key={index} style={{ background: "transparent" }}>
              <Flex
                flexDirection={{ base: "column", lg: "row" }}
                gap={6}
                width="100%">
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
                    height={300}>
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
  );
}
