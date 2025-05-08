import { Box, Heading, Stack, VStack, Text, Button, } from "@chakra-ui/react";
import React, { useState } from "react";

const Videos = () => {
  const videosArr = ["https://www.w3schools.com/html/mov_bbb.mp4","https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4","https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4", "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4","https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4", "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"];
  
  const [videoSrc, setvideoSrc] = useState(videosArr[0]);
  return (
    <Stack direction={["column", "row"]} h={"100vh"}>
      <VStack w={"full"}>
        <video
          controls
          controlsList="nodownload"
          src={videoSrc}
          style={{ width: "100%" }}
        ></video>
        <VStack
          alignItems={"flex-start"}
          p={"8"}
          w={"full"}
          maxH={{ base: "70vh", md: "auto" }}
          overflowY="auto"
        >
          <Heading>Sample Video</Heading>
          <Text>
            This is a samaple Video for testing and demo. This is a description
          </Text>
        </VStack>
      </VStack>

      <VStack
        w={["full", "xl"]}
        alignItems={"stretch"}
        p={"8"}
        spacing={"8"}
        overflowY={"auto"}
      >
         {/* <Button variant={"ghost"} colorScheme="telegram" >
         Lecture </Button> */}
            
        {videosArr.map((item,index)=>(
        <Button variant={"ghost"} colorScheme="telegram"  onClick={()=>{setvideoSrc(item)}}>
            Lecture {index + 1}
            </Button>
            
        ))
        }
      </VStack>
    </Stack>
  );
};

export default Videos;
