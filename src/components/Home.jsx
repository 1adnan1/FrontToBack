import {
  Box,
  Container,
  Heading,
  Image,
  Stack,
  Text,
  Icon,
  keyframes,
} from "@chakra-ui/react";
import React , { useRef } from "react";
import { Carousel } from "react-responsive-carousel";
import { FaArrowDown } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";

const headingOptions = {
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  textTransform: "uppercase",
  padding: "4",
  textAlign: "center",
  width: "80%",
  
};

// Bounce animation
const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(10px); }
`;

const DownArrow = () => (
  <Box
    position="absolute"
    bottom="8"
    left="50%"
    transform="translateX(-50%)"
    animation={`${bounce} 2s infinite`}
    zIndex="overlay"
  >
    <Icon as={FaArrowDown} w={8} h={8} color="gray.600" />
  </Box>
);

const Home = () => {
  const servicesRef = useRef(null); // Reference to scroll target

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box>
      <Box position="relative">
        <MyCarousel onArrowClick={scrollToServices} />
      </Box>

      <Container ref={servicesRef} maxW={"container.lg"} minH={"100vh"} p={"16"}>
        <Heading
          textTransform={"uppercase"}
          py={"2"}
          w={"fit-content"}
          borderBottom={"2px solid"}
          m={"auto"}
          mb={"5"}
        >
          Services
        </Heading>
        <Stack h={"full"} alignItems={"center"} direction={["column", "row"]}>
          <Image h={["40", "400"]} src={img5} />
          <Text
            letterSpacing="wide"
            lineHeight="180%"
            px={[4, 16]}
            py={[4, 8]}
            textAlign="justify"
            fontSize={["md", "lg"]}
          >
            FrontToBack is a comprehensive learning platform designed to help
            you master web development — from the fundamentals of frontend
            design to the complexities of backend engineering. Whether you're
            just beginning your coding journey or advancing toward full-stack
            development, FrontToBack offers structured video lectures, hands-on
            tutorials, and real-world projects tailored to help you grow with
            confidence. Our mission is simple: to make high-quality, accessible
            web development education available to everyone. With expert-led
            content and a user-friendly experience, FrontToBack is your go-to
            destination for building real skills — from start to finish.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = ({ onArrowClick }) => {
  const bounce = keyframes`
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(10px); }
  `;

  return (
    <Box>
      <Carousel
        autoPlay
        infiniteLoop
        interval={3000}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
        emulateTouch
        transitionTime={800}
      >
        {[img1, img2, img3, img4].map((img, index) => (
          <Box key={index} w="full" h="100vh" position="relative">
            <Image src={img} objectFit="contain" w="100%" h="auto" />
            <Heading {...headingOptions} bgColor="blackAlpha.600" color="white">
              {[
                "Master Frontend Development",
                "Backend Engineering Essentials",
                "AI & Data Science Bootcamp",
                "DevOps and Cloud Mastery",
              ][index]}
            </Heading>
          </Box>
        ))}
      </Carousel>

      {/* Down Arrow */}
      <Box
        position="absolute"
        bottom="6"
        left="50%"
        transform="translateX(-50%)"
        animation={`${bounce} 2s infinite`}
        cursor="pointer"
        zIndex="overlay"
        onClick={onArrowClick}
      >
        <Icon as={FaArrowDown} w={8} h={8} color="gray.600" />
      </Box>
    </Box>
  );
};
export default Home;