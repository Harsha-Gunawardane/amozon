import {
  Box,
  Button,
  Flex,
  Image,
  NumberInput,
  Text,
  NumberInputStepper,
  NumberInputField,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Divider,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";

import truncate from "../utils/truncate";
import Rating from "../components/Rating";
import { addToCart, deleteItem as deleteFromCart } from "../store/actions/cart";

function CartItem({ item, setUpdatedId }) {
  const dispatch = useDispatch();
  const containerRef = useRef(null);

  const [truncateValue, setTruncateValue] = useState(180);
  const [quantity, setQuantity] = useState(parseInt(item.quantity));

  const increaseQuantity = () => {
    if (quantity < item.stockCount) {
      setQuantity(quantity + 1);
      dispatch(addToCart(item.product, quantity + 1));
      setUpdatedId(item.product);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      dispatch(addToCart(item.product, quantity - 1));
      setUpdatedId(item.product);
    }
  };

  useEffect(() => {
    const updateTruncateValue = () => {
      const containerWidth = containerRef.current.offsetWidth;

      if (containerWidth < 500) {
        setTruncateValue(40);
      } else if (containerWidth < 600) {
        setTruncateValue(60);
      } else if (containerWidth < 1200) {
        setTruncateValue(100);
      } else {
        setTruncateValue(180);
      }
    };

    updateTruncateValue();
    window.addEventListener("resize", updateTruncateValue);

    return () => {
      window.removeEventListener("resize", updateTruncateValue);
    };
  }, []);

  const deleteItem = () => {
    dispatch(deleteFromCart(item.product));

    const items = JSON.parse(localStorage.getItem("cartItems"));
    const updatedItems = items.filter((x) => x.product !== item.product);

    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
    setUpdatedId(item.product);
  };

  return (
    <>
      <Flex
        pt={3}
        pb={3}
        pl={5}
        pr={5}
        w={"100%"}
        gap={5}
        alignItems={"center"}
        ref={containerRef}
      >
        <Image
          w={{
            base: 20,
            md: 36,
          }}
          h={{
            base: 20,
            md: 36,
          }}
          objectFit={"cover"}
          borderRadius={8}
          src={item.Image}
        />
        <Box>
          <Text fontSize={22} color={"#333333"} fontWeight={"semibold"}>
            {truncate(item.name, 25)}
          </Text>
          <Text fontSize={14} mt={1} mb={1}>
            {truncate(item.description, truncateValue)}
          </Text>
          <Rating rate={2.6} noOfReviews={26} />
          <Flex alignItems={"center"} gap={5} justifyContent={"right"}>
            <NumberInput
              w={{
                base: 20,
                md: 40,
              }}
              defaultValue={1}
              value={quantity}
              min={1}
              max={item.stockCount}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper onClick={increaseQuantity} />
                <NumberDecrementStepper onClick={decreaseQuantity} />
              </NumberInputStepper>
            </NumberInput>
            <Text fontSize={18} fontWeight={"semibold"} color={"#333333"}>
              {`$${item.unitPrice * quantity}`}
            </Text>
          </Flex>
        </Box>
        <Button
          ml={5}
          p={0}
          bg={"#F5DCD8"}
          _hover={{ backgroundColor: "#F5DCD8" }}
        >
          <AiFillDelete onClick={deleteItem} fontSize={24} color="#D93400" />
        </Button>
      </Flex>
      <Divider />
    </>
  );
}

export default CartItem;
