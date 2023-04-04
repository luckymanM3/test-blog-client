// node_modules
import React, { useEffect, useState, useRef } from "react";
import {
    Input,
    Button,
    Stack,
    FormControl,
    useColorMode,
    Box,
    Text,
    Textarea,
    Image,
} from "@chakra-ui/react";

// components
import ImageUploadComponent from "../ImageUpload";

// config
import { BASE_SERVER_API_URL } from "../../../config";

// props type
type Props = {
    data: {
        title: string;
        content: string;
        imagePath: string;
    };
    setData: Function;
};

const BlogEditComponent: React.FC<Props> = ({ data, setData }) => {
    const { colorMode } = useColorMode();
    const titleRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const textRef = useRef() as React.MutableRefObject<HTMLTextAreaElement>;
    const [imagePath, setImageUrl] = useState(data.imagePath);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setData(titleRef.current.value, textRef.current.value, imagePath);
    };

    useEffect(() => {
        setImageUrl(data.imagePath);
    }, [data.imagePath]);

    return (
        <form onSubmit={handleSubmit} className="form-width-90">
            <Stack spacing={3}>
                <FormControl isRequired>
                    {/* <Grid> */}
                    <Text mb="8px" gridArea={"1"}>Title:</Text>
                    <Input
                        gridArea={"11"}
                        type="title"
                        placeholder="Title"
                        aria-label="Title"
                        bg={colorMode === "light" ? "white" : "inherit"}
                        ref={titleRef}
                        defaultValue={data.title}
                    />
                    {/* </Grid> */}
                </FormControl>
                <FormControl isRequired>
                    <Text mb="8px">Text:</Text>
                    <Textarea
                        placeholder="Text"
                        aria-label="Text"
                        bg={colorMode === "light" ? "white" : "inherit"}
                        // resize={"none"}
                        ref={textRef}
                        defaultValue={data.content}
                    />
                </FormControl>
                <FormControl>
                    <Text mb="8px">Image:</Text>
                    <ImageUploadComponent
                        setData={(uploadedImageUrl: string) =>
                            setImageUrl(uploadedImageUrl)
                        }
                    />
                    {imagePath && (
                        <Image
                            width={"100%"}
                            src={`${BASE_SERVER_API_URL}${imagePath}`}
                        />
                    )}
                </FormControl>
                <Box textAlign="center">
                    <Button
                        type="submit"
                        boxShadow="sm"
                        _hover={{ boxShadow: "md" }}
                        _active={{ boxShadow: "lg" }}
                    >
                        Save your Blog!
                    </Button>
                </Box>
            </Stack>
        </form>
    );
};

export default BlogEditComponent;
