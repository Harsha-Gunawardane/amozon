import { Box, Text } from "@chakra-ui/react";
import React from "react";

function SellerInfo() {
  return (
    <Box
      w={{
        base: "100%",
        lg: "40%",
      }}
      mt={2}
      border={"1px solid #E9E9E9"}
      borderRadius={8}
      p={3}
    >
      <Text fontSize={20} fontWeight={"medium"} color={"#454545"}>
        Seller
      </Text>
    </Box>
  );
}

export default SellerInfo;
