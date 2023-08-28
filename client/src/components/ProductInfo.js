import { Box, Flex, Text, Collapse, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Rating from "./Rating";
import SellerInfo from "./SellerInfo";
import SellingInfo from "./SellingInfo";

function ProductInfo({ product }) {
  const [show, setShow] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleToggle = () => setShow(!show);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    navigate(`/cart/${product.id}?quantity=${quantity}`);
  };

  return (
    <Box
      w={{
        base: "100%",
        md: "60%",
      }}
    >
      <Text
        fontSize={32}
        fontWeight={"bold"}
        color={"#232323"}
        fontStyle={"Roboto"}
        fontFamily={"sans-serif"}
      >
        {product.name}
      </Text>
      <Flex
        justifyContent={"space-between"}
        flexDirection={{
          base: "column",
          lg: "row",
        }}
        w={"100%"}
        gap={5}
      >
        <Box
          w={{
            base: "100%",
            lg: "60%",
          }}
        >
          <Collapse startingHeight={50} in={show}>
            <Text fontSize={15}>{product.description}</Text>
          </Collapse>
          <Button size="sm" onClick={handleToggle} mt={1}>
            {show ? "- less" : "+ more"}
          </Button>
          <Box mt={1} ml={2}>
            <Text color="blue.600" fontSize="2xl">
              {product.price}
            </Text>
            <Rating rate={3.4} noOfReviews={24} />
          </Box>
        </Box>
        <Box
          w={{
            base: "100%",
            lg: "40%",
          }}
        >
          <SellerInfo />
          <SellingInfo
            stockCount={product.stockCount}
            unitPrice={product.price}
            quantity={quantity}
            setQuantity={setQuantity}
          />
        </Box>
      </Flex>
      <Flex gap={3} mt={8} justifyContent={"right"}>
        <Button
          bg={"#383838"}
          color={"#FFFFFF"}
          _hover={{
            bg: "#383838",
            color: "#FFFFFF",
          }}
          fontWeight="normal"
          mr="12px"
          h={9}
          pl={4}
          pr={4}
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>
        <Button
          bg={"#0074D9"}
          color={"#FFFFFF"}
          _hover={{
            bg: "#0074D9",
            color: "#FFFFFF",
          }}
          fontWeight="normal"
          mr="12px"
          h={9}
          pl={4}
          pr={4}
        >
          Buy now
        </Button>
      </Flex>
    </Box>
  );
}

export default ProductInfo;
