import React from "react";
import { Box } from "@material-ui/core";
import { useToast } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

// models
import ApiError from "../../models/ApiError";

// config
import { SERVER_API_URL } from "../../config";

// components
import BlogEditComponent from "../../components/Blog/BlogEdit";

// consts
import { PATH } from "../../consts"

const NewBlog = () => {
    const API_URL = process.env.REACT_APP_BLOG_API_URL || SERVER_API_URL;
    const history = useHistory();
    const toast = useToast();

    const onNewBlogSave = async (
        title: string,
        text: string,
        imagePath: string
    ) => {
        try {
            const response = await fetch(`${API_URL}/blogs/new_save`, {
                method: "POST",
                body: JSON.stringify({
                    title,
                    text,
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
                data={{ title: "", content: "", imagePath: "" }}
                setData={onNewBlogSave}
            ></BlogEditComponent>
        </Box>
    );
};

export default NewBlog;