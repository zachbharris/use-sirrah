import WindowIcon from '@/components/Icons/window'
import { UserButton, SignInButton, auth } from '@clerk/nextjs'
import Link from 'next/link'

export default function Navigation() {
  const { userId } = auth()
  return (
    <nav className="fixed items-center top-0 left-0 right-0 w-full flex gap-4 p-4">
      <Link href="/" className="flex gap-2 items-center justify-center"><WindowIcon /> <span className="font-bold">useSirrah</span></Link>

      <ul className="">
        <li><Link href="/components">components</Link></li>
      </ul>

      <div className="ml-auto">
        {userId ? <UserButton /> : <SignInButton />}
      </div>
    </nav>
  )
}
