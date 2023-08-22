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
import React from "react";

function SellingInfo() {
  return (
    <Box mt={3} ml={2}>
      <Text fontSize={22} fontWeight={"semibold"} color={"#15BD06"}>
        In Stock
      </Text>
      <Flex alignItems={"center"} justifyContent={"space-between "}>
        <Text>Quantity</Text>
        <NumberInput w={150} defaultValue={1} min={1} max={20}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </Flex>
      <Flex mt={2} alignItems={"center"} justifyContent={"space-between "}>
        <Text>Price</Text>
        <Text fontSize={22} fontWeight={"semibold"} color={"#333333"}>
          $340
        </Text>
      </Flex>
    </Box>
  );
}

export default SellingInfo;
