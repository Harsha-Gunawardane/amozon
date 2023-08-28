import React, { useEffect, useState } from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addToCart } from "../store/actions/cart";
import CartItem from "../components/CartItem";

function Cart() {
  const { id } = useParams();
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems") || [])
  );
  const [updatedId, setUpdatedId] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  const url = new URL(window.location.href);
  const quantity = url.searchParams.get("quantity") || 1;

  const dispatch = useDispatch();

  useEffect(() => {
    const updateCart = async () => {
      if (id) {
        await dispatch(addToCart(id, quantity));
        setCartItems(JSON.parse(localStorage.getItem("cartItems")));
      }
    };
    updateCart();
  }, [dispatch, id, quantity]);

  useEffect(() => {
    setCartItems(JSON.parse(localStorage.getItem("cartItems")));
    setUpdatedId("");
  }, [updatedId]);

  const getNumericPrice = (price) => {
    return parseInt(price.substring(1));
  };

  useEffect(() => {
    const countTotalPrice = (items) => {
      let price = 0;
      let tItems = 0;

      items.forEach((item) => {
        price += getNumericPrice(item.unitPrice) * parseInt(item.quantity);
        tItems += parseInt(item.quantity);
      });

      setTotalPrice(price);
      setTotalItems(tItems);
    };

    countTotalPrice(cartItems);
  }, [totalPrice, totalItems, id, quantity, updatedId, dispatch, cartItems]);

  return (
    <Flex
      justifyContent={"space-around"}
      w={"100%"}
      flexDirection={{
        base: "column",
        lg: "row",
      }}
      gap={5}
    >
      <Box
        w={{
          base: "100%",
          lg: "70%",
        }}
      >
        <Text
          fontSize={32}
          fontWeight={"semibold"}
          color={"#333333"}
          ml={5}
          mt={3}
          mb={3}
        >
          Shopping Cart
        </Text>
        <Box>
          {cartItems.length ? (
            cartItems.map((item, index) => {
              return (
                <CartItem item={item} setUpdatedId={setUpdatedId} key={index} />
              );
            })
          ) : (
            <Text>No items in cart</Text>
          )}
        </Box>
      </Box>
      <Flex
        h={28}
        flexDirection={{
          base: "column",
          sm: "row",
          lg: "column",
        }}
        justifyContent={"space-around"}
        border={"1px solid #D9D9D9"}
        alignItems={"center"}
        borderRadius={8}
        p={3}
        m={3}
        mr={{ base: 3, lg: 8 }}
        mt={{ base: 3, lg: 8 }}
        pl={{ lg: 10 }}
        pr={{ lg: 10 }}
      >
        <Flex gap={4} alignItems={"center"}>
          <Text>{`Subtotal(${totalItems} items) :`} </Text>
          <Text
            fontSize={22}
            color={"#333333"}
            fontWeight={"semibold"}
          >{`$${totalPrice}`}</Text>
        </Flex>
        <Button
          bg={"#febd69"}
          color={"#454545"}
          _hover={{ backgroundColor: "#febd69" }}
        >
          Proceed to checkout
        </Button>
      </Flex>
    </Flex>
  );
}

export default Cart;
