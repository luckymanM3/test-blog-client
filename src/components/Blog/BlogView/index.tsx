// node_modules
import React, { useState, useCallback, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import {
    Text,
    Image,
    Stack,
    Divider,
    Button,
    Box,
    Flex,
    useToast,
} from "@chakra-ui/react";
import { ThumbUpRounded, ShoppingCartRounded, EditRounded } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";

// store
import { fetchDeleteBlog, fetchThumbUp } from "../../../store/blogs-slice";
import { RootState } from "../../../store";

// models
import Blog from "../../../models/Blog";

// config
import { BASE_SERVER_API_URL } from "../../../config";

// consts
import { PATH } from "../../../consts";

import { ethers } from "ethers";
import getBlogContract from "../../../contracts/Blogs";

// props type
type Props = {
    blog: Blog;
};

declare let window: any;

const BlogViewComponent: React.FC<Props> = ({ blog, ...props }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const me = useSelector((state: RootState) => state.me.me);
    const toast = useToast();
    const blog_id = blog.blog_id;
    const [value, setValue] = useState<number>(0);
    const [boughtBlog, setBoughtBlogs] = useState<any>([]);
    // const [blogs, setBlogs] = useState<any>([]);

    const onThumbUp = () => {
        dispatch(
            fetchThumbUp(blog.blog_id, (error: string) => {
                toast({
                    title: `${error}`,
                    status: "error",
                    isClosable: true,
                    duration: 3000,
                });
            })
        );
    };

    const onDeleteBlog = () => {
        dispatch(fetchDeleteBlog(blog.blog_id));
        history.push(PATH.BLOGS);
    };

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const contract = getBlogContract(signer as ethers.Signer);

    const getBlogs = async () => {
        setBoughtBlogs(await contract.getBlogs());
    }

    useEffect(() => {
        getBlogs();
    }, [dispatch]);

    const onBuy = async () => {
        try {
            const res = await contract.purcharse(blog.blog_id);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
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
                <Text padding={"5px 10px 0px 25px"} minHeight={"150px"} overflowY={"hidden"}>
                    {blog.content}
                </Text>
                <Divider></Divider>
                {blog.imagePath && (
                    <Image
                        width={"100%"}
                        // height={"300px"}
                        src={`${BASE_SERVER_API_URL}${blog.imagePath}`}
                    />
                )}
                {blog.imagePath && <Divider></Divider>}
                <Box
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"flex-end"}
                    pb="5px"
                    pr="10px"
                >
                    {/* {boughtBlog[blog.blog_id] === "0x0000000000000000000000000000000000000000" && */}
                        <Button size="sm" onClick={onBuy} mr="5px">
                            <ShoppingCartRounded />
                        </Button>
                    {/* } */}
                    <Button size="sm" onClick={onThumbUp}>
                        <ThumbUpRounded />
                    </Button>
                    &nbsp;&nbsp;
                    {blog.like}
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    {me.id === blog.userId && (
                        <Box>
                            <Link to={`${PATH.UPDATE}/${blog.blog_id}`}>
                                <Button size={"sm"}>
                                    <EditRounded />
                                    Update
                                </Button>
                            </Link>
                        </Box>
                    )}
                </Box>
            </Stack>
        </>
    );
};

export default BlogViewComponent;
