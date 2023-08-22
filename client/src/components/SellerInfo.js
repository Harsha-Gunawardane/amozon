import { Box, Flex, Image, Text, Collapse, Button } from "@chakra-ui/react";
import React from "react";

import Profile from "../assests/images/profile.jpg";
import Rating from "./Rating";

function SellerInfo() {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Box
      overflowX={"scroll"}
      mt={{
        base: 5,
        lg: 0,
      }}
      border={"1px solid #E9E9E9"}
      borderRadius={8}
      p={3}
    >
      <Flex gap={3}>
        <Image
          w={16}
          h={16}
          borderRadius={"50%"}
          objectFit={"cover"}
          src={Profile}
        />
        <Box>
          <Text fontSize={18} fontWeight={"semibold"} color={"#333333"}>
            Gift Store
          </Text>
          <Collapse startingHeight={40} in={show}>
            <Text fontSize={14}>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident. Anim pariatur cliche reprehenderit, enim eiusmod high
              life accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </Text>
          </Collapse>
          <Button mb={2} size="sm" onClick={handleToggle} mt={1}>
            {show ? "- less" : "+ more"}
          </Button>
          <Flex alignItems={"center"} gap={2}>
            <Rating rate={3.4} noOfReviews={214} />
            <Text fontSize={14}>Reviews</Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default SellerInfo;
