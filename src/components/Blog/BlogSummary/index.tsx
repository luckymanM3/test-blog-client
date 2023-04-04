// node_modules
import React from "react";
import { Link } from "react-router-dom";
import { Flex, Text, Stack, Divider } from "@chakra-ui/react";
import { ThumbUp } from "@material-ui/icons";

// models
import Blog from "../../../models/Blog";

// consts
import { PATH } from "../../../consts";

import "./blogsummary.css";

// props type
type Props = {
    blog: Blog;
};

const BlogSummaryComponent: React.FC<Props> = ({ blog, ...props }) => {
    return (
        <>
            <Link to={`${PATH.BLOG}/${blog.blog_id}`}>
                <Stack
                    border={"1px solid lightgray"}
                    mt={"8px"}
                    paddingLeft={"5px"}
                    paddingRight={"5px"}
                    boxShadow="sm"
                    _hover={{ boxShadow: "md" }}
                    cursor={"pointer"}
                >
                    <Flex justifyContent={"space-between"}>
                        <Text fontSize={"24px"} lineHeight="1em" padding="15px 10px 0px 15px">{blog.title}</Text>
                        <Text lineHeight="1em" padding="20px 10px 0px 15px">{blog.username}</Text>
                    </Flex>
                    <Divider></Divider>
                    <Text padding={"5px 10px 0px 25px"} height={"50px"} overflowY={"hidden"}>
                        {blog.content}
                    </Text>
                    <Divider></Divider>
                    <Flex
                        justifyContent={"space-between"}
                    >
                        <Text fontSize={"12px"} pl="15px">
                            {blog.createDate}
                        </Text>
                        <Text
                            className="support"
                            display={"flex"}
                            alignItems={"center"}
                            justifyContent={"flex-end"}
                            padding="0 10px 5px 15px"
                            fontSize="14px"
                            lineHeight="1em"
                        >
                            <ThumbUp></ThumbUp>
                            &nbsp;
                            {blog.like}
                        </Text>
                    </Flex>
                </Stack>
            </Link>
        </>
    );
};

export default BlogSummaryComponent;
