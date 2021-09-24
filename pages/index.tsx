import Link from 'next/link';
import { MainLayout } from "../components/MainLayout";

export default function Index() {
  return (
      <MainLayout title="Home page">
          <p><Link href={'/about'}><a>About</a></Link></p>
          <p><Link href={'/posts'}><a>Posts</a></Link></p>
          <p>Hello next1 app</p>
      </MainLayout>
  );
}
