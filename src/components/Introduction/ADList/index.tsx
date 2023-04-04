import React from "react";
import {
    Box,
    Flex,
    Image,
    Text
} from "@chakra-ui/react";

import Img2 from "../assets/1.jpg";

const ADListComponent: React.FC = (props) => {

    return (
        <Flex paddingBottom={"15px"} minHeight="130px">
            <Box width={"33.33%"} height="100%">
                <Image src={Img2} minHeight="130px"></Image>
            </Box>
            <Box width={"66.66%"} background="#f8ffff" padding="5px 5px 5px 15px">
                <Text fontSize={"16px"} padding="5px 10px 10px 0">News Need to Meet Its Audiences Where They Are</Text>
                <Text fontSize={"13px"}>Dave Rogers in News</Text>
                <Text fontSize={"13px"} color="#9ca2a3">Jun 14 &dot; 3 min read</Text>
            </Box>
        </Flex>
    );

};

export default ADListComponent;