import React from "react";
import { Card, CardBody, Stack, Text, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import truncate from "../utils/truncate";
import Rating from "./Rating";

function Product({ product }) {
  const navigate = useNavigate();

  return (
    <Card
      maxW="sm"
      onClick={() => navigate(`/product/${product.id}`)}
      cursor={"pointer"}
    >
      <CardBody>
        <Image
          src={product.images[0]}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Text fontWeight={"bold"} fontSize={24} color={"#444444"} size="md">
            {product.name}
          </Text>
          <Text fontSize={14}>{truncate(product.description, 100)}</Text>
          <Text color="blue.600" fontSize="2xl">
            {product.price}
          </Text>
        </Stack>
        <Rating rate={3.4} noOfReviews={24} />
      </CardBody>
    </Card>
  );
}

export default Product;
