import { useState, useEffect } from "react";
import { MainLayout } from "../../components/MainLayout";
import { useRouter } from "next/router";
import { NextPageContext } from 'next';

function Post({ post: serverPost }) {
    const [post, setPost] = useState(serverPost);
    const { query } = useRouter();

    useEffect(() => {
        async function load() {
            const response = await fetch(`http://localhost:4200/posts/${query.id}`);
            const data = await response.json();

            setPost(data);
        }

        if (!serverPost) {
            load();
        }
    }, []);

    if (!post) {
        return (
            <MainLayout>
                <p>Loading ...</p>
            </MainLayout>
        );
    }

    return (
        <MainLayout title="Post page">
            <p>Post {post.id}</p>
            <p>{post.title}</p>
            <p>{post.body}</p>
        </MainLayout>
    );
}

export default Post;

interface PostNextPageContext extends NextPageContext {
    query: {
        id: string
    }
}

export const getStaticPaths = async () => {
    const response = await fetch('http://localhost:4200/posts')
    const posts = await response.json();

    const paths = posts.map((post) => ({
        params: { id: post.id.toString() },
    }));

    return { paths, fallback: false };
}

export const getStaticProps = async ({ params, req }: PostNextPageContext) => {
    if (!req) {
        return {
            props: { post: null },
        };
    }

    const response = await fetch(`${process.env.API_URL}/posts/${params.id}`);
    const post = await response.json();

    return {
        props: {
            post,
        },
    };
}