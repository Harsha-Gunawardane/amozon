import React from "react";
import { Carousel } from "@mantine/carousel";
import { Box, Image } from "@chakra-ui/react";

function ProductCarousel() {
  return (
    <Box
      w={{
        base: "100%",
        md: "40%",
      }}
    >
      <Image
        borderRadius={5}
        src={
          "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        }
        mb={3}
      />
      <Carousel
        maw={320}
        mx="auto"
        slideSize="70%"
        height={200}
        slideGap="md"
        loop
        dragFree
        withIndicators
      >
        <Carousel.Slide>
          <Image
            src={
              "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            }
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image
            src={
              "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            }
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image
            src={
              "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            }
          />
        </Carousel.Slide>
      </Carousel>
    </Box>
  );
}

export default ProductCarousel;
