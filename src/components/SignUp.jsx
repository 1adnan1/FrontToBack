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
    Avatar,
  } from "@chakra-ui/react";
  import React from "react";
  
  const  SignUp = () => {
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
              Sign Up to your FrontToBack
            </Heading>
               <Avatar alignSelf={"center"} boxSize={"20"}/>
            <FormControl id="name" isRequired>
              <FormLabel>Name</FormLabel>
              <Input type="Text" placeholder="Name" />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email Address</FormLabel>
              <Input type="email" placeholder="FrontToBack@gamil.com" />
            </FormControl>
  
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder="••••••••" />
            </FormControl>
              <Button variant={'link'} alignSelf={"flex-end"} >
               
              </Button>
            <Stack spacing={6}>
              <Button colorScheme="telegram" type="submit">
               Sign Up
              </Button>
  
              <Text fontSize="sm" textAlign="center">
               Already have an account?{" "}
                <Link color="telegram.200" href="/login">
                  Log In
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Center>
    );
  };
  
  export default  SignUp;
  