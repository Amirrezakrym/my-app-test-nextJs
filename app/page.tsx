import Link from "next/link"


function Home(){
  return (
  <div>
    <ul>
      <li>
        <Link href="/about">About</Link>
        <hr />
        <Link href="/blog/1123">Blog</Link>
        <hr />
        <Link href="/blog/post-list">post-list</Link>
        <hr />
        <Link href="/shop">Shop</Link>
      </li>
    </ul>
  </div>
  )
}

export default Home