import Header from '../components/Header'
import PostList from '../components/PostList'

export default function USA() {
  return (
    <div>
      <Header />
      <main className="p-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">לימודים בארה״ב 🇺🇸</h2>
        <PostList />
      </main>
    </div>
  )
}
