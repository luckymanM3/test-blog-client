import React from "react";
import { Box, Text, Image, Flex } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom"
import "./login.css";
import Logo from "./logo-light.svg";
import { PATH } from "../../consts";

const LoginRegister: React.FC = (props) => {
    const location = useLocation();
    return (
        <Box width="100%" height="100%" background="#9683FA" padding="60px">
            <Box width="340px" textAlign="center" margin="0 auto">
                <Image src={Logo} width="100px" align="center" margin="40px auto"></Image>
                <Text fontSize="24px" fontWeight="900" lineHeight="1.2" fontFamily="sans-serif" color="white" mb="10px">Get more things done with Loggin platform.</Text>
                <Text color="white" fontSize="18px" fontWeight="300" lineHeight="20px" mb="30px">Access to the most powerfull tool in the entire design and web industry.</Text>
                <Box>
                    <Link to={PATH.LOGIN} className={location.pathname === PATH.LOGIN ? "login_tab active" : "login_tab"}>Login</Link>
                    <Link to={PATH.REGISTER} className={location.pathname === PATH.REGISTER ? "register_tab active" : "register_tab"}>Register</Link>
                    <Box mt="35px">
                        {props.children}
                    </Box>
                    <Box className="main-link">
                        <Link to={""}>Or login with</Link>
                        <Link to={""}>Facebook</Link>
                        <Link to={""}>Google</Link>
                        <Link to={""}>Linkedin</Link>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default LoginRegister;