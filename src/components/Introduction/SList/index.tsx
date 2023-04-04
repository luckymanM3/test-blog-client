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

const SListComponent: React.FC = (props) => {

    return (
        <Flex padding={"15px 5px 0"} >
            <Box>
                <Text color={"#9ca2a3"}>01</Text>
            </Box>
            <Box padding="5px 5px 5px 15px">
                <Text fontSize={"16px"} padding="0px 10px 10px 0">News Need to Meet Its Audiences Where They Are</Text>
                <Text fontSize={"13px"}>Dave Rogers in News</Text>
                <Text fontSize={"13px"} color="#9ca2a3">Jun 14 &dot; 3 min read</Text>
            </Box>
        </Flex>
    );

};

export default SListComponent;