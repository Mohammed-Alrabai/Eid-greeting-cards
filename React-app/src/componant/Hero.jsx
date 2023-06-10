import React, { forwardRef } from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Flex,
  IconButton,
  Heading,
  Button,
  Stack,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import bgHero from "../assets/img/8941966.svg";
import { useNavigate } from "react-router-dom";

const Hero = forwardRef((props, ref) => {
  const navigate = useNavigate();
  const bg = useColorModeValue("white", "gray.800");

  const handleClick = () => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <chakra.header bg={"#310752"}>
      <Box
        w="full"
        h="100vh"
        backgroundImage={bgHero}
        bgPos="center"
        bgSize="cover">
        <Flex
          align="center"
          pos="relative"
          justify="left"
          w="full"
          ml={"auto"}
          pl={"6rem"}
          boxSize="full">
          <Stack textAlign="center" alignItems="center" spacing={6}>
            <Heading
              fontSize={["4xl", , "6xl"]}
              fontWeight="semibold"
              color="white"
              lineHeight={1.8}
              textTransform="uppercase">
              عيد اضحى مبارك
              <chakra.span color="#b87ccf" textDecor="">
                <br />
                وكل عام وانتم بخير
              </chakra.span>
            </Heading>
            <Button
              bg={"#b87ccf"}
              textTransform="uppercase"
              w="fit-content"
              _hover={{ bg: "#b054d4" }}
              onClick={handleClick}>
              ابحث عن بطاقات معايدة
            </Button>
          </Stack>
        </Flex>
      </Box>
    </chakra.header>
  );
});

export default Hero;
