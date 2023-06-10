import React, { useState, useEffect, useMemo, useRef, forwardRef } from "react";
import {
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  ButtonGroup,
  Button,
  Divider,
  CardFooter,
  Image,
  useColorMode,
  useColorModeValue,
  Box,
  Flex,
  SimpleGrid,
  AspectRatio,
  Input,
  Container,
  filter,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import bgEid from "../assets/img/img-eid.jpg";

const Cards = forwardRef((props , ref) => {
  const [cardProps, setCardProps] = useState(props.cardProps);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };

  const filterItems = useMemo(() => {
    return cardProps.filter((item) => {
      return item.title.toLowerCase().includes(query.toLowerCase());
    });
  }, [cardProps, query]);

  const search = (e) => {
    const filter = props.cardProps.filter((item) => {
      return item.title.toLowerCase().includes(e.toLowerCase());
    });
    setCardProps(filter);
    if (filter.length === 0) {
      return (document.getElementById("result").innerHTML = "No result found");
    } else {
      return (document.getElementById("result").innerHTML = "");
    }
  };

  const storageEmail = localStorage.getItem("email");


  return (
    <>
      {storageEmail ? (
        <>
          <div ref={ref}></div>
          <Container
            w={"100%"}
            maxW={"7xl"}
            px={4}
            mx="auto"
            mt={20}
            id="cards ">
            <Box
              w="100%"
              display={"flex"}
              justifyContent="space-between"
              alignItems={"center"}
              pb={4}>
              <Input
                placeholder="ابحث"
                variant="filled"
                w="100%"
                mr={4}
                onChange={(e) => setQuery(e.target.value)}
              />
            </Box>
            <h1 id="result" className="hidden"></h1>
            <SimpleGrid
              px={{}}
              gap={4}
              columns={{ base: 1, md: 2, lg: 3 }}
              w={{ base: "100%", md: "100%", lg: "100%" }}>
              {filterItems.map((item) => (
                <Card key={item.id}>
                  <CardBody>
                    <Image
                      src={bgEid}
                      alt="Green double couch with wooden legs"
                      borderRadius="lg"
                    />
                    <Stack mt="6" spacing="3">
                      <Heading size="md">{item.title}</Heading>
                      <Text>{item.description}</Text>
                      <Text color="#9e24ce" fontSize="2xl">
                        {item.price}
                      </Text>
                    </Stack>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                    <ButtonGroup spacing="2">
                      <Button variant="solid" bg={"#9e24ce"}>
                        شراء
                      </Button>
                      <Button variant="ghost" color={"#9e24ce"}>
                        اضافة
                      </Button>
                    </ButtonGroup>
                  </CardFooter>
                </Card>
              ))}
            </SimpleGrid>
          </Container>
        </>
      ) : (
        <>
          <div ref={ref}></div>
          <Container
            w={"100%"}
            maxW={"7xl"}
            px={4}
            mx="auto"
            mt={20}
            id="cards ">
            <Box
              w="100%"
              display={"flex"}
              justifyContent="center"
              alignItems={"center"}
              flexDirection={"column"}
              gap={4}
              pb={4}>
              <Text color="#9e24ce" fontSize="2xl">
                الرجاء تسجيل الدخول
              </Text>
              <Button color="#9e24ce" onClick={handleClick}>
                تسجيل الدخول
              </Button>
            </Box>
          </Container>
        </>
      )}
    </>
  );
}

);
export default Cards;