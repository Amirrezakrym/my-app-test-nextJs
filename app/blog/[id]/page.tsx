'use client'

import { usePathname } from "next/navigation"

function PostPage({ params }: { params: { id: string } }){
    const pathname = usePathname()

    console.log('====================================');
    console.log(pathname);
    console.log('====================================');

    return (
        <>
            <h2 className="text-lg">Poat Page</h2>
            <div>Post ID: {params.id}</div>
        </>
    )
}
export default PostPage