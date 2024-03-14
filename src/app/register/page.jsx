"use client"

import Header from '../components/Header/Header'
import RegisterForm from '../components/Forms/RegisterForm'
import { useRouter } from 'next/navigation'

export default function SignUpPage() {
  const router = useRouter();
  return (
    <>
        <Header showSearchBar={false}/>
        <section className='flex flex-col items-center justify-center pt-[144px] pb-[171px] desktop:pt-[150px] desktop:pb-[251px]'>
          <RegisterForm router={router} />
        </section>  
    </>
  )
}
