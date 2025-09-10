import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Header />
      <main className="p-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">ברוכים הבאים לפורום ✈️</h2>
        <p>בחרו אחד הנושאים מתפריט הניווט למעלה כדי להצטרף לדיונים.</p>
      </main>
    </div>
  )
}
