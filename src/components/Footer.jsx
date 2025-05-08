import {
    Box,
    Stack,
    Text,
    HStack,
    IconButton,
    Input,
    Button,
    Divider,
    useColorModeValue,
  } from "@chakra-ui/react";
import { AiOutlineAccountBook, AiOutlineSend } from "react-icons/ai";
  import { FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";
  
  const Footer = () => {
    const bg = useColorModeValue("gray.100", "gray.900");
    const text = useColorModeValue("gray.700", "gray.400");
  
    return (
      <Box bg={bg} color={text} mt={10}>
        <Stack spacing={6} px={{ base: 6, md: 20 }} py={10}>
          {/* Branding */}
          <Text fontSize="2xl" fontWeight="bold">
            🎬 FrontToBack
          </Text>
  
          {/* Subscribe Section */}
          <Stack spacing={3}>
            <Text fontSize="md" fontWeight="medium">
              Subscribe to get the latest updates and releases:
            </Text>
            <HStack
              as="form"
              maxW="400px"
              spacing={2}
              onSubmit={(e) => {
                e.preventDefault();
                alert("Subscribed!");
              }}
            >
              <Input
                type="email"
                placeholder="Enter your email"
                variant="filled"
                bg={useColorModeValue("white", "gray.700")}
                required
              />
              <Button variant={"ghost"}  colorScheme="telegram" type="submit">
                <AiOutlineSend/>
              </Button>
            </HStack>
          </Stack>
  
          <Divider />
  
          {/* Bottom Row */}
          <HStack justify="space-between" flexWrap="wrap">
            <Text fontSize="xs">
              &copy; {new Date().getFullYear()} FrontToBack. All rights reserved. Built by  <Box
      as="a"
      href="https://github.com/1adnan1"
      color="teal.500"
      fontWeight="medium"
      target="_blank"
    >
      Ahmad Lasani
    </Box>
            </Text>
            <HStack spacing={3}>
              <IconButton
                as="a"
                href="https://youtube.com"
                target="_blank"
                icon={<FaYoutube />}
                variant="ghost"
                aria-label="YouTube"
              />
              <IconButton
                as="a"
                href="https://twitter.com"
                target="_blank"
                icon={<FaTwitter />}
                variant="ghost"
                aria-label="Twitter"
              />
              <IconButton
                as="a"
                href="https://instagram.com"
                target="_blank"
                icon={<FaInstagram />}
                variant="ghost"
                aria-label="Instagram"
              />
            </HStack>
          </HStack>
        </Stack>
      </Box>
    );
  };
  
  export default Footer;
  