import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/logo.png'

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 shadow bg-white">
      <div className="flex items-center space-x-3">
        <Image src={logo} alt="טייסים עושים טייסים" width={60} height={60} />
        <h1 className="text-2xl font-bold text-blue-800">טייסים עושים טייסים</h1>
      </div>
      <nav className="space-x-4 text-blue-700">
        <Link href="/">בית</Link>
        <Link href="/usa">לימודים בארה״ב</Link>
        <Link href="/europe">לימודים באירופה</Link>
        <Link href="/canada">לימודים בקנדה</Link>
        <Link href="/posts">פרסומים</Link>
      </nav>
    </header>
  )
}
