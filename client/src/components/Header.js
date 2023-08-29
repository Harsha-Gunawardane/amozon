import React from "react";
import { Flex, Text, Image, Button } from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import { Indicator } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Profile from "../assests/images/profile.jpg";
import { logout } from "../store/actions/user";

function Header() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const cartValue = cartItems.length;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const { userInfo } = user;

  const signOutHandler = () => {
    dispatch(logout());
  };

  const headerBtnHandler = () => {
    if (userInfo) {
      signOutHandler();
    } else {
      navigate("/login");
    }
  };

  return (
    <Flex
      h={16}
      alignItems={"center"}
      justifyContent={"space-between"}
      bg={"#203040"}
      pl={5}
      pr={5}
    >
      <Text
        fontSize={24}
        fontWeight={"bold"}
        color={"#FEFEFE"}
        cursor={"pointer"}
        onClick={() => navigate("/home")}
      >
        Amozon
      </Text>
      <Flex gap={5} alignItems={"center"}>
        <Button
          bg={"#ffd814"}
          borderRadius={5}
          p={0}
          h={"max-content"}
          onClick={headerBtnHandler}
        >
          <Text
            pl={5}
            pr={5}
            pt={2}
            pb={2.5}
            fontWeight={"semibold"}
            color={"#333333"}
          >
            {userInfo ? "Sign out" : "Sign in"}
          </Text>
        </Button>

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
