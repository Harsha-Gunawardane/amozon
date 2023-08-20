import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const starStyle = {
  color: "#FFD466",
  fontSize: "13px",
};

function Rating({ rate, noOfReviews }) {
  return (
    <Flex alignItems={"center"} gap={2}>
      <Flex>
        {rate < 0.5 ? (
          <BsStarHalf style={starStyle} />
        ) : (
          <BsStarFill style={starStyle} />
        )}
        {rate < 1 ? (
          <BsStar style={starStyle} />
        ) : rate < 1.5 ? (
          <BsStarHalf style={starStyle} />
        ) : (
          <BsStarFill style={starStyle} />
        )}
        {rate < 2 ? (
          <BsStar style={starStyle} />
        ) : rate < 2.5 ? (
          <BsStarHalf style={starStyle} />
        ) : (
          <BsStarFill style={starStyle} />
        )}
        {rate < 3 ? (
          <BsStar style={starStyle} />
        ) : rate < 3.5 ? (
          <BsStarHalf style={starStyle} />
        ) : (
          <BsStarFill style={starStyle} />
        )}
        {rate < 4 ? (
          <BsStar style={starStyle} />
        ) : rate < 4.5 ? (
          <BsStarHalf style={starStyle} />
        ) : (
          <BsStarFill style={starStyle} />
        )}
      </Flex>
      <Text fontSize={14} color={"454545"}>
        {"/ " + noOfReviews}
      </Text>
    </Flex>
  );
}

export default Rating;
