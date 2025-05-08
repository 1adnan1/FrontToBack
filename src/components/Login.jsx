import {
    Box,
    Button,
    Center,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    Text,
    useColorModeValue,
    Link,
  } from "@chakra-ui/react";
  import React from "react";
  
  const Login = () => {
    return (
      <Center minH="100vh" bg={useColorModeValue("gray.100", "gray.800")}>
        <Box
          rounded="lg"
          bg={useColorModeValue("white", "gray.700")}
          boxShadow="lg"
          p={8}
          w={{ base: "90%", md: "400px" }}
        >
          <Stack spacing={4}>
            <Heading fontSize="2xl" textAlign="center">
              Log In to your FrontToBack
            </Heading>
  
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" placeholder="FrontToBack@gmail.com" />
            </FormControl>
  
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder="••••••••" />
            </FormControl>
              <Button variant={'link'} alignSelf={"flex-end"} >
                <Link top={'/forgetpassword'} >Forget password?</Link>
              </Button>
            <Stack spacing={6}>
              <Button colorScheme="telegram" type="submit">
               Log In
              </Button>
  
              <Text fontSize="sm" textAlign="center">
                Don’t have an account?{" "}
                <Link color="telegram.200" href="/signup">
                  Sign Up
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Center>
    );
  };
  
  export default Login;
  