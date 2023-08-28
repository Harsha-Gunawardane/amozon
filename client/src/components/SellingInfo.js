import {
  Box,
  Flex,
  Text,
  NumberInput,
  NumberInputStepper,
  NumberInputField,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import React, { useState } from "react";

function SellingInfo({ stockCount, unitPrice, quantity, setQuantity }) {
  const numericUnitPrice = parseInt(unitPrice.substring(1));

  const [totalPrice, setTotalPrice] = useState(unitPrice);

  const increaseQuantity = () => {
    if (quantity < stockCount) {
      setQuantity(quantity + 1);

      setTotalPrice("$" + numericUnitPrice * (quantity + 1));
    }
  };
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);

      setTotalPrice("$" + numericUnitPrice * (quantity - 1));
    }
  };

  return (
    <Box mt={3} ml={2}>
      <Text
        fontSize={22}
        fontWeight={"semibold"}
        color={stockCount > 0 ? "#15BD06" : "red"}
      >
        {stockCount > 0 ? "In Stock" : "Out of Stock"}
      </Text>
      <Flex alignItems={"center"} justifyContent={"space-between "}>
        <Text>Quantity</Text>
        <NumberInput
          w={150}
          defaultValue={1}
          value={quantity}
          min={1}
          max={stockCount}
          isDisabled={stockCount <= 0}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper onClick={increaseQuantity} />
            <NumberDecrementStepper onClick={decreaseQuantity} />
          </NumberInputStepper>
        </NumberInput>
      </Flex>
      <Flex mt={2} alignItems={"center"} justifyContent={"space-between "}>
        <Text>Price</Text>
        <Text fontSize={22} fontWeight={"semibold"} color={"#333333"}>
          {totalPrice}
        </Text>
      </Flex>
    </Box>
  );
}

export default SellingInfo;
