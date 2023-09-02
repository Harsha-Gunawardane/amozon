import {
  Box,
  Text,
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Flex,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { login } from "../store/actions/user";

function Login() {
  const dispatch = useDispatch();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/home";

  const user = useSelector((state) => state.user);
  const { userInfo, error } = user;

  function onSubmit(values) {
    console.log(values);
    dispatch(login(values.email, values.password));
  }

  useEffect(() => {
    if (userInfo) {
      navigate(from, { replace: true });
    }
  }, [userInfo, navigate, from, error]);

  return (
    <Box w={"100%"} display={"flex"} justifyContent={"center"} mt={"10vh"}>
      <Box
        w={{
          base: "70%",
          md: "50%",
          lg: "35%",
        }}
        border={"1px solid #E9E9E9"}
        borderRadius={8}
        p={5}
      >
        <Text fontSize={26} fontWeight={"semibold"} color={"#333333"} mb={3}>
          Sign in
        </Text>
        <Box w={"100%"}>
          <Flex
            justifyContent={"center"}
            mt={2}
            mb={2}
            display={error ? "flex" : "none"}
            bg={"#F5D6D3"}
            borderRadius={5}
          >
            <Text pt={1.5} pb={1.5} fontSize={14} color={"#D93400"}>
              {error}
            </Text>
          </Flex>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl mt={3} isInvalid={errors.email}>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                id="email"
                placeholder="Enter email address"
                {...register("email", {
                  required: "Email address is required",
                })}
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl mt={3} isInvalid={errors.password}>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                type="password"
                id="password"
                placeholder="Enter password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Minimum length should be 8",
                  },
                })}
              />
              <FormErrorMessage>
                {errors.password && errors.password.message}
              </FormErrorMessage>
            </FormControl>
            <Flex mt={5} justifyContent={"right"} cursor={"pointer"}>
              <Text
                fontSize={14}
                color={"#454545"}
                textDecoration={"underline"}
              >
                Forget password
              </Text>
            </Flex>
            <Flex justifyContent={"center"} flexDirection={"column"}>
              <Button
                mt={4}
                bg={"#ffd814"}
                color={"#555555"}
                _hover={{ backgroundColor: "#ffd814" }}
                isLoading={isSubmitting}
                type="submit"
              >
                Sign in
              </Button>
              <Flex mt={3} mb={3} alignItems={"center"} gap={2}>
                <Text fontSize={14}>Haven't account yet ? </Text>
                <Text
                  cursor={"pointer"}
                  textDecoration={"underline"}
                  onClick={() => navigate("/register")}
                >
                  Sign up
                </Text>
              </Flex>
            </Flex>
          </form>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
