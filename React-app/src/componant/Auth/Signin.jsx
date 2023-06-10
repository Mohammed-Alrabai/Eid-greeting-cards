import React from "react";
import {
  Link,
  useNavigate,
  useLocation,
  useParams,

} from "react-router-dom";
import { useState } from "react";
import { Box, Button, Input, FormLabel , Text } from "@chakra-ui/react";

function Signin() {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let validationEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const chackEmail = validationEmail.test(email);
  const handleSubmit = (e) => {

      if (username.length > 0 && chackEmail === true && password.length > 4) {
        e.preventDefault();
        localStorage.setItem("username", username);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        navigate("/login");
      } else {
        alert("Please fill all the fields");
      }
        
    }
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"100vh"}
        width={"100vw"}
        flexDirection={"column"}>
          <Text fontSize={"2xl"} m={4} fontWeight={"bold"}>انشاء حساب جديد</Text>
        <FormLabel htmlFor="username">اسم المستخدم</FormLabel>
        <Input
          onChange={(e) => setUsername(e.target.value)}
          maxW={"300px"}
          type="text"
          border={"1px solid #7f08ad"}
          borderRadius={"5px"}
          placeholder="اسم المستخدم"
          _focus={{
            border: "1px solid #7f08ad",
            borderRadius: "5px",
            boxShadow: "0px 0px 10px #7f08ad",
          }}
          _hover={{
            border: "1px solid #7f08ad",
            borderRadius: "5px",
            boxShadow: "0px 0px 10px #7f08ad",
          }}
        />
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
          _hover={{
            border: "1px solid #7f08ad",
            borderRadius: "5px",
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
          _hover={{
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
          انشاء حساب
        </Button>
      </Box>
    </>
  );
}

export default Signin;
