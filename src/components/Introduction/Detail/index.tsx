import React from "react";
import {
    Box,
    Button,
    Menu,
    MenuButton,
    Flex,
    Image,
    Text
} from "@chakra-ui/react";

import Img2 from "../assets/2.jpg";

const DetailComponent: React.FC = (props) => {

    return (
        <Box>
            <Box>
                <Image src={Img2}></Image>
            </Box>
            <Box padding="5px 30px 5px 0">
                <Text fontSize={"18px"} padding="15px 10px 10px 0">News Need to Meet Its Audiences Where They Are</Text>
                <Text fontSize={"13px"} color="#9ca2a3">Lorem ipsum dolor sit amet, consectetur adipicising elit.</Text>
                <Text fontSize={"13px"} color="#9ca2a3" paddingBottom="10px">Eligendi temporibus praesentiun neque, voluptaturn quan quibusdam.</Text>
                <Text fontSize={"13px"}>Dave Rogers in News</Text>
                <Text fontSize={"13px"} color="#9ca2a3">Jun 14 &dot; 3 min read</Text>
            </Box>
        </Box>
    );

};

export default DetailComponent;