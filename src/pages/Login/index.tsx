import React, { useRef, useContext } from "react";
import { useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { GoogleLoginButton } from "ts-react-google-login-component";
import {
    InputGroup,
    Input,
    InputLeftElement,
    Button,
    Stack,
    FormControl,
    useColorMode,
    Box,
    useToast,
} from "@chakra-ui/react";

import { EmailIcon, LockIcon } from "@chakra-ui/icons";
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
import { fetchSigninGoogle } from "../../store/me-slice";

const Login = () => {

    const API_URL = process.env.REACT_APP_BLOG_API_URL || SERVER_API_URL;
    const clientConfig = {
        client_id: `958035201784-f1otga6aorensm9hqh06abs5fc7nm8v1.apps.googleusercontent.com`,
    };

    const authContext = useContext(AuthContext);

    const dispatch = useDispatch();
    const history = useHistory();
    const toast = useToast();
    const { colorMode } = useColorMode();

    const emailRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const passwordRef = useRef() as React.MutableRefObject<HTMLInputElement>;

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const response = await fetch(`${API_URL}/auth/login`, {
                method: "POST",
                body: JSON.stringify({
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
            history.push(PATH.HOME);
        } catch (error) {
            toast({
                title: `${error}`,
                status: "error",
                isClosable: true,
                duration: 3000,
            });
        }
    };

    const responseGoogle = (googleUser: gapi.auth2.GoogleUser): void => {
        const profile = googleUser.getBasicProfile();

        const email = profile.getEmail();
        const google = profile.getId();

        dispatch(
            fetchSigninGoogle(
                email,
                google,
                (response: { token: string; expirationTime: string }) => {
                    authContext.login(response.token, response.expirationTime);
                    history.push(PATH.HOME);
                },
                (error: string) => {
                    toast({
                        title: `${error}`,
                        status: "error",
                        isClosable: true,
                        duration: 3000,
                    });
                }
            )
        );
    };

    return (
        <LoginRegister>
            <form onSubmit={handleSubmit}>
                <Stack spacing={3}>
                    <FormControl isRequired>
                        <InputGroup>
                            <Input
                                className="login-input"
                                type="email"
                                placeholder="E-mail Address"
                                aria-label="E-mail Address"
                                bg={colorMode === "light" ? "white" : "inherit"}
                                ref={emailRef}
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
                                bg={colorMode === "light" ? "white" : "inherit"}
                                ref={passwordRef}
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
                            mr="15px"
                        >
                            Login
                        </Button>
                        <Link className="forget-pass" to={""}>
                            Forget password?
                        </Link>
                    </Box>
                </Stack>
            </form>
        </LoginRegister>
    );

};

export default Login;