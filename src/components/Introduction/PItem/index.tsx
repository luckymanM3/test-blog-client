import React from "react";
import {
    Box,
    Flex,
    Image,
    Text
} from "@chakra-ui/react";

import Img2 from "../assets/1.jpg";

const PItemComponent: React.FC = (props) => {

    return (
        <Flex paddingBottom={"15px"} minHeight="180px">
            <Box width={"33.33%"} height="100%">
                <Image src={Img2} minHeight="180px"></Image>
            </Box>
            <Box width={"66.66%"} padding="5px 5px 5px 15px">
                <Text fontSize={"14px"} padding="5px 10px 10px 0">News Need to Meet Its Audiences Where They Are</Text>
                <Text fontSize={"13px"} color="#9ca2a3">Lorem ipsum dolor sit amet, consectetur adipicising elit.</Text>
                <Text fontSize={"13px"} color="#9ca2a3" paddingBottom="10px">Eligendi temporibus praesentiun neque, voluptaturn quan quibusdam.</Text>
                <Text fontSize={"13px"}>Dave Rogers in News</Text>
                <Text fontSize={"13px"} color="#9ca2a3">Jun 14 &dot; 3 min read</Text>
            </Box>
        </Flex >
    );

};

export default PItemComponent;