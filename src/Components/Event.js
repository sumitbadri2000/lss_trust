import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiper.css"

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import img1 from "../Assests/event/img1.JPG";
import img2 from "../Assests/event/img2.JPG";
import img3 from "../Assests/event/img3.JPG";
import img4 from "../Assests/event/img4.JPG";
import img5 from "../Assests/event/img5.JPG";
import img6 from "../Assests/event/img6.JPG";
import img7 from "../Assests/event/img7.JPG";
import img8 from "../Assests/event/img8.JPG";
import img9 from "../Assests/event/img9.JPG";
import img10 from "../Assests/event/img10.JPG";
import img11 from "../Assests/event/img11.JPG";
import img12 from "../Assests/event/img12.JPG";
import img13 from "../Assests/event/img13.JPG";
import img14 from "../Assests/event/img14.JPG";
import img15 from "../Assests/event/img15.JPG";
import img16 from "../Assests/event/img16.JPG";
import line from "../Assests/line.png";
import "./epilo.css";
const images = [
  [img1, img2, img3, img4],
  [img5, img6, img7, img8],
  [img9, img10, img11, img12],
  [img13, img14, img15, img16],
];
export default function Events() {
  return (
    <Flex
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
          {images.map((slideImages, index) => (
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
  );
}
