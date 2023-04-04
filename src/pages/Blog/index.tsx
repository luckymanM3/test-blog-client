import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { ThumbUp } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";

import { PATH } from "../../consts";

import BlogViewComponent from "../../components/Blog/BlogView";

// store
import { fetchBlog } from "../../store/blogs-slice";
import { RootState } from "../../store"

const Blog = () => {

    const blogs = useSelector((state: RootState) => state.blogs.blogs);
    const dispatch = useDispatch();
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        dispatch(fetchBlog(id));
    }, [dispatch, id]);

    return (
        <Box width={"1170px"} margin={"0 auto"}>
            {blogs.length > 0 &&
                blogs.map((blog) => (
                    <BlogViewComponent key={blog.blog_id} blog={blog} />
                ))}
        </Box>
    );
}

export default Blog;