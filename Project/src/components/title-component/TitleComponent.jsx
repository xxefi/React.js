import React from "react";

export default function TitleComponent({ Box, Button }) {
  return (
    <Box
      position="absolute"
      left="50%"
      bottom="50%"
      transform="translate(-50%, -50%)"
    >
      <Box textAlign="center">
        <Box mb={4}>
          <h1 className="text-6xl font-bold mb-2">Title</h1>
          <p className="text-2xl mb-4">Subtitle</p>
        </Box>
        <Box display="flex" justifyContent="center" mt={4}>
          <Button backgroundColor="white" colorScheme="gray" mr={2}>
            Button
          </Button>
          <Button backgroundColor="black" colorScheme="white" ml={2}>
            Button
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
