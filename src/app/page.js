import Link from 'next/link';
import Header from './components/Header/Header';

export default function Page() {
  return (
    <>
      <Header/>
      <h1 className='text-xs font-bold desktop:text-m'>Home</h1>
      <Link href="/about">About</Link>
    </>
  )
}
 
