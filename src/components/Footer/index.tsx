import React, { useRef } from "react";
import {
  Text,
  Box,
  Image,
  Input,
  Button,
  Stack,
  FormControl,
  useToast,
} from "@chakra-ui/react";

import HeartIcon from "./heart-svgrepo-com.svg";
import SendIcon from "./send-paper-svgrepo-com.svg"

const FooterComponent: React.FC = (props) => {
  const emailRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const toast = useToast();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    toast({
      title: "Not conneted server!",
      status: "error",
      isClosable: true,
      duration: 3000,
    });
  };

  return (
    <Box display={"table-row"} backgroundColor={"#f4f7f9"}>
      <footer>
        <Box className="container">
          <Box display={"flex"} marginBottom="50px">
            <Box className="news-letter" width={"50%"} lineHeight="1.6em">
              <Text>
                Newsletter Subcribe
              </Text>
              <Text width={"80%"} fontSize="14px" color={"#59646c"}>
                Lorem ipsum dolor sit amet, consectetur adipicising elit. Perferendis aspernatur ut at quae omnis pariatur obcaecati possimus nisi ea iste!
              </Text>
            </Box>
            <Box className="email-box" width={"50%"}>
              <form onSubmit={handleSubmit} className="form-width-90">
                <Stack spacing={3} position="relative">
                  <FormControl isRequired>
                    <Input
                      width={"300px"}
                      borderRadius="50px"
                      background="white"
                      type="email"
                      boxShadow="md"
                      placeholder="Enter your email"
                      aria-label="Enter your email"
                      // bg={colorMode === "light" ? "white" : "inherit"}
                      ref={emailRef}
                      defaultValue={""}
                    />
                  </FormControl>
                  <Button
                    borderRadius={"50px"}
                    type="submit"
                    boxShadow="sm"
                    _hover={{ boxShadow: "md" }}
                    _active={{ boxShadow: "lg" }}
                    background="black"
                    color={"white"}
                    position="absolute"
                    left={"310px"}
                    top={"-12px"}
                  >
                    <Image color="white" width="16px" src={SendIcon}></Image>
                  </Button>
                </Stack>
              </form>
            </Box>
          </Box>
          <Text textAlign={"center"} color="#59646c" fontSize={"14px"}>
            Copyright&copy;2022 All rights reserved | This template is made with <Image className="heart-icon" src={HeartIcon}></Image> by <span className="colorlib">Colorlib</span>
          </Text>
        </Box>
      </footer>
    </Box>
  );

};

export default FooterComponent;