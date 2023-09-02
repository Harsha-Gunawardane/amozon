import {
  Box,
  Text,
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Flex,
  InputRightElement,
  IconButton,
  InputGroup,
} from "@chakra-ui/react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { register as registerAction } from "../store/actions/user";

function Register() {
  const dispatch = useDispatch();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    getValues,
  } = useForm();
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/home";

  const user = useSelector((state) => state.newUser);
  const { userInfo, error } = user;

  function onSubmit(values) {
    dispatch(
      registerAction(
        values.name,
        values.email,
        values.password,
        values.confirmPassword
      )
    );
  }

  useEffect(() => {
    if (userInfo) {
      navigate("/login");
    }
  }, [userInfo, navigate, from, error]);

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  const validatePasswordMatch = (value) => {
    const { password } = getValues();
    return value === password || "Passwords do not match";
  };

  const [showPassword, setShowPassword] = useState(false);

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
          Sign up
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
            <FormControl mt={3} isInvalid={errors.name}>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input
                id="name"
                placeholder="Enter name"
                {...register("name", {
                  required: "Name is required",
                })}
              />
              <FormErrorMessage>
                {errors.name && errors.name.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl mt={3} isInvalid={errors.email}>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                id="email"
                placeholder="Enter email address"
                {...register("email", {
                  required: "Email address is required",
                  pattern: {
                    value: emailRegex,
                    message: "Please enter a valid email address",
                  },
                })}
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl mt={3} isInvalid={errors.password}>
              <FormLabel htmlFor="password">Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Enter password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Minimum length should be 8",
                    },
                    pattern: {
                      value: passwordRegex,
                      message:
                        "Password must contain at least 8 characters, including at least one lowercase letter, one uppercase letter, and one digit.",
                    },
                  })}
                />
                <InputRightElement>
                  <IconButton
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    onClick={() => setShowPassword(!showPassword)}
                    icon={showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                  />
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>
                {errors.password && errors.password.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl mt={3} isInvalid={errors.confirmPassword}>
              <FormLabel htmlFor="confirmPassword">Confirm password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  id="confirmPassword"
                  placeholder="Enter confirm password"
                  {...register("confirmPassword", {
                    required: "Confirm password is required",
                    validate: validatePasswordMatch,
                  })}
                />
                <InputRightElement>
                  <IconButton
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    onClick={() => setShowPassword(!showPassword)}
                    icon={showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                  />
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>
                {errors.confirmPassword && errors.confirmPassword.message}
              </FormErrorMessage>
            </FormControl>

            <Flex justifyContent={"center"} flexDirection={"column"}>
              <Button
                mt={8}
                bg={"#ffd814"}
                color={"#555555"}
                _hover={{ backgroundColor: "#ffd814" }}
                isLoading={isSubmitting}
                type="submit"
              >
                Sign up
              </Button>
              <Flex mt={3} mb={3} alignItems={"center"} gap={2}>
                <Text fontSize={14}>Do you have already registered ? </Text>
                <Text
                  cursor={"pointer"}
                  textDecoration={"underline"}
                  onClick={() => navigate("/login")}
                >
                  Sign in
                </Text>
              </Flex>
            </Flex>
          </form>
        </Box>
      </Box>
    </Box>
  );
}

export default Register;
