import { Box, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Product from "../components/Product";

import axios from "../api/axios";
const URL = "/products";

function Home() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(URL, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      console.log(response.data);
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Box p={5}>
      <SimpleGrid minChildWidth="330px" spacing={10} justifyContent={"center"}>
        {products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </SimpleGrid>
    </Box>
  );
}

export default Home;
