import { Box, Text } from "@chakra-ui/react";
import big_banner from "../Assests/big_banner.png";
import "./header.css";
function Banner() {
  return (
    <Box
      display={{ base: "flex", lg: "flex" }}
      position="relative"
      width="100%"
      height="400px"
      bgImage={big_banner}
      bgSize="cover"
      bgPosition="center"
      alignItems="center"
      justifyContent="center">
      <Text
        width={{ base: "100%", lg: "50%" }}
        margin={"auto"}
        color="black"
        fontSize={"1.2rem"}
        fontFamily="EkMukta"
        textAlign="center"
        p="4">
        स्वर्गीय सुरेश सिंह फाउंडेशन® ट्रस्ट का उद्देश्य व्यक्तियों के बीच
        जागरूकता लाना एवं प्रचलित सामाजिक मुद्दों के समाधान हेतु उन्हें एक
        साथ खड़ा करना है।
      </Text>
    </Box>
  );
}

export default Banner;
