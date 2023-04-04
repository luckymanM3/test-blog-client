import React, { useRef, useContext } from "react";
import { useHistory } from "react-router-dom";
import {
    InputGroup,
    Input,
    Button,
    Stack,
    FormControl,
    useColorMode,
    Box,
    useToast,
} from "@chakra-ui/react";

import LoginRegister from "../../components/LoginRegister"

import { SERVER_API_URL } from "../../config";

// context
import AuthContext from "../../store/auth-context";

// models
import AuthenticatedUser from "../../models/AuthUser";
import ApiError from "../../models/ApiError";

// consts
import { PATH } from "../../consts";

// store

const Register = () => {

    const API_URL = process.env.REACT_APP_BLOG_API_URL || SERVER_API_URL;
    const { colorMode } = useColorMode();
    const authContext = useContext(AuthContext);
    const toast = useToast();
    const history = useHistory();
    const usernameRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const emailRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const passwordRef = useRef() as React.MutableRefObject<HTMLInputElement>;

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const response = await fetch(`${API_URL}/auth/register`, {
                method: "POST",
                body: JSON.stringify({
                    username: usernameRef.current.value,
                    email: emailRef.current.value,
                    password: passwordRef.current.value,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (!response.ok) {
                const responseData: ApiError = await response.json();
                throw new Error(responseData.message || response.statusText);
            }
            const responseData: AuthenticatedUser = await response.json();
            const expirationTime = new Date(
                new Date().getTime() + responseData.expirationTime * 1000
            );
            authContext.login(
                responseData.token,
                expirationTime.toISOString()
            );
            history.push(PATH.LOGIN);
        } catch (error) {
            toast({
                title: `${error}`,
                status: "error",
                isClosable: true,
                duration: 3000,
            });
        }
    };

    return (
        <LoginRegister>
            <form onSubmit={handleSubmit}>
                <Stack spacing={3}>
                    <FormControl isRequired>
                        <InputGroup>
                            <Input
                                className="login-input"
                                type="text"
                                placeholder="Full Name"
                                aria-label="Full Name"
                                ref={usernameRef}
                                bg={colorMode === "light" ? "white" : "inherit"}
                            />
                        </InputGroup>
                    </FormControl>
                    <FormControl isRequired>
                        <InputGroup>
                            <Input
                                className="login-input"
                                type="email"
                                placeholder="E-mail Address"
                                aria-label="E-mail Address"
                                ref={emailRef}
                                bg={colorMode === "light" ? "white" : "inherit"}
                            />
                        </InputGroup>
                    </FormControl>
                    <FormControl isRequired>
                        <InputGroup>
                            <Input
                                className="login-input"
                                type="password"
                                placeholder="Password"
                                aria-label="Password"
                                ref={passwordRef}
                                bg={colorMode === "light" ? "white" : "inherit"}
                            />
                        </InputGroup>
                    </FormControl>
                    <Box textAlign="center" className="submit-box" >
                        <Button
                            p="6px 28px"
                            color="white"
                            bg="#57D38C"
                            size="sm"
                            type="submit"
                        >
                            Register
                        </Button>
                    </Box>
                </Stack>
            </form>
        </LoginRegister>
    );

};

export default Register;