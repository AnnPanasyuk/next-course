import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { MainLayout } from "../components/MainLayout";
import { MyPost } from '../interfaces/post';
import { NextPageContext } from 'next';

interface PostsPageProps {
    posts: MyPost[]
}

function Posts({ posts: serverPosts }: PostsPageProps) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function load() {
            const response = await fetch('http://localhost:4200/posts');
            const data = await response.json();

            setPosts(data);
        }

        if (!serverPosts) {
            load();
        }
    }, []);

    if (!posts || !posts.length) {
        return (
            <MainLayout>
                <p>Loading ...</p>
            </MainLayout>
        );
    }

    return (
        <MainLayout title="Posts page">
            <Head>
                <title>Posts Title</title>
            </Head>
            <p>Posts</p>
            <ul>
                {posts.map(({ id, title }) => (
                    <li key={id}>
                        <Link href={'/post/[id]'} as={`/post/${id}`}>
                            <a>{title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </MainLayout>
    );
}

export default Posts;

export const getStaticProps = async ({ req }: NextPageContext) => {
    if (!req) {
        return {
            props: {
                posts: null,
            },
        };
    }

    const response = await fetch(`${process.env.API_URL}/posts`);
    const posts = await response.json();

    return {
        props: {
            posts
        },
    };
}
