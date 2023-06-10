import React from "react";
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";
import { Box, Button, Input, FormLabel, Text } from "@chakra-ui/react";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailStorage = localStorage.getItem("email", email);
    const passwordStorage = localStorage.getItem("password", password);
    if (emailStorage === email && passwordStorage === password) {
      navigate("/");
    } else {
      alert("Invalid Email or Password");
    }
  };
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"100vh"}
        width={"100vw"}
        flexDirection={"column"}>
        <Text fontSize={"2xl"} m={4} fontWeight={"bold"}>
          تسجيل دخول
        </Text>
        <FormLabel htmlFor="email">الايميل</FormLabel>
        <Input
          onChange={(e) => setEmail(e.target.value)}
          maxW={"300px"}
          type="text"
          border={"1px solid #7f08ad"}
          borderRadius={"5px"}
          placeholder="الايميل"
          _focus={{
            border: "1px solid #7f08ad",
            borderRadius: "5px",
            boxShadow: "0px 0px 10px #7f08ad",
          }}
        />
        <FormLabel htmlFor="password">كلمة السر</FormLabel>
        <Input
          onChange={(e) => setPassword(e.target.value)}
          maxW={"300px"}
          type="password"
          border={"1px solid #7f08ad"}
          borderRadius={"5px"}
          placeholder="كلمة السر"
          _focus={{
            border: "1px solid #7f08ad",
            borderRadius: "5px",
            boxShadow: "0px 0px 10px #7f08ad",
          }}
        />
        <Button
          onClick={handleSubmit}
          bg={"#7f08ad"}
          _hover={{ bg: "#570378" }}
          _active={{ bg: "#570378" }}
          mt={4}>
          تسجيل دخول
        </Button>
      </Box>
    </>
  );
}

export default Login;
