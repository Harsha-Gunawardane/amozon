import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Product from "../components/Product";

import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../store/actions/product";

function Home() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);

  const { loading, error, products } = productList;
  console.log(products)

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  if(loading) return <Text>loading...</Text>
  if(error) return <Text>{error}</Text>

  return (
    <Box p={5}>
      <SimpleGrid minChildWidth="330px" spacing={10} justifyContent={"center"}>
        {products && products.map((product) => {
          return <Product key={product._id} product={product} />;
        })}
      </SimpleGrid>
    </Box>
  );
}

export default Home;
