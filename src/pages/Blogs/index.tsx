import React, { useEffect, useState, useRef } from "react";
import { Box, Text, Button, Select, Input } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Search, Add } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";

// components
import BlogSummaryComponent from "../../components/Blog/BlogSummary";
import PaginationComponent from "../../components/Blog/Pagination";

// consts
import { PATH } from "../../consts";

// store
import { fetchBlogs } from "../../store/blogs-slice";
import { RootState } from "../../store"

const Blogs = () => {
    const blogs = useSelector((state: RootState) => state.blogs.blogs);
    const count = useSelector((state: RootState) => state.blogs.count);
    const dispatch = useDispatch();

    const titleRef = useRef() as React.MutableRefObject<HTMLInputElement>;

    const [allPagesNumber, setAllPagesNumber] = useState(0);
    const [pageIndex, setPageIndex] = useState<number>(1);
    const [itemCount, setItemCount] = useState<number>(5);
    const [sortType, setSortType] = useState<number>(1);
    const [title, setTitle] = useState<string>("");

    useEffect(() => {
        dispatch(fetchBlogs(pageIndex, itemCount, title, sortType));
    }, [dispatch, pageIndex, itemCount, title, sortType]);

    useEffect(() => {
        setAllPagesNumber(Math.ceil(count / itemCount));
    }, [count, itemCount]);

    return (
        <Box width="1170px" padding="15px" margin={"0 auto"}>
            <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
                mb="15px"
            >

                <Box display={"flex"} alignItems={"center"}>
                    {/* <Input
                        size="sm"
                        width="auto"
                        placeholder="Please input search title"
                        ref={titleRef}
                    />
                    <Button size="sm" borderRadius="0" onClick={() => setTitle(titleRef.current.value)}>
                        <Search />
                    </Button> */}
                </Box>
                <Box display={"flex"} alignItems={"center"}>
                    <Link to={PATH.NEWBLOG} >
                        <Button size="sm" borderRadius="0" onClick={() => setTitle(titleRef.current.value)}>
                            <Add />
                            &nbsp;New Blog
                        </Button>
                    </Link>
                </Box>
            </Box>
            <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
            >
                <Box display={"flex"} alignItems={"center"}>
                    <Select
                        size="sm"
                        variant="outline"
                        defaultValue={itemCount}
                        width={"100px"}
                        onChange={(event) => {
                            setItemCount(Number(event.target.value));
                        }}
                    >
                        <option value={5}>5 Blogs</option>
                        <option value={10}>10 Blogs</option>
                        <option value={20}>20 Blogs</option>
                    </Select>
                    <Select
                        pl="15px"
                        size="sm"
                        variant="outline"
                        width={"200px"}
                        defaultValue={itemCount}
                        onChange={(event) => {
                            setSortType(Number(event.target.value));
                        }}
                    >
                        <option value={1}>newest blog first</option>
                        <option value={2}>lowest blog first</option>
                        <option value={3}>popularity blog first</option>
                        <option value={4}>unpopularity blog first</option>
                    </Select>
                </Box>
                <Box display={"flex"} alignItems={"center"}>
                    <Input
                        size="sm"
                        width="auto"
                        placeholder="Please input search title"
                        ref={titleRef}
                    />
                    <Button size="sm" borderRadius="0" onClick={() => setTitle(titleRef.current.value)}>
                        <Search />
                    </Button>
                </Box>
                {/* <Box display={"flex"} alignItems={"center"}>
                    
                </Box> */}
                <PaginationComponent
                    allPagesNumber={allPagesNumber}
                    itemsPerPage={itemCount}
                    itemsNumber={1}
                    pageChange={(page: number = 1) => {
                        setPageIndex(page);
                    }}
                />
            </Box>

            {blogs.length > 0 ? (
                blogs.map((blog) => (
                    <BlogSummaryComponent key={blog.blog_id} blog={blog} />
                ))
            ) : (
                <Text>No search result!</Text>
            )}
        </Box>
    );
}

export default Blogs;