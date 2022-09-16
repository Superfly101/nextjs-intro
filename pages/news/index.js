import Link from "next/link";

function NewsPage() {
  return (
    <>
      <h1>The News Page</h1>;
      <ul>
        <li>
          <Link href="/news/super">NextJS Is A Great Framework</Link>
        </li>
        <li>NextJS Is A Great Framework</li>
      </ul>
    </>
  );
}

export default NewsPage;
