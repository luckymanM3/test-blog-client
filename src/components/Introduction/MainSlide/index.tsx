import React from "react";
import {
    Box,
    Flex,
    Image,
    Text
} from "@chakra-ui/react";

import SlideImg from "./main-slide.jpg";



const MainSlideComponent: React.FC = (props) => {

    return (
        <section className="main-slide">
            <Flex padding={"0 15px"}>
                <Box width={"50%"}>
                    <Image src={SlideImg}></Image>
                </Box>
                <Box width={"50%"} background="#f8ffff" padding="40px" textAlign={"left"}>
                    <Text fontSize={"14px"} color="#9ca2a3">EDITOR'S PICK</Text>
                    <Text fontSize={"24px"} padding="5px 70px 10px 0">News Need to Meet Its Audiences Where They Are</Text>
                    <Text fontSize={"13px"} color="#9ca2a3" padding="5px 70px 20px 0">Lorem ipsum dolor sit amet, consectetur adipicising elit. Eligendi temporibus praesentiun neque, voluptaturn quan quibusdam. Lorem ipsum dolor sit amet, consectetur adipicising elit. Eligendi temporibus praesentiun neque, voluptaturn quan quibusdam. Lorem ipsum dolor sit amet, consectetur adipicising elit. Eligendi temporibus praesentiun neque, voluptaturn quan quibusdam.</Text>
                    <Text fontSize={"13px"}>Dave Rogers in News</Text>
                    <Text fontSize={"13px"} color="#9ca2a3">Jun 14 &dot; 3 min read</Text>
                </Box>
            </Flex>
            {/* <Box></Box> */}
        </section>
    );

};

export default MainSlideComponent;