import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/layout";

// Next.js에서 pages안의 내용은 주소를 따라기기에  소문자로 작성함
// 컴포넌트 안에서는 대문자로 작성함
const FirstPost = () => {
  return (
    <Layout>
      <h1>First Post</h1>
      <Link href="/">Back to home</Link>
      <Image src="/images/profile.jpg" height={144} width={144}></Image>
    </Layout>
  );
};

export default FirstPost;
