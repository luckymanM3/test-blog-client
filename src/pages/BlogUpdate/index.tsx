// node_modules
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { useToast, Box } from "@chakra-ui/react";

// components
import BlogEditComponent from "../../components/Blog/BlogEdit";

// store
import { fetchCertainBlog } from "../../store/blogs-slice";
import { RootState } from "../../store";

// models
import ApiError from "../../models/ApiError";

// consts
import { PATH } from "../../consts";

// config
import { SERVER_API_URL } from "../../config";

const BlogUpdate = () => {
    const API_URL = process.env.REACT_APP_BLOG_API_URL || SERVER_API_URL;
    const blog = useSelector((state: RootState) => state.blogs.blog);
    const history = useHistory();
    const toast = useToast();
    const dispatch = useDispatch();
    const { id } = useParams<{ id: string }>();
    useEffect(() => {
        dispatch(fetchCertainBlog(id));
    }, [dispatch, id]);

    const onUpdateBlog = async (
        title: string,
        content: string,
        imagePath: string
    ) => {
        try {
            const response = await fetch(`${API_URL}/blogs/blog/${id}`, {
                method: "PUT",
                body: JSON.stringify({
                    title,
                    content,
                    imagePath,
                }),
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                    "Content-Type": "application/json",
                },
            });
            if (!response.ok) {
                const responseData: ApiError = await response.json();
                throw new Error(responseData.message || response.statusText);
            }
            const responseData: {
                message: string;
            } = await response.json();
            toast({
                title: `${responseData.message}`,
                status: "info",
                isClosable: true,
                duration: 3000,
            });
            history.push(PATH.BLOGS);
        } catch (error) {
            toast({
                title: `${error}`,
                status: "error",
                isClosable: true,
                duration: 3000,
            });
        }
    };

    return (
        <Box width="670px" padding={"15px"} margin={"0 auto"}>
            <BlogEditComponent
                data={{
                    title: blog.title,
                    content: blog.content,
                    imagePath: blog.imagePath,
                }}
                setData={onUpdateBlog}
            ></BlogEditComponent>
        </Box>
    );
};

export default BlogUpdate;
