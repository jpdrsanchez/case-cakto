import { Button } from '@/shared/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/about">About</Link>
      <Button>UI Button</Button>
    </div>
  )
}
