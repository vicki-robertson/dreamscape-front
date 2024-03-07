"use client"

import Header from '../components/Header/Header'
import LoginForm from '../components/Forms/LoginForm'

export default function Login() {


  
  return (
    <>
        <Header/>
        <section className='flex flex-col items-center justify-center pt-[144px] pb-[171px] desktop:pt-[150px] desktop:pb-[251px]'>
          <LoginForm/>
        </section>  
    </>
  )
}
