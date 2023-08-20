import React from 'react'
import { Flex, Text, Image } from "@chakra-ui/react";

import Profile from "../assests/images/profile.jpg";

function Header() {
  return (
    <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        bg={"#203040"}
        pl={3}
        pr={3}
      >
        <Text fontSize={24} fontWeight={"bold"} color={"#FEFEFE"}>
          Amozon
        </Text>
        <Flex>
          <Image
            w={12}
            h={12}
            borderRadius={"50%"}
            src={Profile}
            objectFit={"cover"}
          ></Image>
        </Flex>
      </Flex>
  )
}

export default Header