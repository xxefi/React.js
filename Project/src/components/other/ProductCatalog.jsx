import { Box, SimpleGrid } from "@chakra-ui/react";
import ProductsBox from "../catalog-boxes/ProductsBox";
import defaultImage from "../../assets/image.png";

export default function ProductCatalog() {
  const products = [
    { id: 1, imageSrc: defaultImage, name: "Product 1", price: 100 },
    { id: 2, imageSrc: defaultImage, name: "Product 2", price: 200 },
    { id: 3, imageSrc: defaultImage, name: "Product 3", price: 300 },
    { id: 4, imageSrc: defaultImage, name: "Product 4", price: 400 },
    { id: 5, imageSrc: defaultImage, name: "Product 5", price: 500 },
    { id: 6, imageSrc: defaultImage, name: "Product 6", price: 600 },
  ];

  return (
    <Box display="flex" justifyContent="center" p={4}>
      <SimpleGrid columns={[1, null, 3]} spacing="50px">
        {products.map((product) => (
          <ProductsBox
            key={product.id}
            imageSrc={product.imageSrc}
            name={product.name}
            price={product.price}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}
