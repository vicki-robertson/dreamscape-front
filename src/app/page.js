import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <h1 className='text-xs font-bold desktop:text-m'>Home</h1>
      <Link href="/about">About</Link>
    </div>
  )
}
 
