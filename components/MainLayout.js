import Link from "next/link";
import Head from "next/head";

export function MainLayout({ children, title = 'Next app' }) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="keywords" content="next,javascript"/>
                <meta name="description" content="this is test next app"/>
                <meta charSet="utf-8" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
            </Head>
            <nav>
                <Link href={'/'}><a>Home</a></Link>
                <Link href={'/about'}><a>About</a></Link>
                <Link href={'/posts'}><a>Posts</a></Link>
            </nav>
            <main>
                {children}
            </main>
            <style jsx>
                {`
                nav {
                    posistion: fixed;
                    height: 60px;
                    left: 0;
                    right: 0;
                    background: darkblue;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                }
                
                nav a {
                    color: white;
                    text-decoration: none;
                }
                
                main {
                    margin-top: 60px;
                    padding-left: 20px;
                }
                `}
            </style>
        </>
    );
}