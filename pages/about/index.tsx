import Router from "next/router";
import { MainLayout } from "../../components/MainLayout";

export default function About() {
    const buttonLinkHomeHandler = () => {
        Router.push('/');
    };
    const buttonLinkPostsHandler = () => {
        Router.push('/posts');
    };

    return (
        <MainLayout title="About page">
            <p>Page about</p>
            <button onClick={buttonLinkHomeHandler}>Go back to home</button>
            <button onClick={buttonLinkPostsHandler}>Go to posts</button>
        </MainLayout>
    );
}
