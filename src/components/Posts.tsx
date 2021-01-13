import React, {useEffect, useState} from 'react'
import Post from './Post'
import {PostI} from "../interfaces";
import {Loader} from "./Loader";

export interface Props {
    filter: string
}



export default ({filter}: Props) => {
    const [posts, setPosts] = useState<PostI[]>([]);
    useEffect(() => {
        const getPosts = async () => {
            try {
                const data = await fetch('https://jsonplaceholder.typicode.com/posts');
                const posts: PostI[] = await data.json();
                setPosts(posts);
            } catch(e){
                console.log(e)
            }
        }
        getPosts();
    }, [])

    const filteredPosts = posts.filter(({title, body}) => {
        return title.includes(filter) || body.includes(filter);
    });
    return posts.length === 0 ? <Loader/> : (<div>
        {filteredPosts.map((post, ind) => (
            <Post key={ind} post={post} />
        ))}
    </div>)
}