import { Box, Flex, Text, Collapse, Button } from "@chakra-ui/react";
import React from "react";

import Rating from "./Rating";
import SellerInfo from "./SellerInfo";

function ProductInfo() {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

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
        Living room Sofa
      </Text>
      <Flex
        justifyContent={"space-between"}
        flexDirection={{
          base: "column",
          lg: "row",
        }}
        w={"100%"}
      >
        <Box
          w={{
            base: "100%",
            lg: "60%",
          }}
        >
          <Collapse startingHeight={50} in={show}>
            <Text fontSize={15}>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident. Anim pariatur cliche reprehenderit, enim eiusmod high
              life accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </Text>
          </Collapse>
          <Button size="sm" onClick={handleToggle} mt={1}>
            {show ? "- less" : "+ more"}
          </Button>
          <Box mt={1} ml={2}>
            <Text color="blue.600" fontSize="2xl">
              $340
            </Text>
            <Rating rate={3.4} noOfReviews={24} />
          </Box>
        </Box>
        <SellerInfo />
      </Flex>
    </Box>
  );
}

export default ProductInfo;
