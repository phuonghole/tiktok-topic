import { useState, useEffect } from "react";
import axios from "axios"
const PostApi = () => {
    const [post, setPost] = useState([])
    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/topic")
            setPost(res.data)
        };
        getPost()
    }, [])
    return {
        post: [post, setPost]
    }
}

export default PostApi
