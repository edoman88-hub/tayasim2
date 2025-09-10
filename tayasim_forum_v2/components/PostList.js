import ShareButton from './ShareButton'

export default function PostList() {
  const posts = [
    { id: 1, title: 'נחיתה בלילה', body: 'חוויה מיוחדת בטיסה מעל הים.' },
    { id: 2, title: 'טיפ לטייסים חדשים', body: 'איך להתכונן לטיסת סולו ראשונה.' }
  ];

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <div key={post.id} className="p-4 border rounded-xl shadow bg-white">
          <h2 className="text-xl font-bold mb-2">{post.title}</h2>
          <p className="mb-2">{post.body}</p>
          <ShareButton url={`https://tayasim-demo.com/posts/${post.id}`} text={post.title} />
        </div>
      ))}
    </div>
  )
}
