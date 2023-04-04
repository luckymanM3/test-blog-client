// node_modules
import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";

import MainSlideComponent from "../../components/Introduction/MainSlide";
import DetailComponent from "../../components/Introduction/Detail";
import ADListComponent from "../../components/Introduction/ADList";
import SListComponent from "../../components/Introduction/SList";
import PItemComponent from "../../components/Introduction/PItem";
import CategoryComponent from "../../components/Introduction/Category";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <Box fontSize="2xl" textAlign="center">
            <Box width={"1170px"} margin={"0 auto"}>
                <MainSlideComponent></MainSlideComponent>

                <section>
                    <Flex padding={"0 15px"} textAlign="left" margin={"0 -15px"}>
                        <Box width={"66.66%"}>
                            <Text textAlign="left" fontSize={"16px"} padding="15px 0 0 15px">Editor's Pick</Text>
                            <Flex marginTop={"30px"}>
                                <Box width={"50%"} padding="15px">
                                    <DetailComponent></DetailComponent>
                                </Box>
                                <Box width={"50%"} padding="15px 0">
                                    <ADListComponent></ADListComponent>
                                    <ADListComponent></ADListComponent>
                                    <ADListComponent></ADListComponent>
                                </Box>
                            </Flex>
                        </Box>
                        <Box width={"33.33%"} padding="15px">
                            <Text textAlign="left" fontSize={"16px"}>Trending</Text>
                            <Box marginTop={"30px"}>
                                <SListComponent></SListComponent>
                                <SListComponent></SListComponent>
                                <SListComponent></SListComponent>
                                <SListComponent></SListComponent>
                            </Box>
                            <Link to={""}>
                                <Text textAlign="left" paddingTop={"15px"} color="#2db700" fontSize={"12px"}>{`SEE ALL TRENDS >`}</Text>
                            </Link>
                        </Box>
                    </Flex>
                </section>

                <MainSlideComponent></MainSlideComponent>

                <section>
                    <Flex padding={"0 15px"} textAlign="left" margin={"0 -15px"}>
                        <Box width={"50%"}>
                            <Text textAlign="left" fontSize={"16px"} padding="15px 0 30px 15px">Politics</Text>
                            <Box padding="15px 0px 15px 15px">
                                <PItemComponent></PItemComponent>
                                <PItemComponent></PItemComponent>
                                <PItemComponent></PItemComponent>
                            </Box>
                        </Box>
                        <Box width={"50%"}>
                            <Text textAlign="left" fontSize={"16px"} padding="15px 0 30px 15px">Business</Text>
                            <Box padding="15px 0 15px 15px">
                                <PItemComponent></PItemComponent>
                                <PItemComponent></PItemComponent>
                                <PItemComponent></PItemComponent>
                            </Box>
                        </Box>
                    </Flex>
                </section>

                <section>
                    <Flex padding={"0 15px"} textAlign="left" margin={"0 -15px"}>
                        <Box width={"75%"}>
                            <Text textAlign="left" fontSize={"16px"} padding="15px 0 30px 15px">Recent News</Text>
                            <Box padding="15px 15px 15px 15px">
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

export default HomePage;
