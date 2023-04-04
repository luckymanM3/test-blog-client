// node_modules
import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";

import SListComponent from "../../components/Introduction/SList";
import CategoryComponent from "../../components/Introduction/Category";
import { Link } from "react-router-dom";

const CategoryPage = () => {
    return (
        <Box fontSize="2xl" textAlign="center">
            <Box width={"1170px"} margin={"0 auto"}>
                <section>
                    <Flex padding={"0 15px"} textAlign="left" margin={"0 -15px"}>
                        <Box width={"75%"}>
                            <Text textAlign="left" fontSize={"16px"} padding="15px 0 30px 15px">Politics</Text>
                            <Box padding="15px 15px 15px 15px">
                                <CategoryComponent></CategoryComponent>
                                <CategoryComponent></CategoryComponent>
                                <CategoryComponent></CategoryComponent>
                                <CategoryComponent></CategoryComponent>
                                <CategoryComponent></CategoryComponent>
                                <CategoryComponent></CategoryComponent>
                                <CategoryComponent></CategoryComponent>
                                <CategoryComponent></CategoryComponent>
                                <CategoryComponent></CategoryComponent>
                            </Box>
                        </Box>
                        <Box width={"25%"}>
                            <Text textAlign="left" fontSize={"16px"} padding="15px 0 30px 15px">Popular Ports</Text>
                            <Box padding="15px 0 15px 10px">
                                <SListComponent></SListComponent>
                                <SListComponent></SListComponent>
                                <SListComponent></SListComponent>
                                <SListComponent></SListComponent>
                            </Box>
                        </Box>
                    </Flex>
                </section>
            </Box>
        </Box>
    );
};

export default CategoryPage;
