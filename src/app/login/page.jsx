"use client"

import Header from '../components/Header/Header'
import LoginForm from '../components/Forms/LoginForm'
import { useRouter } from 'next/navigation'

export default function Login() {

  const router = useRouter();

  return (
    <>
        <Header showSearchBar={false} />
        <section className='flex flex-col items-center justify-center pt-[50px] pb-[140px] desktop:pt-[120px] desktop:pb-[230px]'>
          <LoginForm  router={router}/>
        </section>  
    </>
  )
}
