import { Box, Image, Text } from "@chakra-ui/react";
import { Button } from "@mui/material";
export default function ProductsBox({ imageSrc, name, price }) {
  return (
    <Box
      borderWidth="4px"
      borderRadius="12px"
      overflow="hidden"
      boxShadow="sm"
      _hover={{ boxShadow: "md" }}
      p={4}
      bg="white"
      maxW="sm"
      transition="all 0.3s"
    >
      <Image src={imageSrc} alt={name} mb={5} />
      <Box>
        <Box d="flex" alignItems="baseline">
          <Text
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {name}
          </Text>
        </Box>
        <Box>
          <Text fontSize="xl" color="black">
            ${price}
          </Text>
        </Box>
      </Box>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "black",
          textTransform: "none",
          mt: "5px",
          "&:hover": {
            backgroundColor: "black",
          },
        }}
      >
        <p style={{ fontWeight: "bold", color: "white" }}>Buy now</p>
      </Button>
    </Box>
  );
}
