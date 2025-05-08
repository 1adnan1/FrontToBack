import React from 'react';
import { Box, Text, Center,} from '@chakra-ui/react';

const VideoCategoryPage = () => {
  return (
    <Center minH="100vh" >
      <Box p={6} bg="telegram.300" borderRadius="md" boxShadow="md">
        <Text fontSize="lg" variant={"ghost"} color="white" fontWeight="bold">
          Currently! There is no Free Videos
        </Text>
      </Box>
    </Center>
  );
};

export default VideoCategoryPage;
