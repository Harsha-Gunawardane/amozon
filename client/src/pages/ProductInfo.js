import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import ProductDetails from "../components/ProductInfo";
import ProductCarousel from "../components/ProductCarousel";
import { detailsProduct } from "../store/actions/product";

function ProductInfo() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  console.log(product);
  console.log(id);

  useEffect(() => {
    if (id) {
      dispatch(detailsProduct(id));
    }
  }, [dispatch, id]);

  return (
    <Box>
      {loading ? (
        <Text>Loading...</Text>
      ) : error ? (
        <Text>{error}</Text>
      ) : (
        <Flex
          gap={5}
          p={5}
          w={"100%"}
          flexDirection={{
            base: "column",
            md: "row",
          }}
        >
          <ProductCarousel images={product.images} />
          <ProductDetails product={product} />
        </Flex>
      )}
    </Box>
  );
}

export default ProductInfo;
