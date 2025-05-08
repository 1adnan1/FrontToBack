import {
    Button,
    Container,
    HStack,
    Image,
    Input,
    Text,
    VStack
  } from '@chakra-ui/react';
  import React, { useState } from 'react';
  import { AiOutlineCloudUpload } from 'react-icons/ai';
  
  const Upload = () => {
    const [file, setFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState('');
  
    const handleFileChange = (event) => {
      const selectedFile = event.target.files[0];
      if (selectedFile) {
        setFile(selectedFile);
        const objectUrl = URL.createObjectURL(selectedFile);
        setPreviewUrl(objectUrl);
      }
    };
  
    const renderPreview = () => {
      if (!file || !previewUrl) return null;
  
      if (file.type.startsWith('image/')) {
        return (
          <Image
            src={previewUrl}
            alt="Image Preview"
            maxH="300px"
            borderRadius="lg"
            boxShadow="md"
          />
        );
      }
  
      if (file.type.startsWith('video/')) {
        return (
          <video
            src={previewUrl}
            controls
            style={{
              maxHeight: '300px',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}
          />
        );
      }
  
      return <Text color="gray.500">Preview not available for this file type.</Text>;
    };
  
    return (
      <Container maxW="container.xl" h="100vh" p="16">
        <VStack color="telegram.300" h="full" justifyContent="center" spacing={6}>
          <AiOutlineCloudUpload size="10vmax" />
  
          <HStack as="form" spacing={4}>
            <Input
              type="file"
              onChange={handleFileChange}
              accept="image/*,video/*"
              required
              css={{
                '&::file-selector-button': {
                  border: 'none',
                  width: 'calc(100% + 36px)',
                  height: '100%',
                  marginLeft: '-18px',
                  color: '#24A1DE',
                  backgroundColor: 'white',
                  cursor: 'pointer'
                }
              }}
            />
            <Button colorScheme="telegram">Upload</Button>
          </HStack>
  
          {file && (
            <VStack spacing={4}>
              <Text fontSize="md" color="gray.300">
                Selected File: <strong>{file.name}</strong>
              </Text>
              {renderPreview()}
            </VStack>
          )}
        </VStack>
      </Container>
    );
  };
  
  export default Upload;
  