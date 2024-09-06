import Link from 'next/link'

export default function RecentPosts() {
  const posts = [
    { id: 1, title: 'Post 1 (Coming Soon)', description: 'Description for Post 1' },
    { id: 2, title: 'Post 2 (Coming Soon)', description: 'Description for Post 2' },
    { id: 3, title: 'Post 3 (Coming Soon)', description: 'Description for Post 3' }
  ]

  return (
    <section className='pb-24'>
      <div>
        <h2 className='title mb-12'>Recent posts</h2>
        <div>
          {posts.map(post => (
            <div key={post.id} className='mb-6'>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
            </div>
          ))}
        </div>

        <Link
          href='/posts'
          className='mt-8 inline-flex items-center gap-2 text-muted-foreground underline decoration-1 underline-offset-2 transition-colors hover:text-foreground'
        >
          <span>All posts</span>
        </Link>
      </div>
    </section>
  )
}
