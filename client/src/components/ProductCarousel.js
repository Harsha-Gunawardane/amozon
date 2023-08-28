import React, { useState } from "react";
import { Carousel } from "@mantine/carousel";
import { Box, Image } from "@chakra-ui/react";

function ProductCarousel({ images }) {
  const [image, setImage] = useState(images[0]);
  return (
    <Box
      w={{
        base: "100%",
        md: "40%",
      }}
    >
      <Image borderRadius={5} src={image} mb={3} />
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
        {images &&
          images.map((image, index) => {
            return (
              <Carousel.Slide key={index}>
                <Image src={image} onClick={() => setImage(image)} />
              </Carousel.Slide>
            );
          })}
      </Carousel>
    </Box>
  );
}

export default ProductCarousel;
