import {
  Container,
  Box,
  Avatar,
  Button,
  HStack,
  VStack,
  Image,
  Input,
  Spacer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Link,
  MenuDivider,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { HiMoon } from "react-icons/hi";
import { FiSun } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const Navigate = useNavigate();
  const username = localStorage.getItem("username");
  return (
    <Box
      py="2"
      boxShadow="sm"
      border="0 solid #e5e7eb"
      position="fixed"
      top="0"
      width="100%"
      zIndex="1"
      backdropFilter="blur(10px)"
      blur={{ base: "0", sm: "2" }}
      paddingY={4}>
      <Container maxW="1280px" px={4} mx="auto">
        <HStack spacing={4}>
          <Text fontSize="2xl" fontWeight="semibold" color={"white"}>
            عيد الاضحى
          </Text>
          {/* <Image w={"auto"} h={12} src={"/logo.png"} /> */}
          <Spacer />
          <HStack spacing={3}>
            {localStorage.getItem("email") ? (
              console.log("logged in")
            ) : (
              <Button
                color="#fff"
                rounded="md"
                bg="#9e24ce"
                _hover={{ bg: "#7f08ad" }}
                onClick={() => Navigate("/signin")}>
                تسجيل
              </Button>
            )}
            {localStorage.getItem("email") ? (
              console.log("logged in")
            ) : (
              <Button
                color="#fff"
                rounded="md"
                bg="#9e24ce"
                _hover={{ bg: "#7f08ad" }}
                onClick={() => Navigate("/login")}>
                تسجيل الدخول
              </Button>
            )}
            {/* mode dark and light */}
            <Button
              onClick={toggleColorMode}
              rounded="md"
              size="sm"
              px={3}
              py={2}>
              {colorMode === "light" ? <HiMoon /> : <FiSun />}
            </Button>
            <Menu isLazy>
              <MenuButton as={Button} size="sm" px={0} py={0} rounded="full">
                <Avatar size="sm" />
              </MenuButton>
              <MenuList
                zIndex={5}
                border="2px solid"
                borderColor={useColorModeValue("gray.700", "gray.100")}
                boxShadow="4px 4px 0">
                <Link _hover={{ textDecoration: "none" }} isExternal>
                  <MenuItem>
                    <VStack justify="start" alignItems="left">
                      <Text fontWeight="500">{username}</Text>
                    </VStack>
                  </MenuItem>
                </Link>
                <MenuDivider />
                <MenuDivider />
                <MenuItem>
                  <Button
                    w={"100%"}
                    bg={"transparent"}
                    onClick={() => {
                      localStorage.clear();
                      Navigate("/");
                    }}>
                    <Text fontWeight="500" color={"red.500"}>
                      Logout
                    </Text>
                  </Button>
                </MenuItem>
              </MenuList>
            </Menu>
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
};

export default Navbar;
