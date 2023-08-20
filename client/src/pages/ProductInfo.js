import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";

import ProductDetails from "../components/ProductInfo";
import ProductCarousel from "../components/ProductCarousel";

function ProductInfo() {
  return (
    <Flex
      gap={5}
      p={5}
      w={"100%"}
      flexDirection={{
        base: "column",
        md: "row",
      }}
    >
      <ProductCarousel />
      <ProductDetails />
    </Flex>
  );
}

export default ProductInfo;
