import Link from 'next/link';

const About = () => {
  return (  
    <div> 
      about 페이지입니다 <br />
      <Link href='/'>홈으로 이동</Link> <br />
      <Link href='/user/profile'>프로필로 이동</Link>
    </div>
  );
}

export default About;
