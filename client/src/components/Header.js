import React from "react";
import { Flex, Text, Image } from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import { Indicator } from "@mantine/core";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Profile from "../assests/images/profile.jpg";

function Header() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const cartValue = cartItems.length;

  const navigate = useNavigate();

  return (
    <Flex
      h={16}
      alignItems={"center"}
      justifyContent={"space-between"}
      bg={"#203040"}
      pl={5}
      pr={5}
    >
      <Text fontSize={24} fontWeight={"bold"} color={"#FEFEFE"}>
        Amozon
      </Text>
      <Flex gap={5} alignItems={"center"}>
        <Indicator
          inline
          label={cartValue}
          size={16}
          disabled={cartValue === 0}
          color="red"
        >
          <FiShoppingCart
            onClick={() => navigate("/cart")}
            cursor={"pointer"}
            fontSize={22}
            color={"#FFFFFF"}
          />
        </Indicator>

        <Image
          w={12}
          h={12}
          borderRadius={"50%"}
          src={Profile}
          objectFit={"cover"}
          alt="User Profile"
        />
      </Flex>
    </Flex>
  );
}

export default Header;
