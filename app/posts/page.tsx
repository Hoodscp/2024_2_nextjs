import React from 'react'

export default function PostsPage() {
  const title = 'Post 1'
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-mono)]">
      <h1>PostsPage</h1>
      <p>Title : {title}</p>
    </div>
  )
}
